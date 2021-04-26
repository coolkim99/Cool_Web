import React from 'react';
import styled, { css } from 'styled-components';

const SubInfoBlock = styled.div`
  ${props =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
  color: ${palette.gray[6]};
  /* span 사이에 가운뎃점 문자 보여주기*/
  span + span:before {
    color: ${palette.gray[4]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7'; /* 가운뎃점 문자 */
  }
`;

const SubInfo = ({ guestname, text, date, hasMarginTop }) => {
  return (
    <SubInfoBlock hasMarginTop={hasMarginTop}>
      <span>
        <b>
          {guestname}
          <b style={{textDecoration: 'none'}}> {guestname}</b>
        </b>
        <b>
          {text}
          <b style={{ textDecoration: 'none'}}> {text}</b>
        </b>
      </span>
      <span>{new Date(date).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
};

export default SubInfo;