"use client";

import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const marker = markerRef.current;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas || !marker || !finePointer.matches || reducedMotion.matches) {
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

    const render = () => {
      frame = null;
      context.clearRect(0, 0, width, height);

      const previousX = current.x;
      const previousY = current.y;
      current.x += (target.x - current.x) * FOLLOW_SPEED;
      current.y += (target.y - current.y) * FOLLOW_SPEED;

      const speed = Math.hypot(current.x - previousX, current.y - previousY);
      const distanceToTarget = Math.hypot(target.x - current.x, target.y - current.y);

      if (isVisible && speed > 0.35) {
        trail.push({
          x: current.x,
          y: current.y,
          life: 1,
          energy: Math.min(1, speed / 9),
        });
        if (trail.length > TRAIL_LENGTH) trail.shift();
      }

      marker.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;

      context.lineWidth = 1.4;
      context.lineCap = "square";
      context.strokeStyle = accent;

      for (let index = 1; index < trail.length; index += 1) {
        const start = trail[index - 1];
        const end = trail[index];
        context.globalAlpha = end.life * end.energy * 0.72;
        context.beginPath();
        context.moveTo(start.x, start.y);
        context.lineTo(end.x, end.y);
        context.stroke();
      }
      context.globalAlpha = 1;

      for (let index = trail.length - 1; index >= 0; index -= 1) {
        trail[index].life -= TRAIL_FADE;
        if (trail[index].life <= 0) trail.splice(index, 1);
      }

      if (distanceToTarget > 0.2 || trail.length > 0) wake();
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
      marker.dataset.visible = "false";
      wake();
    };

    const handleVisibility = () => {
      if (document.hidden) {
        isVisible = false;
        marker.dataset.visible = "false";
        trail.length = 0;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="cursor-tracer" aria-hidden />
      <div ref={markerRef} className="cursor-marker" aria-hidden />
    </>
  );
}
