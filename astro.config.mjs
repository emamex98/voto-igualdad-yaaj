import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://voto-por-la-igualdad.netlify.app/quienes-somos/",
  integrations: [tailwind(), mdx(), sitemap()],
  output: "server",
  adapter: vercel()
});