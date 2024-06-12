 import KURTA from './WomenKurta'
 import { mens_kurta } from './MenKurta';
 import {color} from './filterData';
import { filters } from './filterData';
import { singleFilter } from './filterData';

 const MAINCAROUSELDATA=[
    {
      "images" :"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg",
      "path" :"women/clothing/lahanga_choli"
    },
    {
      "images" :"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg",
      "path" :"women/clothing/women_dress"
    },
    {
      "images" :"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg",
      "path" :"women/clothing/women_dress"
    },
    {
      "images" :"https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg",
      "path" :"women/clothing/women_saree"
    }
  ]

 export const user ={
  "isLogin" : true,
  "role" :"user"
 };


const Constant ={
    MAINCAROUSELDATA,
    KURTA,
    mens_kurta, user,
    color,filters,singleFilter

}
export default Constant;