import React from 'react'
import { FaFacebook, FaGoogle, FaPhone } from 'react-icons/fa';
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar';

const ContainerRegister = styled.div`
    width: 350px;
    height: 500px;
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`;
const RegisterTitle = styled.h2`
    margin-bottom: 40px;
    color: #383838;
`;
const RegisterInput = styled.input`
    margin-bottom: 15px;
    padding: 7px;
`;
const RegisterButton = styled.button`
    padding: 15px;
    background-color: #0071C2;
    border: none;
    color: white;
    font-weight: bold;
    margin-bottom: 20px;
`;
const ContainerOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;
const ContainerP = styled.p`
    text-align: center;
    margin-bottom: 10px;
`;
const RegisterSubTitle = styled.p`
    font-weight: 600;
    margin-bottom: 10px;
`;

const ContainerItem = styled.div`
    height: 100px;
    width: 100px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;   
`;

const RegisterLink = styled.a`
    font-weight: bold;
    color:#0071C2;
    text-align: center;
    margin-bottom: 20px;
`;

const Registersmalltexts = styled.p`
    font-size: 10px;
    text-align: center;
`;

const Register = () => {
  return (
    <div>
        <Navbar />
        <ContainerRegister>
            <RegisterTitle>Sign in or create an account</RegisterTitle>
            <RegisterSubTitle>Email adress</RegisterSubTitle>
            <RegisterInput />
            <RegisterButton>Continue with email</RegisterButton>

            <ContainerP>or user one of these options</ContainerP>
            <ContainerOptions>
                
                <ContainerItem>
                    <FaFacebook size={25} />
                </ContainerItem>
                <ContainerItem>
                    <FaGoogle  size={25}/>
                </ContainerItem>
                <ContainerItem>
                    <FaPhone  size={25} />
                </ContainerItem>
            </ContainerOptions>
            <RegisterLink>More ways to sign in</RegisterLink>
            <Registersmalltexts>By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</Registersmalltexts>
        </ContainerRegister>
    </div>
  )
}

export default Register