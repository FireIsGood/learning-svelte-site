import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/learning-svelte-site",
});
