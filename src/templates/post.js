import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import { Layout, Seo, LinkButton } from '../components';
import { config, slugify } from '../helpers';
import { link } from '../styles/partials';

const PostWrapper = styled.article`
  overflow: auto;
`;

const PostTitleWrapper = styled.div`
  h1 {
    margin: 0rem;
    font-size: 2.5rem;
    line-height: 1.1;
    @media (max-width: 750px) {
      font-size: 1.75rem;
      line-height: 1.3;
    }
  }
  a {
    color: ${({ theme }) => theme.colors.black};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const PostMetaWrapper = styled.div`
  margin-top: 0.5rem;
  p {
    margin: 0rem;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const PostBodyWrapper = styled.section`
  margin: 2.25rem 0rem;
  ${link}
`;

const PostFooterWrapper = styled.section`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-top: 0.75rem;
`;

const PostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const { title, date, tags } = post.frontmatter;

  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} by ${config.siteTitle}`} />
      <Seo postPath={`blog/${post.fields.slug}`} postNode={post} postSeo />
      <PostWrapper>
        {/* Post Header */}
        <section>
          {/* Post Title */}
          <PostTitleWrapper>
            <h1>{title}</h1>
          </PostTitleWrapper>
          {/* Post Meta */}
          <PostMetaWrapper>
            <blockquote style={{ marginTop: '15px' }}>
              <span role="img" aria-label="left hand pointer emoji">
                🕒
              </span>{' '}
              Published on {date}{' '}
              <span role="img" aria-label="left hand pointer emoji">
                ⚡️
              </span>{' '}
              {post.timeToRead} minutes read
            </blockquote>
            <span role="img" aria-label="tag emoji">
              🔖{' '}
            </span>
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${slugify(tag)}`}>
                #{tag}{' '}
              </Link>
            ))}
          </PostMetaWrapper>
        </section>
        {/* Post Body */}
        <PostBodyWrapper
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
        <div
          style={{
            marginTop: 28,
            marginBottom: 28
          }}
        >
          <hr />
        </div>
        {/* Post Footer */}
        <PostFooterWrapper>
          {previous && (
            <LinkButton to={previous.fields.slug} rel="prev">
              <span role="img" aria-label="left hand pointer emoji">
                👈{' '}
              </span>
              Previous post
            </LinkButton>
          )}
          {next && (
            <LinkButton to={next.fields.slug} rel="prev">
              Next post{' '}
              <span role="img" aria-label="right hand pointer emoji">
                👉
              </span>
            </LinkButton>
          )}
        </PostFooterWrapper>
      </PostWrapper>
    </Layout>
  );
};

export const postTemplateQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      timeToRead
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;

export default PostTemplate;
