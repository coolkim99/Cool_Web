import React from 'react';
import Pagination from '../../components/guestbook/Pagination';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

const PaginationContainer = ({ location, match }) => {
  const { lastPage, guests, loading } = useSelector(({ guests, loading }) => ({
    lastPage: guests.lastPage,
    guests: guests.guests,
    loading: loading['guests/LIST_GUESTS'],
  }));

  // 포스트 데이터가 없거나 로딩 중이면 아무것도 보여주지 않음
  if (!guests || loading) return null;
  const { guestname } = match.params;
  // page가 없으면 1을 기본값으로 사용
  const {  page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
        guestname={guestname}
        page={parseInt(page, 10)}
        lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);