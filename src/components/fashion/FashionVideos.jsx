import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 20px;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const VideoBox = styled(Box)`
  border: 3px solid #ffd600;
  border-radius: 12px;
  overflow: hidden;
`;

const FashionVideos = () => {
  return (
    <Container>
      <VideoBox>
        <iframe
          width="100%"
          height="280"
          src="https://www.youtube.com/embed/9zLN7gSwq_Q?autoplay=1&mute=1&controls=0&loop=1&playlist=9zLN7gSwq_Q&playsinline=1"
          title="Fashion Show Video 1"
          allow="autoplay"
        ></iframe>
      </VideoBox>

      <VideoBox>
        <iframe
          width="100%"
          height="280"
          src="https://www.youtube.com/embed/Gk-s0icT2CI?autoplay=1&mute=1&controls=0&loop=1&playlist=Gk-s0icT2CI&playsinline=1"
          title="Fashion Show Video 2"
          allow="autoplay"
        ></iframe>
      </VideoBox>
    </Container>
  );
};

export default FashionVideos;
