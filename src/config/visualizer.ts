import { visualizer } from "rollup-plugin-visualizer";

export const bundleVisualizer = visualizer({
  filename: "stats.html",

  gzipSize: true,

  brotliSize: true,

  open: true,
});
