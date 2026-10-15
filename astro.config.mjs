// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// ReeyAI müşteri site şablonu: statik çıktı, build CI'da koşar.
// Deploy adımanı ReeyAI yönetir (REST API) — burada deploy yok.
export default defineConfig({
	integrations: [mdx()],
	vite: {
		plugins: [tailwindcss()],
	},
});
