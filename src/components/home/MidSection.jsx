import { Grid, styled } from "@mui/material";

const ImageURL = [
  "https://www.bing.com/th/id/OGC.e541039c65e3a213d9665e9c9e06dc14?o=7&pid=1.7&rm=3&rurl=http%3a%2f%2f2.bp.blogspot.com%2f-hhmJA1nbX9w%2fUs_0aYmXvtI%2fAAAAAAAAHVo%2f4hGbdV5t288%2fs1600%2f1060564.gif&ehk=5SBykUdIeoMcSzWbYDon8JfL%2b9y%2bVmvcKvPCFrAUFkQ%3d",
  "https://www.bing.com/th/id/OGC.aeded46f4ab48df20237c9d26a5f0f6d?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fmedia.tenor.com%2fheb8kltvANEAAAAC%2fmodel-fashion.gif&ehk=F1tshvwCLO9S%2b76Detz5hDWpCxJ37sZnagwU4%2f83Uk4%3d",
  "https://www.bing.com/th/id/OGC.6f018a7666107e5994080e00293f6a12?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fc.tenor.com%2faSqbGsOK7zMAAAAC%2ffashion.gif&ehk=8uTiiPoxNouft9KA%2b9CwEm%2bWbXQ%2fGmaI%2fHpkbDhzGGs%3d",
  "https://www.bing.com/th/id/OGC.182843e0309dcb20cbeb082acc560603?o=7&pid=1.7&rm=3&rurl=https%3a%2f%2fi.pinimg.com%2foriginals%2f95%2f02%2f72%2f950272209f167e1c0a849b6c9ae68d08.gif&ehk=piVX2GThzsjW142IKe%2biRIKBPHkX40F44w%2fmYaYPgNc%3d",
  "https://c.tenor.com/1rDbNU4AHOUAAAAC/fashion.gif",
  "https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4726520250816114511.jpg?w=1500&dpr=1.3",
];

const Wrapper = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const SmallImage = styled("img")(({ theme }) => ({
  flex: "1 1 calc(20% - 10px)",
  height: 280,
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",

  [theme.breakpoints.down("lg")]: {
    flex: "1 1 calc(25% - 10px)",
    height: 240,
  },

  [theme.breakpoints.down("md")]: {
    flex: "1 1 calc(33.33% - 10px)",
    height: 200,
  },

  [theme.breakpoints.down("sm")]: {
    flex: "1 1 calc(50% - 10px)",
    height: 180,
  },

  [theme.breakpoints.down("xs")]: {
    flex: "1 1 100%",
    height: 160,
  },
}));

const BannerImage = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  objectFit: "cover",
  marginTop: "10px",
  cursor: "pointer",
});

const MidSection = () => {
  return (
    <Wrapper>
      
      {/* ⭐ TOP 5 IMAGES → OPEN FASHION PAGE */}
      {ImageURL.slice(0, 5).map((image, index) => (
        <SmallImage
          key={index}
          src={image}
          alt={`banner-${index}`}
          onClick={() => (window.location.href = "/fashion")}
        />
      ))}

      {/* ⭐ BOTTOM SHOE BANNER → OPEN SHOES PAGE */}
      <BannerImage
        src={ImageURL[5]}
        alt="wide-banner"
        onClick={() => (window.location.href = "/shoes")}
      />
    </Wrapper>
  );
};

export default MidSection;
