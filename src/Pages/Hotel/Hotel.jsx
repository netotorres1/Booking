import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import MailList from '../../components/MailList/MailList'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaWindowClose } from 'react-icons/fa'

const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const HotelTitle = styled.h1`
  font-size: 24px;
`;
const HotelAdress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const SpanAdress = styled.span``;
const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;

`;
const HotelPriceHightLight = styled.span`
  color: green;
  font-weight: 500;
`;
const HotelImages = styled.div`
  width: 100%;
  object-fit: cover;
  display: flex;
  flex-wrap: wrap;
`;
const HotelImg = styled.img`
  width: 33%;
  height: 300px;
  justify-content: space-between;
  
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

`;
const HotelDetailsTexts = styled.div`
  flex: 3;

`;
const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px;
`;
const PriceTitle = styled.h1`
  font-size: 18px;
  color: #555;

`;
const PriceSpan = styled.span`
  font-size: 14px;
  color: #555;
`;
const PriceH2 = styled.h2`
  font-weight: 300;

`;
const PriceButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;
const BookNow = styled.button`
  position: absolute;
  top: 150px;
  right:290px;
  border: none;
  padding: 10px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;

`;

const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0071c2;
  z-index: 999;
  background-color: rgba(0,0,0,0.426);
  display: flex;
  align-items: center;

`;
const SliderWrapper = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`;

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://digital.ihg.com/is/image/ihg/even-hotels-eugene-5405616297-4x3'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/22443294.jpg?k=fc9d8a13beb15e92eb0479d21af7e66ae55f8da78f5b45b1b63a2937a52fb3d0&o=&hp=1'
    },
    {
      src: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/25/52/2552912_v5.jpeg'
    },
    {
      src: 'https://digital.ihg.com/is/image/ihg/even-hotels-shenandoah-7120185026-4x3'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/d2/51/e8/exterior.jpg'
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  }
  
  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar/>
      <Header type='list' />
      <HotelContainer>
        {open && 
          <Slider>
            <FaWindowClose className='close' onClick={() => setOpen(false)}/>
            <FaArrowAltCircleLeft className='arrow' onClick={() => handleMove('l')} />
              <SliderWrapper>
                <SliderImg src={photos[slideNumber].src} />
              </SliderWrapper>
            <FaArrowAltCircleRight className='arrow' onClick={() => handleMove('r')}/>
          </Slider>}
        <HotelWrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAdress>
            <SpanAdress>Elton St New York</SpanAdress>
          </HotelAdress>
          <HotelDistance>Excelent location - 500m from center</HotelDistance>
            <HotelPriceHightLight>Book a stay over $114 at this property and get a free airport taxi</HotelPriceHightLight>
            <HotelImages>
              {photos.map((photo,i) => (
                <HotelImg onClick={() => handleOpen(i)} src={photo.src} />
              ))}
            </HotelImages>
            <HotelDetails>
              <HotelDetailsTexts>
                <HotelDesc>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book. It has
                 survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release
                   of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </HotelDesc>
              </HotelDetailsTexts>
              <HotelDetailsPrice>
                <PriceTitle>Perfect for a 9-night stay!</PriceTitle>
                <PriceSpan>Located in the real of Krakow, this property has an excelent location score of 9.8!</PriceSpan>
                <PriceH2><b>$945</b> (9 nights)</PriceH2>
                <PriceButton>Reserve or Book Now!</PriceButton>
              </HotelDetailsPrice>
            </HotelDetails>
            <MailList />
            <Footer/>
        </HotelWrapper>
      </HotelContainer>
    </div>
  )
}

export default Hotel