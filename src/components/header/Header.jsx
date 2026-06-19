import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

// New Yellow + Black Header
const StyledHeader = styled(AppBar)`
  background: #ffd400;      /* Bright Yellow */
  height: 70px;
  box-shadow: none;
  position: sticky;
  top: 0;
  z-index: 1200;

  display: flex;
  justify-content: center;
`;

// Main Flex Container
const Component = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  color: #000;              /* Black Text */
  padding: 0 20px;
`;

// Left Logo
const LeftBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Search Box
const MiddleBox = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: "0 25px",
  [theme.breakpoints.down("sm")]: {
    margin: "0 10px",
  },
}));

// Right Buttons
const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  color: "#000",                  /* Black Menu Icon */
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

// Drawer (Mobile Menu)
const DrawerContent = styled(Box)`
  width: 260px;
  padding: 20px;
  background-color: #fff8d1;    /* Soft Yellowish White */
  height: 100%;
`;

const Header = () => {
  const logoURL1 =
    "https://baseec-img-mng.akamaized.net/images/user/logo/3bf1e9ae3f1d7af3eb62521d2b8695dd.png?imformat=generic&q=90&im=Resize,width=1200,height=1200,aspect=fit,type=normal;Crop,width=1200,height=1200,gravity=Center,allowExpansion";

  const logoURL2 =
    "https://th.bing.com/th/id/OIP.3XXjVFc3yTn0wL9tdMbT0gHaHv?rs=1&pid=ImgDetMain";

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const list = () => (
    <DrawerContent>
      <Typography
        variant="h6"
        sx={{ color: "#000", fontWeight: 700, mb: 1, textAlign: "center" }}
      >
        MENU
      </Typography>
      <Divider sx={{ background: "#000" }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <CustomButtons isMobile={true} />
          </ListItemButton>
        </ListItem>
      </List>
    </DrawerContent>
  );

  return (
    <StyledHeader position="static">
      <Toolbar style={{ minHeight: 70, padding: 0, width: "100%" }}>
        
        {/* Mobile Menu Icon */}
        <MenuButton onClick={handleOpen}>
          <MenuIcon sx={{ fontSize: 28 }} />
        </MenuButton>

        {/* Drawer (Mobile Menu) */}
        <Drawer
          open={open}
          onClose={handleClose}
          ModalProps={{ keepMounted: true }}
        >
          <Box onClick={(e) => e.stopPropagation()}>{list()}</Box>
        </Drawer>

        {/* Main Header Layout */}
        <Component to="/">
          {/* Left Logo */}
          <LeftBox>
            <img
              src={logoURL2}
              alt="icon logo"
              style={{ width: 42, height: 42 }}
            />
            <img
              src={logoURL1}
              alt="main logo"
              style={{ width: 180, objectFit: "contain" }}
            />
          </LeftBox>

          {/* Search */}
          <MiddleBox>
            <Search style={{ width: "100%", height: "40px" }} />
          </MiddleBox>

          {/* Desktop Buttons */}
          <RightBox>
            <CustomButtons />
          </RightBox>
        </Component>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
