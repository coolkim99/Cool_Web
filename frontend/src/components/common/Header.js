import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from './Responsive';

import "./font.css";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  z-index : 100;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrap = styled(Responsive)`

`

const Wrapper = styled.div`
    height: 4rem;
    .logo {
        font-family: 'GmarketSansMedium';
        font-size: 1.2rem;
        font-weight : 900;
        letter-spacing: 2px;
        @media (max-width : 349px) {
            font-size : 0.8rem;
        }
    }
    @media (max-width : 349px) {
        height: 3rem;
    }
    display :inline-block;
    float : left;
    line-height : 40px;
`;

const Navbar = styled.div`
    font-family: 'GmarketSansMedium';
    display: flex;
    align-items: center;
    justify-content: space-between; /* 자식 엘리먼트 사이에 여백을 최대로 설정 */
    width : 350px;
    float : right;
    line-height : 75px;
    @media (max-width :  768px) {
        width : 300px;
    }
    @media (max-width :  349px) {
        width : 200px;
    }
`


const LinkTo = styled(Link)`
    font-size: 0.9rem;
    color: black;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        text-decoration: none;
    }
    @media (max-width : 768px) {
        font-size : 0.8rem;
    }
    @media (max-width : 349px) {
        font-size : 0.6rem;
    }
`;

const LinkToLogo = styled(Link)`
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
    text-decoration: none;
    font-weight : 900;
    letter-spacing: 2px;
    &:hover{
        text-decoration: none;
    }
    @media (max-width : 768px) {
        font-size : 1rem;
    }
    @media (max-width : 349px) {
        font-size : 0.8rem;
    }
    line-height : 75px;
`;

 const Spacer = styled.div`
 height: 4rem;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrap>
            <Wrapper>
                <LinkToLogo to = '/'>COOL PAGE</LinkToLogo>
            </Wrapper>
            <Navbar>
                <LinkTo to ="/about" >About</LinkTo>
                <LinkTo to ="/portfolio" >Portfolio</LinkTo>
                <LinkTo to ="/blog" >Blog</LinkTo>
                <LinkTo to ="/guestbook" >Guest Book</LinkTo>
            </Navbar>
            </Wrap>
        </HeaderBlock>
    </>
  );
};

export default Header;