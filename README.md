# Timber cities and freshwater

Minimal scientific companion website for presenting an interactive forest
transition visualisation and article animation files.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Video assets

Place article animation files in scenario folders inside `public/videos`.

Current scenario folders:

- `main/`
- `homogenous/`
- `regional-seeded/`
- `global-seeded/`

Each scenario folder should contain these three video files:

- `forest_composition_SSP2_90pct_2020_2099_matplotlib.mp4`
- `forest_precipitation_volumes_SSP2_90pct_2020_2099_matplotlib.mp4`
- `difference_cumulative_freshwater_change_SSP2_90pct_minus_SSP2_BAU_2020_2099_matplotlib.mp4`

If filenames or scenario folder names change, update `src/content/siteContent.ts`.
