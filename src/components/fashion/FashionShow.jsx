import { Box, Typography, styled } from "@mui/material";
import FashionGallery from "./FashionGallery";
import FashionVideos from "./FashionVideos";

const Wrapper = styled(Box)`
  width: 100%;
  padding: 20px;
  background: #000;
  color: #fff;
  overflow-x: hidden;
   box-sizing: border-box;       /* 🚀 Removes right-side scroll */
`;

const Title = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  border-left: 6px solid #ffd600;
  padding-left: 10px;
`;

const FashionShow = () => {
  return (
    <Wrapper>
      <Title>Fashion Show Highlights</Title>

      <FashionGallery />

      <Title style={{ marginTop: 40 }}>Fashion Show Videos</Title>

      <FashionVideos />
    </Wrapper>
  );
};

export default FashionShow;
