import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/style/palette';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  b{
    font-size : 0.9rem;
  }
`;

const SubInfo = ({ guestname, text, date, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          {text}
          <b style={{ textDecoration: 'none'}}> {text}</b>
        </b>
      </span>
      <span><b>{new Date(date).toLocaleDateString()}</b></span>
    </SubInfoBlock>
  );
};

export default SubInfo;