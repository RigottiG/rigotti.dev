import React, { useState } from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Layout, Seo, PostInfo } from '../components';
import { config, slugify } from '../helpers';

const Wrapper = styled.div`
  text-align: center;
  input {
    width: 75%;
    margin-block-end: 2.25rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 0.3rem;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    transition: all 300ms;
    ::placeholder {
      color: ${({ theme }) => theme.colors.darkGrey};
    }
    :focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .posts-number {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AllTagsWrapper = styled.div`
  margin-bottom: 2rem;
`;

const BlogPage = ({ data }) => {
  const allPosts = data.posts.nodes;
  const emptyQuery = '';
  const allTags = data.posts.group;

  const [state, stateSet] = useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleInputChange = e => {
    const query = e.target.value;
    const posts = data.posts.nodes || [];

    const filteredData = posts.filter(post => {
      const { title, tags } = post.frontmatter;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join('').toLowerCase().includes(query.toLowerCase()))
      );
    });

    stateSet({ query, filteredData });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.username}`} />
      <Seo customDescription="A collection of articles, tutorials, and writings." />
      <Wrapper>
        <h1>
          {' '}
          <span role="img" aria-label="plant emoji">
            ????{' '}
          </span>
          Blog - Posts count:{' '}
          <span className="posts-number">{Object.keys(posts).length}</span>
        </h1>
        <input
          type="text"
          aria-label="Search"
          placeholder="Search a post..."
          onChange={handleInputChange}
        />
        <AllTagsWrapper>
          {allTags.map(tag => {
            return (
              <Link
                key={tag.fieldValue}
                to={`/tags/${slugify(tag.fieldValue)}`}
                style={{ fontSize: '18px' }}
              >
                #{tag.fieldValue} - {tag.totalCount} &nbsp;&nbsp;&nbsp;
              </Link>
            );
          })}
        </AllTagsWrapper>
        {posts.map(post => {
          return <PostInfo post={post} />;
        })}
      </Wrapper>
    </Layout>
  );
};

export const blogPageQuery = graphql`
  {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { fields: frontmatter___date, order: DESC }
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default BlogPage;
