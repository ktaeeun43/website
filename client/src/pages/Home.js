import React from 'react'
import styled, { css } from 'styled-components'
import Price from '../components/Price';
import Feature from "../components/Feature"
import Intro from "../components/Intro"
import Service from "../components/Service"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Login from './Login';


const Container = styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`;


const Shape = css`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;
`;

const IntroShape = styled.div`
${Shape}
clip-path: polygon(67% 0, 100% 0, 100% 100%, 45% 100%);
background-color: crimson;
`;

const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0% 0, 45% 0, 33% 100%, 0% 100%);
background-color: pink;
`;

const ServiceShape = styled.div`
${Shape}
clip-path: polygon(0% 0, 33% 0, 33% 100%, 0% 100%);
background-color: #f88497;
`;

const PriceShape = styled.div`
${Shape}
clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
background-color: crimson;
`;

const Home = () => {

    const smallScreen = window.screen.width <=  480 ? true : false;

    return (
<>
    <Container>
      <Intro/>
      <IntroShape />
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service/>
      {!smallScreen && <ServiceShape/>}
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
      <Footer/>
    </Container>
</>
    )
}

export default Home