import React from "react";
// import Swiper core and required modules
import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Testimonials.css";
import character from "../../imgs/character.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials" id="review">
        <div className="container">
          <h1>Testimonials</h1>
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="content">
                <div className="img">
                  <img src={character}></img>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                  </p>
                  <p>Maccy Doe - Front End</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="img">
                  <img src={character}></img>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                  </p>
                  <p>Maccy Doe - Front End</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <div className="img">
                  <img src={character}></img>
                </div>
                <div className="text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam et purus a odio finibus bibendum in sit amet leo.
                  </p>
                  <p>Maccy Doe - Front End</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
