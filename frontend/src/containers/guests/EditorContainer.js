import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/guestbook/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/guest';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { guestname, text, password } = useSelector(({ guest }) => ({
    guestname: guest.guestname,
    text: guest.text,
    password: guest.password,
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} guestname={guestname} text={text} password={password} />;
};

export default EditorContainer;