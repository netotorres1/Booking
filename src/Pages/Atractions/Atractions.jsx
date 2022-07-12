import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'

import styled from 'styled-components';

const ContainerSearch = styled.div`
    height: 300px;
    background-color: #003580;
    width: max-width;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    color: white;
`;
const ContainerContent = styled.div`
    width: 1024px;
`;

const ContainerInput = styled.div`
    width: 600px;
    height: 60px;
    background-color: #F9B802;
    border-radius: 3px;
    display: flex;
    justify-content: center;
`;
const SearchButton = styled.button`
    flex: 1;
    background-color: #0071C2;
    color: white;
    font-weight: bold;
    border: none;
    margin: 5px;    
`;
const SearchTitle = styled.h1`
    margin-bottom: 20px;
`;
const SearchP = styled.p`
    margin-bottom: 20px;
    font-weight: bold;
`;
const SearchInput = styled.input`
    flex: 5;
    margin: 5px;
    border: none;
    padding: 15px;
`;

const PageContent = styled.div`
    width: 1024px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
`;
const PCTitle = styled.h2`
    text-align: left;
    margin-bottom: 20px;
`;
const PCcontainer = styled.div`
    display: flex;
    
`;
const PCitem = styled.div`
    height: 200px;
    width: 400px;
    position: relative;
    margin: 10px;
`;
const PCImg = styled.img`
    width: 100%;
    height: 100%;
`;
const PCitemTitle = styled.p`
    position: absolute;
    bottom: 30px;
    left: 15px;
    color: white;
`;
const PCsubtitle = styled.p`
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: white;
`;

const Atractions = () => {
  return (
    <div>
        <Navbar />
        <Header type='list' />
        <ContainerSearch>
            <ContainerContent>
                <SearchTitle>Find and book great travel experiences</SearchTitle>
                <SearchP>Discover tickets to museums, tours, and activities</SearchP>
                <ContainerInput>
                    <SearchInput placeholder='Where you goind?' />
                    <SearchButton>Search</SearchButton>
                </ContainerInput>
                
            </ContainerContent>
        </ContainerSearch>
        <PageContent>
            <PCTitle>Nearby destinations</PCTitle>
            <PCcontainer>
                <PCitem>
                    <PCImg src='https://i0.wp.com/www.visitbrasil.com/wp-content/uploads/2021/08/Sao-Paulo-SP-Visit-Brasil-7-1.jpg?fit=1024%2C683&ssl=1' />
                    <PCitemTitle>São Paulo</PCitemTitle>
                    <PCsubtitle>42 things to do</PCsubtitle>
                </PCitem>
                <PCitem>
                    <PCImg src='https://www.viagensecaminhos.com/wp-content/uploads/2021/02/bondinho-pao-de-acucar-pontos-turisticos-rio-de-janeiro.jpg' />
                    <PCitemTitle>Rio de Janeiro</PCitemTitle>
                    <PCsubtitle>103 things to do</PCsubtitle>
                </PCitem>
            </PCcontainer>
        </PageContent>
    </div>
  )
}

export default Atractions