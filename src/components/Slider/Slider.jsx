import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel, EffectCreative } from "swiper/modules";
import { useState, useEffect } from "react";
import { getImages } from "../../fetch/gets/getImages";
import { SliderS, Title, Wrapper } from "./Slider";
import { Container } from "../Container/Container.jsx";

import "swiper/css";
import "swiper/css/effect-creative";

export const Slider = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages().then((data) => setImages(data || []));
  }, []);
  return (
    <SliderS>
      <Container>
        <Title>Beautiful nature</Title>
        <Wrapper>
          <Swiper
            modules={[Keyboard, Mousewheel, EffectCreative]}
            slidesPerView="auto"
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            spaceBetween={30}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            effect="creative"
            creativeEffect={{
              limitProgress: 2,
              prev: { translate: [-203, 0, 0], scale: 0.75 },
              next: { translate: [203, 0, 0], scale: 0.75 },
              before: { translate: [0, 0, 0], scale: 0.5 },
              after: { translate: [0, 0, 0], scale: 0.5 },
            }}
          >
            {images.map((img, i) => (
              <SwiperSlide
                key={i}
                style={{
                  maxWidth: "590px",
                  width: "100%",
                  height: "385px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f3f3f7",
                  fontSize: "24px",
                  fontWeight: "600",
                  color: "#333",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  overflow: "hidden",
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </Container>
    </SliderS>
  );
};
