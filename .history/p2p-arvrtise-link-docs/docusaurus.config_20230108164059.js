// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'P2P ARVRtise Link Docs',
  tagline: 'Create a P2P ARVRtising Campaign without a middleman',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'icetist', // Usually your GitHub org/user name.
  projectName: 'p2p-arvrtist-link-docs', // Usually your repo name.

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://p2p.arvrtise.link',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'P2P ARVRtise Link Docs Logo',
          src: 'https://media.discordapp.net/attachments/885415344154501181/1061595313263099974/P2P_Link_80.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://p2p.arvrtise.link',
            label: 'P2P ARVRtise Link',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Official Website',
                href: 'https://p2p.arvrtise.link',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/SFm7ddSCvn',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/showcase/arvrtise/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ARVRtise',
                href: 'https://arvrtise.com',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} P2P Link ARVRtise, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
