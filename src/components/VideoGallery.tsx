import { Maximize2, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { animationScenarios } from "../content/siteContent";
import type { VideoItem } from "../types";

export function VideoGallery() {
  const [activeScenarioId, setActiveScenarioId] = useState(
    animationScenarios[0]?.id ?? "",
  );
  const activeScenario =
    animationScenarios.find((item) => item.id === activeScenarioId) ??
    animationScenarios[0];
  const activeVideos = activeScenario?.videos ?? [];
  const multiMapVideo = activeVideos.find(
    (item) => item.id === "forest-precipitation-volumes",
  );
  const singleMapVideos = activeVideos.filter(
    (item) => item.id !== "forest-precipitation-volumes",
  );

  return (
    <section className="section" id="animations">
      <div className="section-heading">
        <h2>Global analyses</h2>
      </div>

      <div className="scenario-tabs" aria-label="Select animation scenario">
        {animationScenarios.map((scenario) => (
          <button
            key={scenario.id}
            className={scenario.id === activeScenario?.id ? "active" : ""}
            type="button"
            onClick={() => setActiveScenarioId(scenario.id)}
          >
            {scenario.name}
          </button>
        ))}
      </div>

      {activeScenario ? (
        <div className="scenario-summary">
          <h3>{activeScenario.title}</h3>
          <p>{activeScenario.summary}</p>
        </div>
      ) : null}

      <div className="main-video-layout">
        {singleMapVideos.map((item, index) => (
          <VideoFigure
            key={`${activeScenario?.id}-${item.id}`}
            className={`single-map-video single-map-video-${index + 1}`}
            item={item}
          />
        ))}

        {multiMapVideo ? (
          <VideoFigure
            key={`${activeScenario?.id}-${multiMapVideo.id}`}
            className="multi-map-video"
            item={multiMapVideo}
          />
        ) : null}
      </div>

      {activeVideos.length === 0 ? (
        <p className="empty-video-note">Scenario videos will appear here.</p>
      ) : null}
    </section>
  );
}

function VideoFigure({
  className = "",
  item,
}: {
  className?: string;
  item: VideoItem;
}) {
  const figureRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const progress = duration > 0 ? (currentTime / duration) * 1000 : 0;

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const seekTo = (value: number) => {
    const video = videoRef.current;

    if (!video || duration === 0) {
      return;
    }

    const nextTime = (value / 1000) * duration;
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (figureRef.current?.requestFullscreen) {
      await figureRef.current.requestFullscreen();
    }
  };

  return (
    <figure ref={figureRef} className={`video-figure ${className}`.trim()}>
      <h3 className="video-title">{item.title}</h3>
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        poster={item.poster}
        onClick={togglePlayback}
        onDurationChange={(event) => setDuration(event.currentTarget.duration || 0)}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      >
        <source src={item.src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <div className="video-controls" aria-label={`${item.title} controls`}>
        <button
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="video-icon-button"
          type="button"
          onClick={togglePlayback}
        >
          {isPlaying ? <Pause size={17} /> : <Play size={17} />}
        </button>
        <input
          aria-label="Video progress"
          className="video-progress"
          max="1000"
          min="0"
          step="1"
          type="range"
          value={progress}
          onChange={(event) => seekTo(Number(event.target.value))}
        />
        <span className="video-time">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
        <button
          aria-label="Toggle fullscreen"
          className="video-icon-button"
          type="button"
          onClick={toggleFullscreen}
        >
          <Maximize2 size={17} />
        </button>
      </div>
    </figure>
  );
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}
