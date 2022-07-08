import React from 'react'
import styled from 'styled-components'

const Mail = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
`;
const MailTitle = styled.h1``;
const MailDescription = styled.span``;
const MailInputContainer = styled.div``;
const Input = styled.input`
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;

`;
const Button = styled.button`
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const MailList = () => {
  return (
    <Mail>
        <MailTitle>Save time, save money!</MailTitle>
        <MailDescription>Sign up and we'll send the best deals to you</MailDescription>
        <MailInputContainer>
            <Input placeholder='Your Email' />
            <Button>Subscribe</Button>

        </MailInputContainer>
    </Mail>
  )
}

export default MailList