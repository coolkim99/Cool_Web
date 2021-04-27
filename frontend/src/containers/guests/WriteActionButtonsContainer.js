import React, { useEffect, useState } from 'react';
import WriteActionButtons from '../../components/guestbook/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writeGuest } from '../../modules/guest';

const WriteActionButtonsContainer = ({ history }) => {
    const [GuestValue, setGuestValue] = useState("");
  const dispatch = useDispatch();
  const { guestname, text, password, guest, guestError } = useSelector(({ guest }) => ({
    guestname: guest.guestname,
    text: guest.text,
    password: guest.password,
    guest: guest.guest,
    guestError: guest.guestError,
  }));

  // 포스트 등록
  const onPublish = (e) => {
      e.preventDefault();
    dispatch(
      writeGuest({
        guestname,
        password,
        text
      }), 
    );
    setGuestValue('');
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (guestError) {
      console.log(guestError);
    }
  }, [history, guest, guestError]);
  return <WriteActionButtons onPublish={onPublish}/>;
};

export default withRouter(WriteActionButtonsContainer);