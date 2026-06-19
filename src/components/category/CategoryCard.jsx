import { Card, CardMedia, CardContent, Typography, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  cursor: "pointer",
  transition: "0.3s",
  border: "2px solid #000",
  background: "#FFFBEA",
  overflow: "hidden",

  "&:hover": {
    boxShadow: "0px 6px 22px rgba(0,0,0,0.3)",
    transform: "translateY(-6px)",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: "260px",
  objectFit: "cover",
  borderBottom: "2px solid #000",
}));

const CategoryCard = ({ item }) => {
  //  SAFE FALLBACKS (Fix crash)
  const shortTitle =
    item?.title?.shortTitle ||
    item?.shortTitle ||
    item?.name ||
    "Product";

  const productImage =
    item?.url ||
    item?.image ||
    "https://via.placeholder.com/300x400?text=No+Image";

  const priceCost = item?.price?.cost || item?.cost || item?.price || "0";
  const priceMRP = item?.price?.mrp || item?.mrp || priceCost;
  const priceDiscount =
    item?.price?.discount ||
    item?.discount ||
    " ";

  return (
    <Link
      to={`/product/${item.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <ProductCard>
        <StyledCardMedia component="img" image={productImage} alt={shortTitle} />

        <CardContent sx={{ padding: "12px 16px" }}>
          {/* Title */}
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              color: "#000",
            }}
          >
            {shortTitle}
          </Typography>

          {/* Price */}
          <Typography
            sx={{
              fontWeight: 700,
              color: "#008000",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              mt: 0.5,
            }}
          >
            ₹{priceCost}
          </Typography>

          {/* Old price + Discount */}
          <Box display="flex" gap={1} mt={0.5}>
            <Typography
              sx={{
                textDecoration: "line-through",
                color: "#505050",
                fontSize: { xs: 12, sm: 13 },
              }}
            >
              ₹{priceMRP}
            </Typography>

            <Typography
              sx={{
                color: "#E53935",
                fontSize: { xs: 12, sm: 13 },
                fontWeight: 600,
              }}
            >
              {priceDiscount}
            </Typography>
          </Box>
        </CardContent>
      </ProductCard>
    </Link>
  );
};

export default CategoryCard;
