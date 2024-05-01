import styled, { keyframes } from "styled-components";

const risingAnimation = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(.2);
  }
`
const Container = styled.div`
  position: relative;
  width: 800px;
  height: 80vh;
  overflow: hidden;
`
const Div = styled.div`
  position: absolute;
  display: flex;
`
const Span = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  background: #fff;
  opacity: .2;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #ffffff06,
  0 0 50px #fff,
  0 0 100px #fff;

  animation: ${risingAnimation} calc(300s / var(--i)) linear infinite;
`
interface CustomCSSProperties extends React.CSSProperties{
  "--i"?: string;
}

export function Bubbles(){
  const spanValues = ["11", "17", "25", "14", "9", "2", "28", "16", "22", "4", "13", "27", "17", "9", "15", "24", "12", "16", "14", "3", "75", "2", "9", "13", "28", "16", "5", "40", "13", "27", "17", "9", "15", "24", "12", "16"]

  return(
    <Container className="absolute z-[1]">
      <Div>
        {spanValues.map((value, index) => (
          <Span key={index} style={{ '--i': value} as CustomCSSProperties}></Span>
        ))}
      </Div>
    </Container>
  )
}