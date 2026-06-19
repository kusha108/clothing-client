import { Box, Typography, styled } from '@mui/material';
import { useParams } from 'react-router-dom';

const Banner = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "280px",
  borderRadius: "12px",
  overflow: "hidden",
  backgroundSize: "cover",
  backgroundPosition: "center",
  marginBottom: "30px",
  display: "flex",
  alignItems: "flex-end",
  padding: "20px",
  border: "3px solid #000",

  [theme.breakpoints.down("md")]: {
    height: "220px",
    padding: "16px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "180px",
    padding: "12px",
    borderRadius: "8px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  fontWeight: 900,
  color: "#000",
  padding: "8px 18px",
  backgroundColor: "rgba(255, 223, 0, 0.85)",
  borderRadius: "6px",
  border: "2px solid #000",

  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
    padding: "6px 14px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "22px",
    padding: "5px 12px",
  },
}));

// ✅ FULL CORRECT MAPPING — FIXED
const bannerImages = {
  tshirts: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Category_copy_Y8Tslw5.jpg?w=1500&dpr=2",

  joggers: "https://nobero.com/cdn/shop/files/Joggers_Desk_Banner_copy_1.webp?v=1717590592",

  jackets: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Home_page_VBOSLx0.jpg?w=1500&dpr=2",

  hoodies: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2Finsidebanner-desktop-Hoodies-men-1762526449.jpg&w=1920&q=75",

  caps: "https://images.unsplash.com/photo-1602810318383-e4b32c79c0a9",

  jeans: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/category_Us1S2gt.jpg?w=1500&dpr=2",

  pants: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FDesktop-pants-1749827779.jpg&w=1920&q=75",

  sneakers: "https://images.unsplash.com/photo-1528701800489-20be1c2b2c49",

  shoes:
    "https://prod-img.thesouledstore.com/public/theSoul/uploads/themes/4726520250816114511.jpg?w=1500&dpr=1.3",
  
   polos: "https://www.bewakoof.com/_next/image?url=https%3A%2F%2Fimages.bewakoof.com%2Fuploads%2Fcategory%2Fdesktop%2FInside-banner-POLOS-1440x400-Desktop-1762171231.jpg&w=1920&q=75",

  gymfit:
    "https://hypdsports.com/cdn/shop/files/3_f1008958-edd8-492b-b627-ef40d8b6b06a.jpg?v=1750501895&width=1200",

  default:
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_39.jpg?w=1500&dpr=2",

  featured:
    "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/mobile_copy_1_AO21kok.jpg?w=768&dpr=2",
};

const CategoryBanner = ({ categoryName }) => {
  const params = useParams();

  // Prevent crash
  const resolvedName = categoryName || params.name || "default";

  const bannerImage = bannerImages[resolvedName] || bannerImages.default;

  return (
    <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
      <Title>{resolvedName.toUpperCase()}</Title>
    </Banner>
  );
};

export default CategoryBanner;
