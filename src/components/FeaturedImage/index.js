import React from 'react';
import Img from 'gatsby-image';

import Wrapper from './Wrapper';

function FeaturedImage({ sizes }) {
  return (
    <Wrapper>
      <Img style={{ maxHeight: 400, }} imgStyle={{ objectFit: 'contain' }}  sizes={sizes} alt="" />
    </Wrapper>
  );
}

export default FeaturedImage;
