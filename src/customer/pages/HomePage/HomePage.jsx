import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from "../../../data/Men/men_kurta.js"
// import {mensShoesPage1} from "../../../data/Men/shoes.js"
function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className="border border-red-600 space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10" >
          <HomeSectionCarousel data={mens_kurta} section={"Men's kurta"}/>
          {/* <HomeSectionCarousel data={mensShoesPage1}/> */}
          <HomeSectionCarousel data={mens_kurta} section={"Men's Shoes"}/>
          <HomeSectionCarousel data={mens_kurta} section={"Women Sarees"}/>
        </div>
    </div>

  )
}

export default HomePage