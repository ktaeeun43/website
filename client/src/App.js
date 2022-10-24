import React from 'react'
import styled, { css } from 'styled-components'
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Router,
  Routes,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';


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

const App = () => {


  const smallScreen = window.screen.width <=  480 ? true : false;

  return (
    <>
    <RecoilRoot>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>

    </RecoilRoot>
    </>
  )
}

export default App


