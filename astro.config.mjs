import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  outDir: "./docs",
  site: "https://fireisgood.github.io/",
  base: "/learning-svelte-site",
});
