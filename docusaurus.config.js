/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AgilRAD 2.0',
    tagline: 'Rapid Application Development for Agile Teams',
    url: 'https://mssfoobar.github.io',
    baseUrl: '/ar2-docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'mssfoobar', // Usually your GitHub org/user name.
    projectName: 'ar2-docs', // Usually your repo name.
    deploymentBranch: 'gh-pages',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/mssfoobar/ar2-docs/tree/main',
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    docLayoutComponent: "@theme/DocPage",
                    docItemComponent: "@theme/ApiItem",
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
    }, ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'AR2',
            logo: {
                alt: 'AR2 Logo',
                src: 'img/logo.svg',
                srcDark: 'img/logo_dark.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'overview',
                    position: 'left',
                    label: "Overview"
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'web',
                    position: 'left',
                    label: 'Web',
                }, {
                    type: 'docSidebar',
                    sidebarId: 'comms',
                    position: 'left',
                    label: 'Comms',
                }, {
                    type: 'docsVersionDropdown',
                    position: 'right',
                }, {
                    href: 'https://github.com/mssfoobar',
                    label: 'GitHub',
                    position: 'right',
                }, {
                    type: 'search',
                    position: 'right',
                }
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Docs',
                items: [{
                    label: 'GitHub Organisation',
                    href: 'https://github.com/mssfoobar',
                }, {
                    label: 'ST Engineering',
                    href: 'https://www.stengg.com/',
                }, ],
            }, ],
            copyright: `Copyright © ${new Date().getFullYear()} | ST Engineering`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),

    plugins: [
        require.resolve("@cmfcmf/docusaurus-search-local"), [
            'docusaurus-plugin-openapi-docs',
            {
                id: "apiDocs",
                docsPluginId: "classic",
                config: {
                    roomMgmt: {
                        specPath: "openapi/roomMgmt/openapi.yaml", // Path to designated spec file
                        outputDir: "docs/comms/Room Management API", // Output directory for generated .mdx docs
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                    }
                }
            },
        ],
        "@docusaurus/plugin-ideal-image"
    ],
    themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;