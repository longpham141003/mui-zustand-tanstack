import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const Advertisement = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // Tắt mũi tên mặc định
  };

  return (
    <Box className="Advertisement" position="relative" width="100%" py={7}>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img
            src="./assets/image/QC1.webp"
            alt="Slide 1"
            width={337}
            height={192}
            style={{
              borderRadius: '8px', // Thêm border-radius cho ảnh
              transition: 'transform 0.3s ease', // Hiệu ứng zoom
            }}
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="./assets/image/QC2.webp"
            alt="Slide 2"
            width={337}
            height={192}
            style={{
              borderRadius: '8px', // Thêm border-radius cho ảnh
              transition: 'transform 0.3s ease', // Hiệu ứng zoom
            }}
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/337x192"
            alt="Slide 3"
            width={337}
            height={192}
            style={{
              borderRadius: '8px', // Thêm border-radius cho ảnh
              transition: 'transform 0.3s ease', // Hiệu ứng zoom
            }}
            className="slider-image"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/337x192"
            alt="Slide 4"
            width={337}
            height={192}
            style={{
              borderRadius: '8px', // Thêm border-radius cho ảnh
              transition: 'transform 0.3s ease', // Hiệu ứng zoom
            }}
            className="slider-image"
          />
        </div>
      </Slider>

      {/* Nút điều hướng */}
      <Box
        className="slider-navigation"
        position="absolute"
        top="50%"
        left="10px"
        right="10px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ transform: 'translateY(-50%)' }} // Để căn giữa theo chiều dọc
      >
        {/* Nút Prev */}
        <IconButton
          onClick={() => sliderRef.current?.slickPrev()}
          aria-label="Previous"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            borderRadius: '50%',
          }}
        >
          <ArrowBack />
        </IconButton>

        {/* Nút Next */}
        <IconButton
          onClick={() => sliderRef.current?.slickNext()}
          aria-label="Next"
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            borderRadius: '50%',
          }}
        >
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Advertisement;
