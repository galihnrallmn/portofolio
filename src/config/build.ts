import type { UserConfig } from "vite";

export const buildConfig: UserConfig["build"] = {
  target: "esnext",

  sourcemap: false,

  cssCodeSplit: true,

  reportCompressedSize: true,

  chunkSizeWarningLimit: 1000,
};
