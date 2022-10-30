import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
      // may be useful if your hosting provider allows caching between CI builds
      cacheDir: "./.cache/image"
    }),
    astroImageTools,
  ],
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/learning-svelte-site",
});
