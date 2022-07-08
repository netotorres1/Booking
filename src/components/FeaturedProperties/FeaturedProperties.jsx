import React from 'react'
import styled from 'styled-components'

const Fp = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`;

const FpItem = styled.div`
    flex: 1;
    gap: 10px;
    display:flex;
    flex-direction: column;
`;
const FpImg = styled.img`
    width: 100%;
`;
const FpName = styled.span`
    font-weight: bold;
`;
const FpCity = styled.span`
    font-weight: 300;
`;
const FpPrice = styled.span`
    font-weight: 500;
`;
const FpRating = styled.div``;
const Button = styled.button`
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
`;
const Span = styled.span`
    font-size: 14px;
`;

const FeaturedProperties = () => {
  return (
    <Fp>
        <FpItem>
            <FpImg src='https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4e/66/aparthotel-stare-miasto.jpg' />
            <FpName>Aparthotel Stare Miasto</FpName>
            <FpCity>Madrid</FpCity>
            <FpPrice>Starting from $120</FpPrice>
            <FpRating>
                <Button>8.9</Button>
                <Span>Excelent</Span>
            </FpRating>
        </FpItem>
        <FpItem>
            <FpImg src='https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4e/66/aparthotel-stare-miasto.jpg' />
            <FpName>Aparthotel Stare Miasto</FpName>
            <FpCity>Madrid</FpCity>
            <FpPrice>Starting from $120</FpPrice>
            <FpRating>
                <Button>8.9</Button>
                <Span>Excelent</Span>
            </FpRating>
        </FpItem>
        <FpItem>
            <FpImg src='https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4e/66/aparthotel-stare-miasto.jpg' />
            <FpName>Aparthotel Stare Miasto</FpName>
            <FpCity>Madrid</FpCity>
            <FpPrice>Starting from $120</FpPrice>
            <FpRating>
                <Button>8.9</Button>
                <Span>Excelent</Span>
            </FpRating>
        </FpItem>
        <FpItem>
            <FpImg src='https://media-cdn.tripadvisor.com/media/photo-s/16/c4/4e/66/aparthotel-stare-miasto.jpg' />
            <FpName>Aparthotel Stare Miasto</FpName>
            <FpCity>Madrid</FpCity>
            <FpPrice>Starting from $120</FpPrice>
            <FpRating>
                <Button>8.9</Button>
                <Span>Excelent</Span>
            </FpRating>
        </FpItem>
    </Fp>
  )
}

export default FeaturedProperties