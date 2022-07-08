import React from 'react'
import styled from 'styled-components'

const Feature = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    z-index: 1;
`;
const FeaturedItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    over-flow: hidden;
    height: 250px;

`;
const FeaturedImg = styled.img`
    width: 100%;
    object-fit: conver;
    height: 100%;
`;
const FeaturedTitle = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
`;
const H1 = styled.h1``;
const H2 = styled.h2``;

const Featured = () => {
  return (
    <Feature>
        <FeaturedItem>
            <FeaturedImg src='https://turismo.eurodicas.com.br/wp-content/uploads/2019/11/dublin.jpg' />
            <FeaturedTitle>
                <H1>Dublin</H1>
                <H2>123 properties</H2>
            </FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedImg src='https://www.visiteosusa.com.br/sites/default/files/styles/16_9_1280x720/public/2020-05/b7a9fee0-624a-4532-847d-68dd15f36cec.jpeg?h=fa219584&itok=Y_apm_mr' />
            <FeaturedTitle>
                <H1>Austin</H1>
                <H2>532 properties</H2>
            </FeaturedTitle>
        </FeaturedItem>
        <FeaturedItem>
            <FeaturedImg src='https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/d7d84528dbe21bb40036fcf59e9ae164.jpeg?h=8541be68&itok=_zFSJYE6https://www.visiteosusa.com.br/sites/default/files/styles/hero_l/public/images/hero_media_image/2017-04/d7d84528dbe21bb40036fcf59e9ae164.jpeg?h=8541be68&itok=_zFSJYE6' />
            <FeaturedTitle>
                <H1>Reno</H1>
                <H2>533 properties</H2>
            </FeaturedTitle>
        </FeaturedItem>
    </Feature>
  )
}

export default Featured