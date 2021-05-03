import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { link } from '../../styles/partials';

const ContentWrapper = styled.div`
  ${link}
`;

export const Now = ({ data }) => {
  const { html } = data;
  return (
    <ContentWrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ContentWrapper>
  );
};

Now.propTypes = {
  data: PropTypes.object.isRequired
};

