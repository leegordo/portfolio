"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  life: number;
  energy: number;
}

const TRAIL_LENGTH = 34;
const FOLLOW_SPEED = 0.32;
const TRAIL_FADE = 0.028;

export default function CursorTracer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setHasFinePointer(finePointer.matches);

    updatePointer();
    finePointer.addEventListener("change", updatePointer);
    return () => finePointer.removeEventListener("change", updatePointer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const marker = markerRef.current;

    if (!canvas || !marker || !hasFinePointer || reducedMotion) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) return;

    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const trail: TrailPoint[] = [];
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let hasPosition = false;
    let isVisible = false;
    let frame: number | null = null;
    let previousFrameTime = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const wake = () => {
      if (frame === null) frame = requestAnimationFrame(render);
    };

    const render = (frameTime: number) => {
      frame = null;
      context.clearRect(0, 0, width, height);

      const frameScale = previousFrameTime
        ? Math.min(2, (frameTime - previousFrameTime) / (1000 / 60))
        : 1;
      previousFrameTime = frameTime;
      const follow = 1 - Math.pow(1 - FOLLOW_SPEED, frameScale);

      const previousX = current.x;
      const previousY = current.y;
      current.x += (target.x - current.x) * follow;
      current.y += (target.y - current.y) * follow;

      const speed = Math.hypot(current.x - previousX, current.y - previousY);
      const distanceToTarget = Math.hypot(target.x - current.x, target.y - current.y);
      const lastPoint = trail[trail.length - 1];
      const distanceFromTrail = lastPoint
        ? Math.hypot(current.x - lastPoint.x, current.y - lastPoint.y)
        : Infinity;

      if (isVisible && speed > 0.35 * frameScale && distanceFromTrail > 1.5) {
        trail.push({
          x: current.x,
          y: current.y,
          life: 1,
          energy: Math.min(1, speed / frameScale / 9),
        });
        if (trail.length > TRAIL_LENGTH) trail.shift();
      }

      marker.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

      context.lineWidth = 1.4;
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = accent;

      for (let index = 0; index < trail.length - 1; index += 1) {
        const previous = trail[Math.max(0, index - 1)];
        const start = trail[index];
        const end = trail[index + 1];
        const next = trail[Math.min(trail.length - 1, index + 2)];
        const controlStartX = start.x + (end.x - previous.x) / 6;
        const controlStartY = start.y + (end.y - previous.y) / 6;
        const controlEndX = end.x - (next.x - start.x) / 6;
        const controlEndY = end.y - (next.y - start.y) / 6;

        context.globalAlpha =
          end.life * Math.max(start.energy, end.energy) * 0.72;
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.bezierCurveTo(
          controlStartX,
          controlStartY,
          controlEndX,
          controlEndY,
          end.x,
          end.y,
        );
        context.stroke();
      }
      context.globalAlpha = 1;

      for (let index = trail.length - 1; index >= 0; index -= 1) {
        trail[index].life -= TRAIL_FADE * frameScale;
        if (trail[index].life <= 0) trail.splice(index, 1);
      }

      if (distanceToTarget > 0.2 || trail.length > 0) {
        wake();
      } else {
        previousFrameTime = 0;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;

      target.x = event.clientX;
      target.y = event.clientY;

      if (!hasPosition) {
        current.x = target.x;
        current.y = target.y;
        hasPosition = true;
      }

      isVisible = true;
      marker.dataset.visible = "true";
      wake();
    };

    const handlePointerLeave = (event: PointerEvent) => {
      if (event.relatedTarget !== null) return;
      isVisible = false;
      hasPosition = false;
      target.x = current.x;
      target.y = current.y;
      trail.length = 0;
      context.clearRect(0, 0, width, height);
      marker.dataset.visible = "false";
    };

    const handleVisibility = () => {
      if (document.hidden) {
        isVisible = false;
        hasPosition = false;
        marker.dataset.visible = "false";
        trail.length = 0;
        context.clearRect(0, 0, width, height);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      marker.dataset.visible = "false";
      context.clearRect(0, 0, width, height);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [hasFinePointer, reducedMotion]);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-tracer" aria-hidden />
      <div ref={markerRef} className="cursor-marker" aria-hidden />
    </>
  );
}
