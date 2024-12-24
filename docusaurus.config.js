import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "danibcorr";
const projectName = "web";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web",
  url: `https://${organizationName}.github.io`,
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.ico",
  trailingSlash: true,

  organizationName,
  projectName,

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    localeConfigs: {
      es: {
        label: "Español",
        direction: "ltr",
      },
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false,
        blog: {
          path: "blog",
          routeBasePath: "blog",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
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

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "machine-learning-wiki",
        path: "docs/machine-learning-wiki",
        routeBasePath: "docs/machine-learning-wiki",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "otros",
        path: "docs/otros",
        routeBasePath: "docs/otros",
        sidebarPath: require.resolve("./sidebars.js"),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "description",
        content: "Documentation and Blog on Web and Machine Learning.",
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      disableSwitch: false,
      defaultMode: "light",
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Inicio",
      logo: {
        alt: "Logo",
        src: "img/logo motivo.svg",
        srcDark: "img/logo motivo dark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Wiki de Machine Learning",
          docsPluginId: "machine-learning-wiki",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Recursos Adicionales",
          docsPluginId: "otros",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Daniel Bazo Correa. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["bash", "makefile"],
    },
  },
};

module.exports = config;
