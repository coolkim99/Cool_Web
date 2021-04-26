import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import GuestList from '../../components/guestbook/GuestList';
import qs from 'qs';
import { list } from '../../modules/guests';

const GuestListContainer = ({ location }) => {
  const dispatch = useDispatch();
  const { guests, error, loading } = useSelector(
    ({ guests, loading }) => ({
        guests: guests.guests,
        error: guests.error,
        loading: loading['guests/LIST_GUESTS']
    }),
  );
  useEffect(() => {
    const { guestname, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(list({ guestname, page }));
  }, [dispatch, location.search]);
  return (
    <>
    <GuestList
      loading={loading}
      error={error}
      guests={guests}
    />
    </>
  );
};

export default withRouter(GuestListContainer);
