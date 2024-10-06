// @ts-check

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const organizationName = "danibcorr";
const projectName = "machine-learning-wiki";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Machine Learning Wiki",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/logo.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName,
  projectName,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    // Español como idioma predeterminado
    defaultLocale: "es", 
    // Soporte para español e inglés
    locales: ["es", "en"], 
  },  

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Inicio",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Contenido",
          },
          {
            href: `https://danibcorr.github.io/linktree/`,
            label: "Linktree",
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
        style: "dark",
        copyright: `
          <p>
            Copyright © ${new Date().getFullYear()} Machine Learning Wiki, realizado por Daniel Bazo Correa. 
            Construido con Docusaurus con la ayuda de <a href="https://github.com/LayZeeDK/github-pages-docusaurus" target="_blank" rel="noopener noreferrer">LayZeeDK</a>.
          </p>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'makefile'],
      },
    }),
};

module.exports = config;
