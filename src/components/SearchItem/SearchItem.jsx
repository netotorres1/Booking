import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const SearchItems = styled.div`
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
`;
const SearchItemImg = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;

`;
const SearchItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2;
`;
const SearchItemDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SearchItemTitle = styled.h1`
    font-size:20px;
    color: #0071c2;

`;
const SearchItemDistance = styled.span`
    font-size: 12px;

`;
const SearchItemTaxiOp = styled.span`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px;

`;
const SeachItemSubtitle = styled.span`
    font-size: 12px;
    font-weight: bold;

`;
const SearchItemFeatures = styled.span`
    font-size: 12px;

`;
const SearchItemCancelOp = styled.span`
    color: green;
    font-weight: bold;
    font-size: 12px;
`;
const SearchItemCancelOpSubtitle = styled.span`
    color: green;
    font-size: 12px;
`;

const SearchItemRating = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 500;
`;
const Span = styled.div`
    font-weight: 500;

`;
const Button = styled.button`
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;

`;
const DetailTexts = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    gap: 5px;
`;
const SpanPrice = styled.span`
    font-size: 24px;

`;
const SpanTaxOp = styled.span`
    font-size: 12px;
    color: gray;
`;
const SearchItemCheckButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight:bold;
    padding: 10px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;

const SearchItem = () => {
  return (
    <SearchItems>
        <SearchItemImg src='https://cf.bstatic.com/xdata/images/hotel/max500/310072624.jpg?k=9880c885d500bf29224e84df164cb931d491834df99078b5e345bc7a89d90154&o=&hp=1' />
        <SearchItemDesc>
            <SearchItemTitle>Tower Street Appartments</SearchItemTitle>
            <SearchItemDistance>500m from center</SearchItemDistance>
            <SearchItemTaxiOp>Free airport taxi</SearchItemTaxiOp>
            <SeachItemSubtitle>Studio Apartment with Air conditioning</SeachItemSubtitle>
            <SearchItemFeatures>Entire studio - 1 bathroom - 21m²  1 full bed</SearchItemFeatures>
            <SearchItemCancelOp>Free cancellation</SearchItemCancelOp>
            <SearchItemCancelOpSubtitle>You can cancel later, so lock in this great price today!</SearchItemCancelOpSubtitle>
        </SearchItemDesc>
        <SearchItemDetails>
            <SearchItemRating>
                <Span>Excelent</Span>
                <Button>8.9</Button>
            </SearchItemRating>
            <DetailTexts>
                <SpanPrice>$123</SpanPrice>
                <SpanTaxOp>Includes taxes and fees</SpanTaxOp>
                <SearchItemCheckButton>
                    <Link to='/hotels/1' style={{color: 'white'}}>See availabity</Link>
                </SearchItemCheckButton>
            </DetailTexts>
        </SearchItemDetails>
    </SearchItems>
  )
}

export default SearchItem