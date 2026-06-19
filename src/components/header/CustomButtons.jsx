import React, { useState, useContext } from "react";
import { Badge, Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../../context/DataProvider";
import { styled } from "@mui/system";
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Desktop Wrapper
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  margin: "0 3% 0 auto",
  gap: "24px",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//  Yellow + Black theme desktop buttons
const StyledButton = styled(Button)`
  background-color: #ffd600;
  color: #000;
  text-transform: none;
  padding: 6px 38px;
  border-radius: 6px;
  font-weight: 700;
  border: 2px solid #000;
  box-shadow: none;
  transition: 0.25s ease;

  &:hover {
    background-color: #000;
    color: #ffd600;
    border: 2px solid #ffd600;
  }
`;

const CustomButtons = ({ isMobile }) => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const cartDetails = useSelector((state) => state.cart);
  const cartCount = cartDetails?.cartItems?.length || 0;

  const openDialog = () => setOpen(true);

  // --------------------------------------------------
  //  MOBILE VIEW (Yellow + Black)
  // --------------------------------------------------
  if (isMobile) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
        }}
      >
        {/* LOGIN / PROFILE */}
        {account ? (
          <Profile account={account} setAccount={setAccount} />
        ) : (
          <Button
            variant="contained"
            onClick={(e) => {
              e.stopPropagation();
              openDialog();
            }}
            sx={{
              backgroundColor: "#ffd600",
              color: "#000",
              fontWeight: 700,
              textTransform: "none",
              borderRadius: "6px",
              height: "45px",
              border: "2px solid #000",
              "&:hover": {
                backgroundColor: "#000",
                color: "#ffd600",
              },
            }}
          >
            Login
          </Button>
        )}

        {/* Become a Member */}
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "#000",
            color: "#000",
            fontWeight: 700,
            borderRadius: "6px",
            height: "45px",
            background: "#fff",
            "&:hover": {
              backgroundColor: "#000",
              color: "#ffd600",
              borderColor: "#ffd600",
            },
          }}
        >
          Become a Member
        </Button>

        {/* Cart */}
        <Button
          variant="outlined"
          fullWidth
          startIcon={<ShoppingCartIcon sx={{ color: "#000" }} />}
          sx={{
            borderColor: "#000",
            color: "#000",
            fontWeight: 700,
            borderRadius: "6px",
            height: "45px",
            background: "#fff",
            "&:hover": {
              backgroundColor: "#000",
              color: "#ffd600",
              borderColor: "#ffd600",
            },
          }}
        >
          Cart ({cartCount})
        </Button>

        <LoginDialog open={open} setOpen={setOpen} />
      </Box>
    );
  }

  // --------------------------------------------------
  //  DESKTOP VIEW (Yellow + Black)
  // --------------------------------------------------
  return (
    <Wrapper>
      {/* LOGIN / PROFILE */}
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <StyledButton variant="contained" onClick={openDialog}>
          Login
        </StyledButton>
      )}

      {/* Become a Member */}
      <StyledButton variant="outlined" component={Link} to="/ai">
        FitSense AI
      </StyledButton>

      {/* Cart Button */}
      <Box sx={{ position: "relative" }}>
        <StyledButton
          variant="outlined"
          sx={{
            paddingLeft: "14px",
            paddingRight: "14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            background: "#ffd600",
            color: "#000",
            border: "2px solid #000",
            "&:hover": {
              backgroundColor: "#000",
              color: "#ffd600",
              borderColor: "#ffd600",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Badge
              badgeContent={cartCount}
              color="secondary"
              sx={{
                "& .MuiBadge-badge": {
                  background: "#ff0000",
                  color: "#fff",
                  fontSize: "10px",
                  height: "16px",
                  minWidth: "16px",
                  top: "-4px",
                  right: "-4px",
                },
              }}
            >
              <ShoppingCartIcon fontSize="small" sx={{ color: "inherit" }} />
            </Badge>
          </Box>
          Cart
        </StyledButton>
      </Box>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
