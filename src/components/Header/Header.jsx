import {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './style.css';
import {format} from 'date-fns';

const Head = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
`;
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    margin: bottom;
`;
const HeaderListItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    &:active{
        border: 1px solid white;
        padding: 10px;
        border-radius: 20px;
    }
`;
const Span = styled.span``;

const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
    margin: 20px 0px;

`;
const HeaderBtn = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
`;

const HeaderSearch = styled.div`
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -25px;
    width: 100%;
    max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const HeaderSearchText = styled.span`
    color: lightgray;
    cursor: pointer;
`;
const Input = styled.input`
    border: none;
    outline: none;
`;
const HeaderButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer;
`;


const Header = () => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }

    ])

  return (
    <Head>
        <HeaderContainer>
            <HeaderList>
                <HeaderListItem>
                    <FontAwesomeIcon icon="fa-solid fa-bed" />
                    <Span>Stays</Span>
                </HeaderListItem>
                <HeaderListItem>
                    <FontAwesomeIcon icon="fa-solid fa-plane" />
                    <Span>Flights</Span>
                </HeaderListItem>
                <HeaderListItem>
                    <FontAwesomeIcon icon="fa-solid fa-car" />
                    <Span>Car rentals</Span>
                </HeaderListItem>
                <HeaderListItem>
                    <FontAwesomeIcon icon="fa-solid fa-bed" />
                    <Span>Attractions</Span>
                </HeaderListItem>
                <HeaderListItem>
                    <FontAwesomeIcon icon="fa-solid fa-bed" />
                    <Span>Airport taxis</Span>
                </HeaderListItem>
            </HeaderList>
            <HeaderTitle>
                A lifetime of discounts ? It's Genius.
            </HeaderTitle>
            <HeaderDesc>
                Get rewarded for your travels - unlock instant savings of 10% or more
                with free booking account
            </HeaderDesc>
            <HeaderBtn>
                Sign in / Register
            </HeaderBtn>
            <HeaderSearch>
                <HeaderSearchItem>
                    <Input placeholder='Where are you going?' />
                </HeaderSearchItem>
                <HeaderSearchItem>
                    <HeaderSearchText onClick={() => setOpenDate(!openDate)}>${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}</HeaderSearchText>
                   {openDate && <DateRangePicker
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                    />}
                </HeaderSearchItem>
                <HeaderSearchItem>
                    <HeaderSearchText>2 adults 2 children 1 room</HeaderSearchText>
                </HeaderSearchItem>
                <HeaderSearchItem>
                    <HeaderButton>Search</HeaderButton>
                </HeaderSearchItem>
            </HeaderSearch>
        </HeaderContainer>
    </Head>
  )
}

export default Header