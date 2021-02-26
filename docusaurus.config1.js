/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Bryan Guner Web Dev Docs",
  tagline: "I break things",
  url: "https://goofy-euclid-1cd736.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
    favicon: 'img/favicon.ico',
  organizationName: "Web-Dev-Hub", 
  projectName: "Web-Dev-Hub", 
  themeConfig: {
    navbar: {
      title: "Docs",
      logo: {
        alt: "My Site Logo",
        src: "https://github.com/bgoonz/web-dev-resource-hub/blob/master/core-site/images/logo-transparent.png?raw=true"
      },
      items: [ {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left"
        },
        {
          to: "blog",
          label: "Blog",
          position: "left"
        },
        {
          href: "https://github.com/bgoonz",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [ {
          title: "Docs",
          items: [ {
              label: "Style Guide",
              to: "docs/"
            },
            {
              label: "Second Doc",
              to: "docs/doc2/"
            }
          ]
        },
        {
          title: "Community",
          items: [ {
              label: "Slack",
              href: "Let’s work together in Slack! It’s a faster, simpler way to talk shop, share files, and get work done. Join here: https://join.slack.com/t/webdevelopers-ex05028/shared_invite/zt-mjtjchw7-4M0VO2OyzGHe20n4MBaNnw"
            },
            {
              label: "Discord",
              href: "https://discord.gg/hrVJqAs"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/bgooonz"
            }
          ]
        },
        {
          title: "More",
          items: [ {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://goofy-euclid-1cd736.netlify.app/"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()}Bryan Guner 😊`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve( "./sidebars.js" ),

          editUrl: "https://github.com/bgoonz/Documentation-site-react.git"
        },
        blog: {
          showReadingTime: true,

          editUrl: "https://goofy-euclid-1cd736.netlify.app/"
        },
        theme: {
          customCss: require.resolve( "./src/css/custom.css" )
        }
      }
    ]
  ]
};
