import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { down } from 'styled-breakpoints';

const StyledNav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 1.25rem;
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  ${down('sm')} {
    font-size: 14px;
  }
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1.25rem;
  a {
    display: inline-block;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledNav>
        <NavLink to="/">Home</NavLink>
        <span>|</span>
        <NavLink to="/blog">Blog</NavLink>
        <span>|</span>
        <NavLink to="/about">About</NavLink>
        <span>|</span>
        <NavLink to="/contact">Contact</NavLink>
      </StyledNav>
    </HeaderWrapper>
  );
};

export default Header;
