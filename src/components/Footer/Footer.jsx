import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
    width: 100%;
    width: 1024px;
    font-size: 12px;

`;
const Flist = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    list-style: none;
    padding: 0px;
`;

const Flists = styled.div``;
const FListItem = styled.li`
    margim-bottom: 10px;
    color: #003580;
    cursor: pointer;
`;
const Ftext = styled.div``;

const Footer = () => {
  return (
    <Foot>
        <Flists>
            <Flist>
                <FListItem>Countries</FListItem>
                <FListItem>Regions</FListItem>
                <FListItem>Cities</FListItem>
                <FListItem>Districts</FListItem>
                <FListItem>Airports</FListItem>
                <FListItem>Hotels</FListItem>
            </Flist>
        </Flists>
        <Flists>
            <Flist>
                <FListItem>Countries</FListItem>
                <FListItem>Regions</FListItem>
                <FListItem>Cities</FListItem>
                <FListItem>Districts</FListItem>
                <FListItem>Airports</FListItem>
                <FListItem>Hotels</FListItem>
            </Flist>
        </Flists>
        <Flists>
            <Flist>
                <FListItem>Countries</FListItem>
                <FListItem>Regions</FListItem>
                <FListItem>Cities</FListItem>
                <FListItem>Districts</FListItem>
                <FListItem>Airports</FListItem>
                <FListItem>Hotels</FListItem>
            </Flist>
        </Flists>
        <Flists>
            <Flist>
                <FListItem>Countries</FListItem>
                <FListItem>Regions</FListItem>
                <FListItem>Cities</FListItem>
                <FListItem>Districts</FListItem>
                <FListItem>Airports</FListItem>
                <FListItem>Hotels</FListItem>
            </Flist>
        </Flists>
        <Flists>
            <Flist>
                <FListItem>Countries</FListItem>
                <FListItem>Regions</FListItem>
                <FListItem>Cities</FListItem>
                <FListItem>Districts</FListItem>
                <FListItem>Airports</FListItem>
                <FListItem>Hotels</FListItem>
            </Flist>
        </Flists>
        <Ftext>Copyright 2022 Booking</Ftext>
    </Foot>
  )
}

export default Footer