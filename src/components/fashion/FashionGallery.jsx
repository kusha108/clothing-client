import { Box, styled } from "@mui/material";

const GalleryWrapper = styled(Box)`
  width: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Img = styled("img")`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 12px;
  border: 3px solid #ffd600; 
  background: #000;

  @media (max-width: 755px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const FashionGallery = () => {
  const gallery = [
    "https://media.giphy.com/media/KpyLoKSLpheJW/giphy.gif",
    "https://media.giphy.com/media/72tZ0YoQKFWkE/giphy.gif",
    "https://media.giphy.com/media/qB4oo5miLxXPi/giphy.gif",
    "https://data2.nssmag.com/images/galleries/9606/cover-prada-gif.gif",
    "https://media1.giphy.com/media/FJKhOjC9g9jvzkWktk/giphy.gif?cid=790b76110acbb93028b0481c95b5074c98e32754ffdc0a80&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/k27QuMBmd1KBa/source.gif",
    "https://media.giphy.com/media/li0a9ltRF07Sw/giphy.gif",
    "https://24.media.tumblr.com/ab8b710685a997d419eeb15d35d36b63/tumblr_mfqospIom61qbptbuo1_1280.gif",
    "https://i.pinimg.com/originals/3b/27/b0/3b27b015efec303b68ee268c1fbde0fe.gif",
    "https://c.tenor.com/kRIB2PcB7toAAAAC/runway-catwalk-male-model-fashion-handsome-cute-sexy-face-dapper-clothing-designer-men-menswear.gif",
  ];

  return (
    <GalleryWrapper>
      {gallery.map((url, index) => (
        <Img key={index} src={url} alt="fashion" />
      ))}
    </GalleryWrapper>
  );
};

export default FashionGallery;

