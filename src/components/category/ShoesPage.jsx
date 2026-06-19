import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Box,
  Grid,
  CircularProgress,
  styled,
  Button,
  Typography,
} from "@mui/material";

import CategoryBanner from "./CategoryBanner";
import FilterSidebar from "./FilterSidebar";
import CategoryCard from "./CategoryCard";

// MAIN CONTAINER (same design)
const Container = styled(Box)(({ theme }) => ({
  padding: "20px 40px",
  background: "#000",
  minHeight: "100vh",
  border: "4px solid #FFD700",
  borderRadius: "12px",

  [theme.breakpoints.down("md")]: {
    padding: "15px 25px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 15px",
  },
}));

// BACK BUTTON (same design)
const BackButton = styled(Button)(({ theme }) => ({
  background: "#faf5f5ff",
  color: "#040301ff",
  fontWeight: 700,
  marginBottom: "20px",
  border: "2px solid #FFD700",

  "&:hover": {
    background: "#222",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "6px 10px",
  },
}));

// FLEX AREA (same)
const FlexArea = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px",
  },
}));

const ShoesPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          "http://localhost:8000/products/category/shoes"
        );

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    };

    getData();
  }, []);

  const handleFilterChange = (filterResult) => {
    setFilteredProducts(filterResult);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <CircularProgress thickness={4} size={70} />
      </Box>
    );
  }

  return (
    <Container>
      {/* BACK BUTTON */}
      <BackButton onClick={() => navigate("/")}>
        ← Back to Home
      </BackButton>

      {/* Shoes Banner */}
      <CategoryBanner categoryName="shoes" />

      <FlexArea>
        {/* SIDEBAR */}
        <FilterSidebar
          products={products}
          onFilterChange={handleFilterChange}
        />

        {/* PRODUCT GRID */}
        <Grid container spacing={3} sx={{ flex: 1 }}>
          {filteredProducts.length === 0 && (
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: 600,
                marginTop: "20px",
                paddingLeft: "10px",
              }}
            >
              No shoes available.
            </Typography>
          )}

          {filteredProducts.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <CategoryCard
                item={{
                  ...item,
                  url:
                    item.url && item.url.includes("http")
                      ? item.url
                      : "https://via.placeholder.com/300x400?text=Image+Not+Found",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </FlexArea>
    </Container>
  );
};

export default ShoesPage;
