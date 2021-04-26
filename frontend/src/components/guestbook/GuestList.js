import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';

const GuestListBlock = styled(Responsive)`
  padding-top : 7rem;
`;

const GuestItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const Guest = ({ guest }) => {
    const { date, guestname, text} = guest;
  
    return (
      <GuestItemBlock>
        <h2 style={{color: 'black', textDecoration: 'none'}}>{guestname}</h2>
        {<SubInfo 
          guestname ={guest.guestname} 
          date={new Date(date)}/>}
        <p>{text}</p>
      </GuestItemBlock>
    );
  };
  

const GuestList = ({ guests, loading, error }) => {
    const [check, setCheck] = useState(false);
    useEffect(() => {
      if(guests && guests.length == 0){
        setCheck(true);   //게시글 존재 여부 판단
      } else {
        setCheck(false);
      }
    }, [guests])
  
    if (error) {
      return <GuestListBlock>에러가 발생했습니다.</GuestListBlock>;
    }
    
    return (
      <GuestListBlock>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
        {check && 
          <div style={{fontSize: '1.5rem', fontWeight: 'bold', padding:'4% 0'}}>
            게시글이 없습니다.</div>}
  
        {!loading && guests && (
          <div>
           {guests.map(guest => (
            <Guest guest={guest} key={guest._id} />
          ))}
          </div>
        )}
  
      </GuestListBlock>
    );
  };
  
  export default GuestList;