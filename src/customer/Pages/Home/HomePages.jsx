import React from 'react'
import { MainCarousel } from '../../Components/MainCarousel'
import HomeSectionCarousel from '../../HomeSectionCarousel/HomeSectionCarousel'
import Constant from '../../../Constant'

const HomePages = () => {
  return (
    <div>
      <MainCarousel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={Constant.mens_kurta}  sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={Constant.mens_kurta}  sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={Constant.mens_kurta}  sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={Constant.mens_kurta}  sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={Constant.mens_kurta}  sectionName={"Men's Belt"}/>
      </div>

    </div>
  )
}

export default HomePages
