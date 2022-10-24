import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import navList from '../atom/navList';

const Container = styled.div`
    height: 50px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-decoration: underline crimson;
`;

const Menu = styled.ul`
display: flex;
list-style: none;
@media only screen and (max-width: 480px){
    display: none;
}

`;

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`;

const Button = styled.button`
border: 2px solid white;
padding: 10px 15px;
background-color: crimson;
color: white;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`;

const ErrMessageWrapper = styled


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const focus = location.pathname.split("/")[2];
    const userName = window.localStorage.getItem("userName");
  return (
    <Container>
        <Wrapper>
            <Left>
                <Link to={`/home`}>
                <Logo>Agency</Logo>
                </Link>
                <Menu>
                {navList.map(({ title, path }) => {
              return (
                <Link style={{ textDecoration: "none" }} to={`/page/${path}`}>
                  {focus === path ? (
                    <MenuItem key={path}>{title}</MenuItem>
                  ) : (
                    <MenuItem key={path}>{title}</MenuItem>
                  )}
                </Link>
              );
            })}
                </Menu>
            </Left>
            <Link to={`/login`}>
            <Button>JOIN TODAY</Button>
            </Link>
        </Wrapper>
    </Container>
  )
}

export default Navbar