import { useEffect, useState } from "react";

const HERO_VIDEOS = [
  "/video/hero-background.mp4",
  "/video/hero-ai-option-1.mp4",
  "/video/hero-ai-option-2.mp4",
  "/video/hero-ai-option-3.mp4",
  "/video/hero-ai-option-4.mp4",
  "/video/hero-ai-weekly-1.mp4",
  "/video/hero-ai-weekly-2.mp4",
  "/video/hero-ai-weekly-3.mp4",
  "/video/hero-ai-weekly-4.mp4",
];

export function useRandomHeroVideo() {
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEOS[0]);

  useEffect(() => {
    // Pick a random index on mount
    const randomIndex = Math.floor(Math.random() * HERO_VIDEOS.length);
    setVideoSrc(HERO_VIDEOS[randomIndex]);
  }, []);

  return videoSrc;
}
