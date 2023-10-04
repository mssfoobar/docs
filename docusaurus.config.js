/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'AGIL Ops Hub',
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
    },],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'AOH',
                logo: {
                    alt: 'AOH Logo',
                    src: 'img/logo.svg',
                    srcDark: 'img/logo_dark.svg',
                },
                items: [{
                    type: 'docSidebar',
                    sidebarId: 'overview',
                    position: 'left',
                    label: "Overview"
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'source_management',
                    position: 'left',
                    label: 'Source Management',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'web',
                    position: 'left',
                    label: 'Web',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'mapping',
                    position: 'left',
                    label: 'Mapping',
                }, {
                    type: 'docSidebar',
                    sidebarId: 'comms',
                    position: 'left',
                    label: 'Comms',
                }, {
                    type: 'docSidebar',
                    sidebarId: 'iam',
                    position: 'left',
                    label: 'Identity Access Management',
                }, {
                    type: 'docSidebar',
                    sidebarId: 'rnr',
                    position: 'left',
                    label: 'Record & Replay',
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
                    },],
                },],
                copyright: `Copyright © ${new Date().getFullYear()} | ST Engineering`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),

    plugins: [
        require.resolve("docusaurus-lunr-search"),
        [
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
                    },
                    recordReplay: {
                        specPath: "openapi/recordReplay/openapi.yml",
                        outputDir: "docs/rnr/Record & Replay API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                    },
                }
            },
        ],
        "@docusaurus/plugin-ideal-image"
    ],
    themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;