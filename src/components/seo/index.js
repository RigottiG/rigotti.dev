import * as React from 'react';
import { Helmet } from 'react-helmet';

import siteOG from '../../images/og.jpg';
import { config } from '../../helpers';

export const Seo = ({ postNode, postPath, postSeo, customDescription }) => {
  let title;
  let description;
  let image = siteOG;
  let postURL;

  if (postSeo) {
    const postMeta = postNode.frontmatter;
    title = postMeta.title;
    description = postNode.excerpt;

    if (postMeta.thumbnail) {
      image = postMeta.thumbnail.childImageSharp.fixed.src;
    }

    postURL = `${config.siteUrl}${postPath}`;
  } else {
    title = config.siteTitle;
    description = customDescription || config.description;
  }

  image = `${config.siteUrl}${image}`;

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: title,
      alternateName: title
    }
  ];

  if (postSeo) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: config.siteUrl,
        name: title,
        alternateName: title,
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image
        },
        description
      }
    );
  }

  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta content="#c792ea" name="theme-color" />
      <meta content="#c792ea" name="msapplication-TileColor" />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta
        name="robots"
        content="index,follow,max-video-preview:-1,max-snippet:-1,max-image-preview:large, max-video-preview:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />

      <meta property="og:url" content={postSeo ? postURL : config.siteUrl} />
      {postSeo && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};