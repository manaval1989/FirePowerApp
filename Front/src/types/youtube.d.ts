interface YouTubePlayer {
  playVideo(): void;
  pauseVideo(): void;
}

interface YouTubeConfig {
  videoId: string;
  playerVars?: {
    autoplay?: number;
    controls?: number;
    mute?: number;
    rel?: number;
    modestbranding?: number;
  };
}

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, config: YouTubeConfig) => YouTubePlayer;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}
