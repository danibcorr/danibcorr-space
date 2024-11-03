import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const organizationName = "danibcorr";
const projectName = "machine-learning-wiki";


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Machine Learning Wiki",
  url: `https://${organizationName}.github.io`,
  baseUrl: '/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/logo.ico",
  trailingSlash: false,

  organizationName,
  projectName,

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'machine-learning-wiki',
        path: 'docs/machine-learning-wiki',
        routeBasePath: 'docs/machine-learning-wiki',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
        // Esto permite ordenar los documentos por el frontmatter
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sidebarItems;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'otros',
        path: 'docs/otros',
        routeBasePath: 'docs/otros',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
        breadcrumbs: true,
        // Configuración similar para la segunda wiki
        sidebarItemsGenerator: async function ({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return sidebarItems;
        },
      },
    ],
  ],

  themeConfig:{
    colorMode: {
      // Esta opción oculta el botón de cambio de tema
      disableSwitch: true,
      defaultMode: 'light',
    },
    navbar: {
      title: "Inicio",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: "left",
          label: "Machine Learning Wiki",
          docsPluginId: "machine-learning-wiki",
        },
        {
          type: 'doc',
          docId: 'intro',
          position: "left",
          label: "Contenido adicional",
          docsPluginId: "otros",
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: `https://github.com/${organizationName}/${projectName}`,
          label: "Wiki GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `
        <p>
          Copyright © ${new Date().getFullYear()} Daniel Bazo Correa. 
          Construido con Docusaurus con la ayuda de <a href="https://github.com/LayZeeDK/github-pages-docusaurus" target="_blank" rel="noopener noreferrer">LayZeeDK</a>.
        </p>
      `,
    },
    prism: {
      theme: darkCodeTheme,
      additionalLanguages: ['bash', 'makefile'],
    },
  },
};

module.exports = config;