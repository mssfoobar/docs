/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "AGIL Ops Hub",
    tagline: "Rapid Application Development for Agile Teams",
    url: "https://mssfoobar.github.io",
    baseUrl: "/docs",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    markdown: {
        mermaid: true,
    },

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "mssfoobar", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.
    deploymentBranch: "gh-pages",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },
    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/mssfoobar/docs/tree/main",
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                    docItemComponent: "@theme/ApiItem",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                blog: {
                    path: "blog",
                    editUrl: "https://github.com/mssfoobar/docs/tree/main/blog",
                    blogTitle: "AGIL Ops Hub Releases",
                    routeBasePath: "releases",
                    postsPerPage: 5,
                    showReadingTime: true,
                },
            }),
        ],
    ],
    stylesheets: [
        {
            href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
            type: "text/css",
            integrity:
                "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
            crossorigin: "anonymous",
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "AGIL Ops Hub",
                items: [
                    {
                        to: "releases",
                        label: "Releases",
                        position: "left",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "overview",
                        position: "left",
                        label: "Overview",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "development",
                        position: "left",
                        label: "Development",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "deployment",
                        position: "left",
                        label: "Deployment",
                    },
                    {
                        type: "dropdown",
                        position: "left",
                        label: "Modules",
                        items: [
                            {
                                type: "docSidebar",
                                sidebarId: "base",
                                label: "WEB-BASE",
                            },                            {
                                type: "docSidebar",
                                sidebarId: "iam",
                                label: "IAM",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "web",
                                label: "Web",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "ucs",
                                label: "UCS",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "gis",
                                label: "GIS",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "rnr",
                                label: "RNR",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "wfe",
                                label: "WFE",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "ims",
                                label: "IMS",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "unh",
                                label: "UNH",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "dash",
                                label: "DASH",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "tag",
                                label: "TAG",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "iams",
                                label: "IAMS",
                            },
                            {
                                type: "docSidebar",
                                sidebarId: "ian",
                                label: "IAN",
                            },
                        ],
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "documentation",
                        position: "left",
                        label: "Documentation",
                    },
                    {
                        type: "docsVersionDropdown",
                        position: "right",
                    },
                    {
                        href: "https://github.com/mssfoobar",
                        label: "GitHub",
                        position: "right",
                    },
                    {
                        type: "search",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "GitHub Organisation",
                                href: "https://github.com/mssfoobar",
                            },
                            {
                                label: "ST Engineering",
                                href: "https://www.stengg.com/",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} | ST Engineering`,
            },
            colorMode: {
                defaultMode: "dark",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
        }),

    plugins: [
        require.resolve("docusaurus-lunr-search"),
        [
            "docusaurus-plugin-openapi-docs",
            {
                id: "apiDocs",
                docsPluginId: "classic",
                config: {
                    ucs: {
                        specPath: "openapi/ucs/roomMgmt-v1.yaml",
                        outputDir:
                            "docs/40_modules/30_ucs/Universal Comms API/v1",
                        version: "1",
                        label: "v1",
                        baseUrl: "/docs/docs/modules/ucs/api/v1",
                        versions: {
                            2: {
                                specPath: "openapi/ucs/roomMgmt-v2.yaml",
                                outputDir:
                                    "docs/40_modules/30_ucs/Universal Comms API/v2",
                                label: "v2",
                                baseUrl: "/docs/docs/modules/ucs/api/v2",
                            },
                        },
                        sidebarOptions: {
                            groupPathsBy: "tag",
                            categoryLinkSource: "tag",
                        },
                        hideSendButton: true,
                    },
                    recordReplay: {
                        specPath: "openapi/recordReplay/recordReplay-v1.yaml",
                        outputDir: "docs/40_modules/50_rnr/Record & Replay API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    workflow: {
                        specPath: "openapi/workflow/workflow-v1.yaml",
                        outputDir: "docs/40_modules/60_wfe/Workflow API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    incidentMgmtSys: {
                        specPath: "openapi/incidentMgmtSys/ims-v1.yaml",
                        outputDir:
                            "docs/40_modules/70_ims/Incident Management System API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    unh: {
                        specPath: "openapi/unh/unh-v1.yaml",
                        outputDir:
                            "docs/40_modules/80_unh/Universal Notification Hub API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    tag: {
                        specPath: "openapi/tag/tag-v1.0.0.yml",
                        outputDir: "docs/40_modules/90_tag/Tag API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    dash: {
                        specPath: "openapi/dash/dash-v1.0.0.yml",
                        outputDir: "docs/40_modules/91_dash/Dash API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    documentation: {
                        specPath: "openapi/documentation/mnm-v1.yaml",
                        outputDir: "docs/99_documentation/Example API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    iams: {
                        specPath: "openapi/iams/iams_v1.0.yaml",
                        outputDir: "docs/40_modules/92_iams/IAMS API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    },
                    ian: {
                        specPath: "openapi/ian/ian_v1.0.yaml",
                        outputDir: "docs/40_modules/93_ian/IAN API",
                        sidebarOptions: {
                            groupPathsBy: "tag",
                        },
                        hideSendButton: true,
                    }
                },
            },
        ],
        "@docusaurus/plugin-ideal-image",
    ],
    themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],
};

module.exports = config;
