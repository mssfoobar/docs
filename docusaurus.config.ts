import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
	title: "AGIL® OPS HUB",
	tagline: "Command & Control For Your Domain",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://mssfoobar.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docs",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "mssfoobar", // Usually your GitHub org/user name.
	projectName: "docs", // Usually your repo name.
	deploymentBranch: "gh-pages",

	onBrokenLinks: "throw",
	onBrokenAnchors: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					sidebarPath: "./sidebars.ts",
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/mssfoobar/docs/tree/main",
				},
				blog: {
					showReadingTime: true,
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/mssfoobar/docs/tree/main/blog",
					blogTitle: "AGIL Ops Hub Releases",
					routeBasePath: "releases",
					postsPerPage: 5,
					onInlineTags: "warn",
					onInlineAuthors: "warn",
					onUntruncatedBlogPosts: "warn",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		// Replace with your project's social card
		image: "img/docusaurus-social-card.jpg",
		docs: {
			sidebar: {
				autoCollapseCategories: false,
			},
		},
		navbar: {
			title: "AGIL® Ops Hub",
			hideOnScroll: true,
			logo: {
				alt: "AGIL Ops Hub Logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "overviewSidebar",
					position: "left",
					label: "Overview",
				},
				{
					type: "docSidebar",
					sidebarId: "modulesSidebar",
					position: "left",
					label: "Modules",
				},
				{
					type: "docSidebar",
					sidebarId: "contributingSidebar",
					position: "left",
					label: "Contributing",
				},
				{
					to: "releases",
					label: "Releases",
					position: "left",
				},
				{
					href: "https://github.com/mssfoobar/",
					label: "Source",
					position: "right",
				},
			],
		},
		footer: {
			logo: {
				alt: "AGIL Ops Hub Logo",
				src: "img/logo-with-text.png",
				width: 150,
				height: 58,
			},
			style: "light",
			copyright: `© ${new Date().getFullYear()} | Singapore Technologies Engineering Ltd.`,
		},
		colorMode: {
			defaultMode: "light",
			disableSwitch: true,
			respectPrefersColorScheme: false,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
	plugins: [
		"docusaurus-lunr-search",
		[
			"@docusaurus/plugin-ideal-image",
			{
				quality: 70,
				max: 1024,
				steps: 2,
				disableInDev: false,
			},
		],
	],
	markdown: {
		mermaid: true,
	},
	themes: ["@docusaurus/theme-mermaid"],
};

export default config;
