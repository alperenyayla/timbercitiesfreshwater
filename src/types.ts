export type Scenario = {
  id: string;
  name: string;
  description: string;
  freshwaterLoss: number;
  waterStress: number;
  plantationExpansion: number;
};

export type VideoItem = {
  id: string;
  title: string;
  caption: string;
  src: string;
  poster?: string;
};

export type AnimationScenario = {
  id: string;
  name: string;
  title: string;
  summary: string;
  videos: VideoItem[];
};
