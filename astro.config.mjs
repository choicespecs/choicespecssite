import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    // @astrojs/react renderer
    react(),
    // @astrojs/vue renderer
    vue(),
  ],
  site: "https://www.choicespecs.com",
});
