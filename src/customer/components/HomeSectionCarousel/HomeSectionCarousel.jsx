import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import "react-alice-carousel/lib/alice-carousel.css";
import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { mens_kurta } from "../../../data/Men/men_kurta.js"

function HomeSectionCarosel({ data, sectionName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); /////////////////////

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => { //////////////////
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => { ////////////////////
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={item.id} product={item} />); /////////////

  return (
    <div className="relative border px-4 lg:px-8">
      <h2 className="text-2xl font-extrabold text-gray-900">{sectionName}</h2>
      <div className="relative p-5 flex items-center">
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slidePrev}
            sx={{
            //   transform: "rotate(-90deg)",
              bgcolor: "white",
              left: 0,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) rotate(-90deg)"
            }}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}

        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            className="z-50 bg-white"
            onClick={slideNext}
            sx={{
            //   transform: "rotate(90deg)",
              bgcolor: "white",
              right: 0,
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%) rotate(90deg)",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarosel;