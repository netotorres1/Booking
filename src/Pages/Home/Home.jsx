import React from 'react'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import PropertyList from '../../components/PropertyList/PropertyList'
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'

const HomeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const HomeTitle = styled.h1`
  width: 1024;
  font-size: 20px;

`;


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
          <HomeContainer>
            <Featured />
            <HomeTitle>Browse by property type</HomeTitle>
            <PropertyList />
            <HomeTitle>Homes guest love</HomeTitle>
            <FeaturedProperties />
            <MailList/>
            <Footer/>
          </HomeContainer>
    </div>
  )
}

export default Home