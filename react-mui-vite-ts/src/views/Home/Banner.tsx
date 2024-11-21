import { Typography, Box, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [
    {
        title: "Welcome to Our Platform",
        description: "Discover our services and offerings",
        image: "https://via.placeholder.com/800x400"
    },
    {
        title: "Special Deals",
        description: "Explore exclusive discounts and promotions",
        image: "https://via.placeholder.com/800x400"
    },
    {
        title: "Join the Community",
        description: "Connect and grow with like-minded people",
        image: "https://via.placeholder.com/800x400"
    }
];

export default function BannerSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box sx={{ width: '100%', margin: '0 auto' }}>
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '400px',
                                backgroundImage: `url(${banner.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'white',
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                    padding: '20px',
                                    borderRadius: '8px'
                                }}
                            >
                                <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }}>
                                    {banner.title}
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    {banner.description}
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </div>
                ))}
            </Slider>
        </Box>
    );
}
