import React, {useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import Responsive from '../common/Responsive';

const EditorBlock = styled(Responsive)`
    /* 페이지 위 아래 여백 지정 */
    padding-top: 8rem;
    padding-bottom: 0;
`;
const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
`;
const PasswordInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding-top : 1.2rem;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
  float : right;
  padding-left : 0.5rem;
`;
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 50px;
    font-size: 1rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = ({ guestname, text, password, onChangeField }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
          theme: 'bubble',
          placeholder: '내용을 작성하세요...',
          modules: {
            // 더 많은 옵션
            // https://quilljs.com/docs/modules/toolbar/ 참고
            toolbar: [
              ['code-block', 'link', 'image'],
            ],
          }
        });
        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if(source === 'user') {
                onChangeField({key: 'text', value: quill.root.innerHTML});
            }
        });
      }, [onChangeField]);   

    const mounted = useRef(false);
    useEffect(()=> {
        if(mounted.current) return;
        mounted.current = true;
        quillInstance.current.root.innerHTML = guestname;
    }, [guestname]);
    
    const onChangeTitle = e => {
        onChangeField({key: 'guestname', value: e.target.value});
    }

    const pwmounted = useRef(false);
    useEffect(()=> {
        if(pwmounted.current) return;
        pwmounted.current = true;
        quillInstance.current.root.innerHTML = password;
    }, [password]);
    
    const onChangePassword = e => {
        onChangeField({key: 'password', value: e.target.value});
    }

    return (
        <EditorBlock>
            <TitleInput
                placeholder="이름을 입력하세요"
                onChange={onChangeTitle}
                value={guestname}
            />
             <PasswordInput
                placeholder="비밀번호를 입력하세요"
                onChange={onChangePassword}
                value={password}
             />
            <QuillWrapper>
                <div ref={quillElement} />
            </QuillWrapper>
        </EditorBlock>
      );

};

export default Editor;