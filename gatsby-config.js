module.exports = {
  siteMetadata: {
    title: `Guilherme Rigotti`,
    author: `Guilherme Rigotti`,
    description: `Software engineer.`,
    siteUrl: `https://rigotti.dev`,
    pathPrefix: `/`,
    keywords: ['gatsby', 'react', 'rigotti', 'blog'],
    email: `ggrigotti@gmail.com`,
    siteLanguage: `en-US`,
    siteLocale: `en_us`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [
            `Righteous:400`,
            `Montserrat:400,500,600,700,800,900`,
            `Open Sans:400,500,600,700,800,900`
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              maintainCase: false,
              removeAccents: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/
                    }
                  }
                }
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false
              },
              escapeEntities: {}
            }
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Guilherme Rigotti',
        short_name: '@rigottig',
        description: 'Software engineer and technical writer.',
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c792ea`,
        display: `minimal-ui`,
        icon: `src/images/reactfavi.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`
  ]
};
