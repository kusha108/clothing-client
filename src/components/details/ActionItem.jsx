import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

//  Left Container — matches DetailView white card look
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "20px 0 0 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 20px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "15px 15px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 5px",
    minWidth: "100%",
  },
}));

//  White frame around image
const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
  border: "2px solid #000",       // Black border (theme)
  borderRadius: "10px",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "12px",
  },
}));

//  Product image style
const Image = styled("img")(({ theme }) => ({
  width: "90%",
  maxWidth: "420px",
  height: "auto",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    maxWidth: "300px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "220px",
  },
}));

//  Buttons container
const ButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "18px",
  marginTop: "25px",
  width: "100%",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "12px",
  },
}));

//  Yellow-Black themed buttons
const StyledButton = styled(Button)(({ theme }) => ({
  flex: 1,
  height: 50,
  borderRadius: 6,
  color: "#000",
  fontWeight: 700,
  textTransform: "none",
  fontSize: "15px",
  border: "2px solid #000",
  backgroundColor: "#FFE500", // Yellow theme
  "&:hover": {
    backgroundColor: "#FFD700",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "14px",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate(`/cart`);
  };

  const buyNow = () => {
    let response = payUsingPaytm({
      amount: 500,
      email: "2k22.csai.2213254@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };

    post(information);
  };

  return (
    <LeftContainer>
      <ImageBox>
        <Image src={product.detailUrl} alt="product" />
      </ImageBox>

      {/*  Premium Themed Buttons */}
      <ButtonGroup>
        <StyledButton onClick={addItemToCart}>
          <Cart />
          &nbsp; Add to Cart
        </StyledButton>

        <StyledButton onClick={buyNow}>
          <Flash />
          &nbsp; Buy Now
        </StyledButton>
      </ButtonGroup>
    </LeftContainer>
  );
};

export default ActionItem;
