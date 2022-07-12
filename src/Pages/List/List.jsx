import {useState} from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import SearchItem from '../../components/SearchItem/SearchItem';

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

`;
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;

`;
const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;
const ListResult = styled.div`
  flex: 3;
`;
const ListSearchTitle = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;

`;
const Label = styled.label`
  font-size: 12px;

`;
const Input = styled.input`
  height: 30px;
  border: none;
  padding: 5px;

`;
const Span = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: centert;
  cursor: pointer;

`;
const ListOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`;
const ListOptionText = styled.span``;
const ListOptionInput = styled.input`
  width: 50%;
`;
const ListOptions = styled.div`
  padding: 10px;
`;
const ButtonSearch = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 100%;
  cursor: pointer;
`;

const List = () => {

  const location = useLocation();

  const [destination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(location.state.date);
  const [options] = useState(location.state.options);


  return (
    <div>         
        <Navbar/>
        <Header type='list'/>
        <ListContainer>
          <ListWrapper>
              <ListSearch>
                <ListSearchTitle>Search</ListSearchTitle>
                <ListItem>
                <Label>Destination</Label>
                <Input placeholder={destination} />
                </ListItem>
                <ListItem>
                  <Label>Check-in Date</Label>
                  <Span onClick={() => setOpenDate(!openDate)} >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</Span>
                  {openDate && <DateRangePicker 
                    onChange={(item) => setDate([item.selection])} 
                    minDate={new Date()} 
                    ranges={date} />}
                </ListItem>
                <ListItem>
                    <Label>Options</Label>
                    <ListOptions>
                      <ListOptionItem>
                        <ListOptionText>Min price <small>per night</small></ListOptionText>
                        <ListOptionInput type='number'  />
                      </ListOptionItem>
                      <ListOptionItem>
                        <ListOptionText>Max price <small>per night</small></ListOptionText>
                        <ListOptionInput type='number'  />
                      </ListOptionItem>
                      <ListOptionItem>
                      <ListOptionText>Adult</ListOptionText>
                        <ListOptionInput type='number' min={1} placeholder={options.adult} />
                        </ListOptionItem>
                      <ListOptionItem>
                      <ListOptionText>Children</ListOptionText>
                        <ListOptionInput type='number' min={0} placeholder={options.children} />
                        </ListOptionItem>
                      <ListOptionItem>
                        <ListOptionText>Room</ListOptionText>
                        <ListOptionInput type='number' min={1} placeholder={options.room} />
                      </ListOptionItem>
                    </ListOptions>
                </ListItem>
                <ButtonSearch>
                    Search
                </ButtonSearch>
              </ListSearch>
              <ListResult>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </ListResult>
          </ListWrapper>
        </ListContainer>
    </div>
  )
}

export default List