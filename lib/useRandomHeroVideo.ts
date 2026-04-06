import { useEffect, useState, useCallback } from "react";

const HERO_VIDEOS = [
  "/video/hero-background.mp4",
  "/video/hero-ai-weekly-1.mp4",
  "/video/hero-ai-weekly-2.mp4",
  "/video/hero-ai-weekly-3.mp4",
  "/video/hero-ai-weekly-4.mp4",
];

export function useRandomHeroVideo() {
  const [videoSrc, setVideoSrc] = useState(HERO_VIDEOS[0]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Pick a random index on mount
    const randomIndex = Math.floor(Math.random() * HERO_VIDEOS.length);
    setVideoSrc(HERO_VIDEOS[randomIndex]);
  }, []);

  const handleVideoError = useCallback(() => {
    setHasError(true);
  }, []);

  return { videoSrc, hasError, handleVideoError };
}
