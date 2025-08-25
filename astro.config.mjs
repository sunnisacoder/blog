import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from 'astro/config';

// 從您的倉庫名稱獲取 base URL
const REPO_NAME = 'blog'; // 請替換成您的倉庫名稱

// https://astro.build/config
export default defineConfig({
  base: `/${REPO_NAME}`,
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
		resolve: {
			alias: {
				'@assets': '/src/assets'
			}
		}
	},
	site: "https://sunnisacoder.github.io",
	i18n: {
		defaultLocale: "en",
		locales: ["en", "it"],
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: "css-variables",
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		mdx(),
		icon(),
	],
});
