import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`;
const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Logo = styled.span`
    font-weight: 700;
`;
const NavItems = styled.div``;
const NavButton = styled.button`
    margin-left: 20px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    color: #003580;
`;

const Navbar = () => {
  return (
    <Nav>
        <NavContainer>
            <Link style={{color: 'white'}} to={'/'}><Logo>Booking.com</Logo></Link>
            <NavItems>
                <Link to={'/register'}><NavButton>Register</NavButton></Link>
                <Link to={'/register'}><NavButton>Login</NavButton></Link>
            </NavItems>
        </NavContainer>
    </Nav>
  )
}

export default Navbar