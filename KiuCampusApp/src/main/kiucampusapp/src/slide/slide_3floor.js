import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import '../building/building.css';

const Slide_3floor = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slick = sliderRef.current;
    if (slick) {
      slick.slickGoTo(8); // Slide 3로 이동
    }
  }, []);

  const PrevButton = ({ onClick }) => {
    const handleClick = () => {
      const slick = sliderRef.current;
      if (slick && slick.currentSlide === 2) {
        slick.slickGoTo(0);
      } else if (onClick) {
        onClick();
      }
    };

    return (
      <button className="prevBtn" onClick={handleClick}>
        <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-left-40.png" alt="PrevBtnImg" />
      </button>
    );
  };

  const NextButton = ({ onClick }) => {
    const handleClick = () => {
      const slick = sliderRef.current;
      if (slick && slick.currentSlide === 2) {
        slick.slickGoTo(3);
      } else if (onClick) {
        onClick();
      }
    };

    return (
      <button className="nextBtn" onClick={handleClick}>
        <img src="https://cdn1.iconfinder.com/data/icons/bootstrap-vol-2/16/chevron-right-40.png" alt="NextBtnImg" />
      </button>
    );
  };

  const appendArrows = (container, prevButton, nextButton) => (
    <div className="arrowContainer">
      {prevButton}
      {nextButton}
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
    appendArrows: appendArrows
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <img src="../3floorimage/left8.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left7.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left6.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left5.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left4.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left3.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left2.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/left1.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/mid.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right1.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right2.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right3.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right4.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right5.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right6.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right7.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right8.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right9.jpg" alt="" height="210px" width="393px" />
      </div>
      <div>
        <img src="../3floorimage/right10.jpg" alt="" height="210px" width="393px" />
      </div>
    </Slider>
  );
};

export default Slide_3floor;