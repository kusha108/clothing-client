import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";
import { Link } from "react-router-dom";

//  Outer Wrapper – Black premium background
const Wrapper = styled(Box)(({ theme }) => ({
  background: "#000000",        // PURE BLACK
  padding: "18px 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxShadow: "0px 4px 18px rgba(255, 215, 0, 0.15)", // Glow of yellow
}));

// Scrollable row
const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  overflowX: "auto",
  paddingBottom: "5px",

  "&::-webkit-scrollbar": { display: "none" },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

//  Single category card
const Container = styled(Box)(({ theme }) => ({
  padding: "10px 14px",
  textAlign: "center",
  cursor: "pointer",
  borderRadius: "10px",
  transition: "all 0.25s ease",

  "&:hover": {
    background: "rgba(255, 215, 0, 0.12)", // LIGHT yellow highlight
    transform: "translateY(-3px)",
  },
}));

//  Category Label
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 700;
  margin-top: 6px;
  letter-spacing: 0.5px;
  color: #ffd700;      /* GOLD YELLOW */
  text-transform: uppercase;
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Component>
        {navData.map((data, index) => (
          <Link
            key={index}
            to={`/category/${data.category}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Container>
              <img
                src={data.url}
                alt="nav"
                style={{
                  width: 75,
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(255, 215, 0, 0.25)", // yellow glow
                }}
              />
              <Text>{data.text}</Text>
            </Container>
          </Link>
        ))}
      </Component>
    </Wrapper>
  );
};

export default NavBar;
