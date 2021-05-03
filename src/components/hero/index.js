import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { StaticImage } from 'gatsby-plugin-image';

import { config } from '../../helpers';
import { GitHub, Devto, Medium, Instagram } from '../social-icons';

const HeroWrapper = styled.div`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  ${down('sm')} {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  ${down('sm')} {
    text-align: center;
  }
`;

const HeroText = styled.div`
  display: grid;
  text-align: center;
  font-size: 1rem;
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }
`;

const SocialIconsWrapper = styled.footer`
  text-align: center;
  svg {
    margin: 0 ${({ theme }) => theme.spacing[2]};
    height: ${({ theme }) => theme.spacing[6]};
    &:hover {
      transform: translateY(-2px);
      transition: transform 0.35s;
    }
  }
  a {
    display: inline-block;
  }
`;

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <ImageWrapper>
          <StaticImage
            src="../../images/avatar.jpg"
            alt="An avatar"
            layout="constrained"
            width={280}
            placeholder="blurred"
          />
        </ImageWrapper>
        <HeroText>
          <h2>
            <span role="img" aria-label="wave emoji">
              👋{' '}
            </span>
            Hey, I'm Guilherme <span>also know as </span>
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Account"
            >
              @rigottig
            </a>
          </h2>
          <SocialIconsWrapper>
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Account"
            >
              <GitHub />
            </a>
            <a
              href={config.devto}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev.to Account"
            >
              <Devto />
            </a>
            <a
              href={config.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium Account"
            >
              <Medium />
            </a>
            <a
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Account"
            >
              <Instagram />
            </a>
          </SocialIconsWrapper>
          <p>
            <span role="img" aria-label="laptop emoji">
              💻{' '}
            </span>
            software developer at <a href="http://cwi.com.br/">@cwisoftware</a> & passionate about functional programming
          </p>
        </HeroText>
      </HeroWrapper>
    </>
  );
};

export default Hero;
