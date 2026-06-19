import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Grid } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productActions";

const SearchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const query = new URLSearchParams(location.search).get("q") || "";

  const { products } = useSelector((state) => state.getProducts);

  // 🔥 IMPORTANT: load products if not already loaded
  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  // 🔥 SAFE NORMALIZE
  const normalize = (text) => {
  if (text.includes("shirt") || text.includes("tshirt") || text.includes("t-shirt")) return "t-shirts";
  if (text.includes("pant") || text.includes("trouser")) return "pants";
  if (text.includes("shoe") || text.includes("sneaker")) return "shoes";
  if (text.includes("cap") || text.includes("hat")) return "caps";
  return text;
};

  const searchText = normalize(query.toLowerCase());

  // 🔥 SAFE FILTER
  const filteredProducts =
    products?.filter((product) => {
      const title = product.title?.longTitle?.toLowerCase() || "";
      const shortTitle = product.title?.shortTitle?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";

      return (
        title.includes(searchText) ||
        shortTitle.includes(searchText) ||
        category.includes(searchText)
      );
    }) || [];

  return (
    <Box sx={{ padding: "30px", background: "#111", minHeight: "100vh" }}>
      
      <Typography
        variant="h5"
        sx={{ color: "#ffd600", mb: 3, fontWeight: 700 }}
      >
        Search Results for "{query}"
      </Typography>

      {/* 🔥 LOADING FIX */}
      {!products || products.length === 0 ? (
        <Typography sx={{ color: "#fff" }}>Loading...</Typography>
      ) : filteredProducts.length === 0 ? (
        <Typography sx={{ color: "#fff" }}>
          No products found
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={6} sm={4} md={3} key={product.id}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    background: "#000",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #222",
                    textAlign: "center",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0 0 10px #ffd600",
                    },
                  }}
                >
                  <img
                    src={product.url}
                    alt=""
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />

                  <Typography sx={{ color: "#fff", mt: 1 }}>
                    {product.title?.shortTitle}
                  </Typography>

                  <Typography sx={{ color: "#ffd600", fontWeight: 700 }}>
                    ₹{product.price?.cost}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default SearchPage;