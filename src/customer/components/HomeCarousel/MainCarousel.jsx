import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'; //////
const MainCarousel=()=>{
    const items = MainCarouselData.map((item)=>
        <img className='cursor-pointer' role='presentation' src={item.image} alt="" />
    )

    // const responsive = {
    //     0: { items: 1 },
    //     568: { items: 2 },
    //     1024: { items: 3 },
    // };

    return(
        <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls /////
        autoPlay /////
        autoPlayInterval={2500} ////////
        infinite //////
        // responsive={responsive}
        controlsStrategy="alternate"
    />
    )

}
    

export default MainCarousel