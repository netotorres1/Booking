import {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './style.css';
import {format} from 'date-fns';
import {useNavigate} from 'react-router-dom';

const Head = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
    position: relative;
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

const Options = styled.div`
    position: absolute;
    top: 50px;
    background-color: white;
    color: gray;
    z-index: 2;
`;
const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
const OptionText = styled.div``;
const OptionCounterButton = styled.button`
    width:30px;
    height: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;

    &:disabled{
        cursor: not-allowed;
    }
`;
const OptionCounterNumber = styled.span``;
const OptionCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: black;
`;

const Header = ({type}) => {

    const [destination, setDestination] = useState("");
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1

    })
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }

    ])

    const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name] : operation === 'i' ? options[name] + 1 : options[name] - 1,
        }})
    }

    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/hotels', {state: {destination, date, options}})
    }

  return (
    <Head>
        <div className={type == 'list' ? 'headerContainer listMode' : 'headerContainer'}>
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
            { type !=='list' &&
                <> <HeaderTitle>
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
                    <Input placeholder='Where are you going?' onChange={(e) => setDestination(e.target.value)} />
                </HeaderSearchItem>
                <HeaderSearchItem>
                    <HeaderSearchText onClick={() => setOpenDate(!openDate)}>${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}</HeaderSearchText>
                   {openDate && <DateRangePicker
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='date'
                        minDate={new Date()}
                    />}
                </HeaderSearchItem>
                <HeaderSearchItem>
                    <HeaderSearchText onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult | ${options.children} | ${options.room} room `}</HeaderSearchText>
                    {openOptions &&  <Options>
                        <OptionItem>
                            <OptionText>Adult</OptionText>
                            <OptionCounter>
                                <OptionCounterButton disabled={options.adult <= 1} onClick={() => handleOption('adult','d')} >-</OptionCounterButton>
                                <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                                <OptionCounterButton onClick={() => handleOption('adult','i')}>+</OptionCounterButton>
                            </OptionCounter>
                        </OptionItem>
                        <OptionItem>
                            <OptionText>Children</OptionText>
                            <OptionCounter>
                                <OptionCounterButton disabled={options.children <= 0} onClick={() => handleOption('children','d')}>-</OptionCounterButton>
                                <OptionCounterNumber>{options.children}</OptionCounterNumber>
                                <OptionCounterButton onClick={() => handleOption('children','i')}>+</OptionCounterButton>
                            </OptionCounter>
                        </OptionItem>
                        <OptionItem>
                            <OptionText>Room</OptionText>
                            <OptionCounter>
                                <OptionCounterButton disabled={options.adult <= 1} onClick={() => handleOption('room','d')}>-</OptionCounterButton>
                                <OptionCounterNumber>{options.room}</OptionCounterNumber>
                                <OptionCounterButton onClick={() => handleOption('room','i')}>+</OptionCounterButton>
                            </OptionCounter>
                        </OptionItem>
                    </Options>}
                </HeaderSearchItem>
                <HeaderSearchItem >
                    <HeaderButton onClick={handleSearch} >Search</HeaderButton>
                </HeaderSearchItem>
            </HeaderSearch></>}
        </div>
    </Head>
  )
}

export default Header