import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Link } from 'react-router-dom';
import SubInfo from '../common/SubInfo';


const Item = ({ guest }) => {
    const [usrlevel, setLevel] = useState('');
    const { guestname, text, date, _id } = post;
  
  
    return (
      <PostItemBlock>
        <h2>
          <Link to={`/@${user.username}/${_id}`} style={{color: 'black', textDecoration: 'none'}}>{title}</Link>
        </h2>
        {<SubInfo 
          username ={user.username} 
          userlevel={usrlevel}
          publishedDate={new Date(publishedDate)}/>}
        <p>{body}</p>
      </PostItemBlock>
    );
  };
  
  const PostList = ({ posts, loading, error, showWriteButton }) => {
    const [check, setCheck] = useState(false);
    useEffect(() => {
      if(posts && posts.length == 0){
        setCheck(true);   //게시글 존재 여부 판단
      } else {
        setCheck(false);
      }
    }, [posts])
  
    if (error) {
      return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
    }
    
    return (
      <PostListBlock>
        <WritePostButtonWrapper>
        {showWriteButton && (
            <Button to="/write" style={{textDecoration: 'none', color: 'white'}}>
              새 글 작성하기
            </Button>
          )}
        </WritePostButtonWrapper>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
        {check && 
          <div style={{fontSize: '1.5rem', fontWeight: 'bold', padding:'4% 0'}}>
            게시글이 없습니다.</div>}
  
        {!loading && posts && (
          <div>
           {posts.map(post => (
            <PostItem post={post} key={post._id} />
          ))}
          </div>
        )}
  
      </PostListBlock>
    );
  };
  
  export default PostList;
  