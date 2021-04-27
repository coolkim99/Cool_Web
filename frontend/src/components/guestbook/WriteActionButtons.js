import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import palette from '../../lib/style/palette';
import Responsive from '../common/Responsive';

const WriteActionButtonsBlock = styled(Responsive)`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

/* TagBox에서 사용하는 버튼과 일치하는 높이로 설정 후 서로 간의 여백 지정 */
const StyledButton = styled(Button)`
  height: 2.125rem;
  float : right;
`;

const WriteActionButtons = ({ onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>
        방명록 등록
      </StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;