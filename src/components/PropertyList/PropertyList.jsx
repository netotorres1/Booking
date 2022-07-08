import React from 'react'
import styled from 'styled-components'

const Blist = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

const PlistItem = styled.div`
    flex:1;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`;
const PListImg = styled.img`
    width: 100%;
    height:150px;
    object-fit: cover;
`;
const PListTitles = styled.div``;
const H1 = styled.h1`
    font-size: 18px;

`;
const H2 = styled.h2`
    font-size: 14px;
    font-weight: 300;
`;

const PropertyList = () => {
  return (
    <Blist>
        <PlistItem>
            <PListImg src='https://media-cdn.tripadvisor.com/media/photo-s/1c/db/c3/b5/hotel-exterior.jpg' />
            <PListTitles>
                <H1>Hotels</H1>
                <H2>123 Hotels</H2>
            </PListTitles>
        </PlistItem>
        <PlistItem>
            <PListImg src='https://media-cdn.tripadvisor.com/media/vr-splice-j/09/46/c2/88.jpg' />
            <PListTitles>
                <H1>Appartments</H1>
                <H2>2331 Hotels</H2>
            </PListTitles>
        </PlistItem>
        <PlistItem>
            <PListImg src='https://viajandocomamalarosa.com.br/wp-content/uploads/2020/05/Ocean-Palace.jpg' />
            <PListTitles>
                <H1>Resorts</H1>
                <H2>2331 Hotels</H2>
            </PListTitles>
        </PlistItem>
        <PlistItem>
            <PListImg src='https://diosasluxuryvillas.com/wp-content/uploads/2020/07/diosasluxuryvillas_kefallonia_villa_outside13.jpg' />
            <PListTitles>
                <H1>Villas</H1>
                <H2>2331 Hotels</H2>
            </PListTitles>
        </PlistItem>
        <PlistItem>
            <PListImg src='https://l.icdbcdn.com/oh/1590372f-bf7b-4379-b7e5-4b333cff911a.jpg' />
            <PListTitles>
                <H1>Cabins</H1>
                <H2>2331 Hotels</H2>
            </PListTitles>
        </PlistItem>
    </Blist>
  )
}

export default PropertyList