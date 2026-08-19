import type { AnimationScenario, Scenario, VideoItem } from "../types";

export const article = {
  title: "Timber cities and freshwater resources",
  authors: "Alperen Yayla, César Terrer & Rupert J. Myers",
};

export const scenarios: Scenario[] = [
  {
    id: "main",
    name: "Main scenario",
    description:
      "Central model configuration for the global timber city transition.",
    freshwaterLoss: 0.72,
    waterStress: 0.68,
    plantationExpansion: 0.74,
  },
  {
    id: "land-use",
    name: "Sensitivity scenario 1",
    description:
      "Alternative land-use response for testing plantation expansion assumptions.",
    freshwaterLoss: 0.56,
    waterStress: 0.52,
    plantationExpansion: 0.48,
  },
  {
    id: "demand",
    name: "Sensitivity scenario 2",
    description:
      "Alternative timber demand pathway for testing transition intensity.",
    freshwaterLoss: 0.64,
    waterStress: 0.6,
    plantationExpansion: 0.62,
  },
  {
    id: "stress",
    name: "Sensitivity scenario 3",
    description:
      "Alternative freshwater stress response for testing hydrological sensitivity.",
    freshwaterLoss: 0.81,
    waterStress: 0.78,
    plantationExpansion: 0.7,
  },
];

const createScenarioVideos = (folder: string): VideoItem[] => [
  {
    id: "forest-composition",
    title: "Forest composition",
    caption:
      "Main scenario animation showing forest composition changes from 2020 to 2099.",
    src: `/videos/${folder}/forest_composition_SSP2_90pct_2020_2099_matplotlib.mp4`,
  },
  {
    id: "forest-precipitation-volumes",
    title: "Forest precipitation volumes",
    caption:
      "Main scenario animation showing precipitation-related freshwater volumes over time.",
    src: `/videos/${folder}/forest_precipitation_volumes_SSP2_90pct_2020_2099_matplotlib.mp4`,
  },
  {
    id: "cumulative-freshwater-change",
    title: "Cumulative freshwater change",
    caption:
      "Main scenario animation showing cumulative freshwater change relative to the baseline.",
    src: `/videos/${folder}/difference_cumulative_freshwater_change_SSP2_90pct_minus_SSP2_BAU_2020_2099_matplotlib.mp4`,
  },
];

export const animationScenarios: AnimationScenario[] = [
  {
    id: "main",
    name: "Main scenario",
    title: "Main scenario",
    summary:
      "Future plantation expansion is allocated hierarchically, beginning within the country where demand is assigned. Semi-natural forest areas closest to existing plantations are converted first. If country level area is insufficient, remaining demand is allocated within the corresponding United Nations subregion and then region, always prioritising areas nearest existing plantations.",
    videos: createScenarioVideos("main"),
  },
  {
    id: "homogeneous",
    name: "Homogeneous allocation",
    title: "Homogeneous allocation within United Nations subregions",
    summary:
      "Future plantation expansion is distributed homogeneously across eligible semi-natural forest areas within each United Nations subregion. Unlike the main scenario, distance from existing plantations does not affect allocation. If subregional area is insufficient, remaining demand is distributed across the corresponding United Nations region, producing a more spatially dispersed pattern of plantation expansion.",
    videos: createScenarioVideos("homogenous"),
  },
  {
    id: "regional-seeded",
    name: "Regional seeded clusters",
    title: "Seeded cluster expansion within United Nations regions",
    summary:
      "Country level plantation demand is aggregated within each United Nations region. Spatially separated seed locations are selected from existing plantations near semi-natural forests, with the number of seeds scaled to available semi-natural forest area. Regional plantation demand is then allocated around these seeds, producing clustered plantation expansion within each United Nations region.",
    videos: createScenarioVideos("regional-seeded"),
  },
  {
    id: "global-seeded",
    name: "Global seeded clusters",
    title: "Global seeded cluster expansion",
    summary:
      "Country level plantation demand is aggregated globally and allocated without country or regional boundaries. Spatially separated seed locations are selected within United Nations regions from existing plantations near semi-natural forests, with the number of seeds scaled to available semi-natural forest area. Global plantation demand is then allocated around these seeds, producing clustered expansion worldwide.",
    videos: createScenarioVideos("global-seeded"),
  },
];
