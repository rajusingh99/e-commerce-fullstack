import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items =  data.map((item)=> <HomeSectionCard product={item}/>)
  const responsive = {
      0: { items: 1 },
      720: { items: 3 },
      1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex-1)
  const slideNext = () => setActiveIndex(activeIndex+1)

  const syncActiveIndex = (item)=> setActiveIndex(item)
 
  return (
    <div className='relative px-4 lg:px-8 '>
      <h2 className='text-2xl font-extrabold font-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5 '>
        <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        disableButtonsControls
        onSlideChange={syncActiveIndex}
        activeIndex={activeIndex}
       />
         {activeIndex !== items.length -5 && <Button onClick={slideNext} className='z-50' variant='contained' sx={{position:'absolute', top:'8rem' , right:'0rem', transform:'translateX(50%) rotate(90deg)' , bgcolor:'white'}}>
              <KeyboardArrowLeftIcon sx={{transform:'rotate(90deg)', color:'black'}}/>
          </Button>}

          {activeIndex !== 0 &&<Button onClick={slidePrev} className='z-50' variant='contained' sx={{position:'absolute', top:'8rem' , left:'0rem', transform:'translateX(-50%) rotate(-90deg)' , bgcolor:'white'}}>
              <KeyboardArrowLeftIcon sx={{transform:'rotate(90deg)', color:'black'}}/>
          </Button>}
      </div>
    </div>
  )
}

export default HomeSectionCarousel
