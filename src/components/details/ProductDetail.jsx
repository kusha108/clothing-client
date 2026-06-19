import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
const adURL =
  "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

//  Yellow Highlights
const YellowHeading = styled(Typography)({
  fontWeight: 700,
  color: "#000",
  padding: "4px 0",
});

//  Side Badge Gradient
const StyledBadge = styled(Badge)(({ theme }) => ({
  marginRight: 10,
  color: "#00CC00",
  fontSize: 18,
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

//  Offers Text
const SmallText = styled(Box)(({ theme }) => ({
  fontSize: 14,
  "& > p": {
    fontSize: 14,
    marginTop: 10,
    color: "#000",
    fontWeight: 500,
    background: "#FFFBEA",        // light yellow strip
    padding: "6px 10px",
    borderRadius: "4px",
    borderLeft: "4px solid #FFD700", // yellow left border
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      marginTop: 6,
    },
  },
}));

//  Table Row Style
const ColumnText = styled(TableRow)(({ theme }) => ({
  fontSize: 14,
  verticalAlign: "baseline",
  "& > td": {
    fontSize: 14,
    padding: "10px 8px",
    border: "none",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
      padding: "6px 8px",
    },
  },
}));

const ProductDetail = ({ product }) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "0px 10px", sm: "0px 15px", md: "0px 20px" },
        color: "#000",
      }}
    >
      {/*  Title */}
      <YellowHeading
        sx={{
          fontSize: { xs: "20px", sm: "22px", md: "24px" },
        }}
      >
        {product.title?.longTitle}
      </YellowHeading>

      {/*  Ratings */}
      <Typography
        sx={{
          color: "#444",
          marginTop: "6px",
          fontSize: { xs: "13px", sm: "14px" },
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        8 Ratings & 4 Reviews
        <Box component="span" sx={{ ml: 1 }}>
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 10 }}
          />
        </Box>
      </Typography>

      {/*  Price */}
      <Typography
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "10px",
          justifyContent: { xs: "center", md: "flex-start" },
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ fontSize: { xs: 26, sm: 28, md: 30 }, fontWeight: 700 }}>
          ₹{product.price.cost}
        </Box>

        <Box sx={{ color: "#666", fontSize: { xs: 14, sm: 15 } }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>

        <Box sx={{ color: "green", fontWeight: 600, fontSize: { xs: 14, sm: 15 } }}>
          {product.price.discount} off
        </Box>
      </Typography>

      {/*  Offers Section */}
      <YellowHeading
        sx={{
          marginTop: "15px",
          fontSize: { xs: 16, sm: 17 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Available Offers
      </YellowHeading>

      <SmallText>
        <Typography>
          <StyledBadge /> Get extra 20% off up to ₹50 on 1 item(s) T&C
        </Typography>
        <Typography>
          <StyledBadge /> Get extra 13% off (price inclusive) T&C
        </Typography>
        <Typography>
          <StyledBadge /> Sign up for Studs Shop Pay Later & get ₹500 Gift Card
        </Typography>
        <Typography>
          <StyledBadge /> Buy 2 save 5% | Buy 3 save 10% | T&C
        </Typography>
        <Typography>
          <StyledBadge /> No Cost EMI above ₹3000
        </Typography>
      </SmallText>

      {/*  Info Table */}
      <Table sx={{ mt: 2 }}>
        <TableBody>
          <ColumnText>
            <TableCell sx={{ color: "#444", width: "30%" }}>Delivery</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} ₹40
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell sx={{ color: "#444", width: "30%" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell sx={{ color: "#444", width: "30%" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" sx={{ color: "#FFD700", fontWeight: 700 }}>
                StudOutfits
              </Box>
              <Typography sx={{ fontSize: 14, color: "#222" }}>
                100% Positive Ratings
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#222" }}>
                Ships from and sold by StudOutfits.
              </Typography>
            </TableCell>
          </ColumnText>

          <ColumnText>
            <TableCell colSpan={2} align="center">
              <img
                src={adURL}
                style={{ width: "100%", maxWidth: 380 }}
                alt="StudOutfitpoints"
              />
            </TableCell>
          </ColumnText>
        </TableBody>
      </Table>

      {/*  Description */}
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ color: "#444", fontSize: 14, mb: 1 }}>Description</Typography>
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetail;
