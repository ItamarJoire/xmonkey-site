'use client'

import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  overflow: hidden;
  padding: 40px 0;
  white-space: nowrap;
  position: relative;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 161, 34, 0), #FFA122);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 214, 5, 0), #FF7205);
  }
`;

const Slide = styled.div`
  display: flex;
  animation: ${slideAnimation} 35s infinite linear; 
`;

const Item = styled.div`
  height: 20px;
  margin: 0 20px;
`;

export function Range(){;
  return(
      <Container className="logos bg-gradient-to-r from-orange-dark to-orange-semi-light ">
        <Slide className="logos-slide font-['Lufga'] text-white font-extrabold tracking-widest">
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
        <Item>AGENDE UMA REUNIÃO COM A XMONKEY</Item>
    
        </Slide>
      </Container>
  )
}