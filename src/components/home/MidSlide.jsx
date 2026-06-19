import { Box, styled } from "@mui/material";
import Slide from "./Slide.jsx";

// Main container
const Component = styled(Box)`
  display: flex;
  margin-top: 15px;
  width: 100%;
  justify-content: space-between;
`;

// LEFT slide section
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "82%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

// ⭐ RIGHT Ad section — FIXED HEIGHT + BLACK BORDER + EQUAL SPACING
const RightComponent = styled(Box)(({ theme }) => ({
  width: "17%",
  marginLeft: 10,

  background: "#ffffff",
  padding: 5,
   textAlign: "center",
  borderRadius: "8px",

  //  BLACK border (your request)
  border: "3px solid #000000",

  //  Perfect shadow
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",

  //  SAME height as Deal of the Day box (~350px)
  height: 350,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [theme.breakpoints.down("md")]: {
    display: "none",
  }
}));

// Banner Image
const Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  objectFit: "cover",
});

const MidSlide = ({ products, title, timer }) => {
  const url =
    "https://images.bewakoof.com/uploads/grid/app/HC-1x1-Banner-480x520-Msite-Desktop--3--1752762398.jpg";

  return (
    <Component>
      <LeftComponent>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponent>

      <RightComponent>
        <Image src={url} alt="right ad" />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
