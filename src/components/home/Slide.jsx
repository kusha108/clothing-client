import { Button, Divider, Box, Typography, styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

// Main container – black background
const Component = styled(Box)`
    margin-top: 10px;
    background: #000; 
    border-radius: 10px;
    padding-bottom: 10px;
`;

// Upper section (title + timer + button)
const Deal = styled(Box)`
    display: flex;    
    padding: 15px 20px;
    align-items: center;
`;

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 700;
    color: #FFD700;     /* GOLD yellow */
    letter-spacing: 0.5px;
`;

const Timer = styled(Box)`
    color: #FFD700;
    margin-left: 10px;
    display: flex;
    align-items: center;
`;

const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #FFD700 !important;
    color: #000 !important;
    font-weight: 700;
    border-radius: 6px;
    padding: 6px 16px;
    text-transform: none;
    box-shadow: none;
    &:hover {
        background-color: #e6c200 !important;
    }
`;

const Image = styled('img')({
    width: 'auto',
    height: 150,
    borderRadius: "6px"
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

const RenderTimer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Slide = ({ products, timer, title }) => {

    const safeProducts = Array.isArray(products) ? products : [];

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <RenderTimer variant="span" style={{ color: "#FFD700", fontWeight: 600 }}>
                {hours} : {minutes} : {seconds} Left
            </RenderTimer>
        );
    };

    return (
        <Component>

            {/* Header Section */}
            <Deal>
                <DealText>{title}</DealText>

                {timer && (
                    <Timer>
                        <img src={timerURL} style={{ width: 24 }} alt='time clock' />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                )}

                <ViewAllButton variant="contained">View All</ViewAllButton>
            </Deal>

            <Divider sx={{ backgroundColor: "#FFD700" }} />

            {/* Carousel */}
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                centerMode={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
            >
                {safeProducts.map(product => (
                    <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
                        <Box 
                            textAlign="center" 
                            style={{ padding: '25px 15px', background: "#111", borderRadius: "10px" }}
                        >
                            <Image src={product.url} alt={product.title.shortTitle} />

                            {/* Product Name */}
                            <Text style={{ fontWeight: 600, color: "#FFD700" }}>
                                {product.title.shortTitle}
                            </Text>

                            {/* Discount */}
                            <Text style={{ color: "#00ff55", fontWeight: 600 }}>
                                {product.discount}
                            </Text>

                            {/* Tagline */}
                            <Text style={{ color: "#ccc" }}>
                                {product.tagline}
                            </Text>
                        </Box>
                    </Link>
                ))}
            </Carousel>
        </Component>
    );
}

export default Slide;
