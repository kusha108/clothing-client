import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material/styles";
import { bannerData } from "../../constants/data";
import { Link } from "react-router-dom";

//  Banner Wrapper – keeps equal spacing & full alignment
const BannerWrapper = styled("div")({
  width: "100%",
  margin: "0 auto",
  padding: "0",
});

//  Banner Image
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 340,          // MATCH Deal of the Day height
  cursor: "pointer",
  borderRadius: "6px",

  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 200,       //  Balanced mobile height
  },
}));

//  Carousel breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <BannerWrapper>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        containerClass="carousel-container"
        shouldResetAutoplay={false}
      >
        {bannerData.map((data, index) => (
          <Link
            key={index}
            to={data.link ? data.link : `/category/${data.category || "featured"}`}
            style={{ textDecoration: "none" }}
          >
            <Image src={data.url} alt="banner" />
          </Link>
        ))}
      </Carousel>
    </BannerWrapper>
  );
};

export default Banner;
