import * as React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { Layout, Hero, Seo, PostInfo } from '../components';
import { config } from '../helpers';

const CenterEverything = styled.div`
  text-align: center;
`;

const IndexPage = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <Layout>
      <Helmet title={`Home | ${config.username}`} />
      <Seo />
      <Hero />
      <div>
        <h2>
          <span role="img" aria-label="sparkle emoji">
            ✨{' '}
          </span>
          Latest posts
        </h2>
        <CenterEverything>
          {posts.map(post => {
            return <PostInfo post={post} />;
          })}
        </CenterEverything>
      </div>
    </Layout>
  );
};

export const blogPageQuery = graphql`
  {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 3
    ) {
      nodes {
        id
        timeToRead
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          tags
          thumbnail {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 40, height: 40)
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
