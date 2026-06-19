import { useEffect } from "react";
import { styled, Box, Grid } from "@mui/material";
import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";

//  Page background (slight yellow tint)
const PageWrapper = styled(Box)(({ theme }) => ({
  background: "#0e0c03ff",   // Light yellow page background
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

//  Main container — White card + Yellow border + Black outline
const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  maxWidth: "1300px",
  margin: "20px auto",
  padding: "40px 60px",
  background: "#FFFFFF",        // White card
  borderRadius: "10px",
  border: "3px solid #FFD700",  // YELLOW BORDER
  outline: "2px solid #000",    // BLACK OUTER BORDER

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "20px 30px",
    alignItems: "center",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "15px 10px",
  },
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingRight: "40px",
  [theme.breakpoints.down("md")]: {
    paddingRight: "0px",
    justifyContent: "center",
    marginBottom: "20px",
  },
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  flex: 1,
  paddingLeft: "0px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    textAlign: "center",
  },
}));

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector(
    (state) => state.getProductDetails
  );

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, id, loading]);

  if (loading) {
    return <PageWrapper>Loading...</PageWrapper>;
  }

  if (!product || Object.keys(product).length === 0) {
    return <PageWrapper>No product found</PageWrapper>;
  }

  return (
    <PageWrapper>
      <Container container>
        {/* Left: Product Image + Buttons */}
        <LeftGrid item lg={5} md={5} sm={12} xs={12}>
          <ActionItem product={product} />
        </LeftGrid>

        {/* Right: Product Details */}
        <RightGrid item lg={7} md={7} sm={12} xs={12}>
          <ProductDetail product={product} />
        </RightGrid>
      </Container>
    </PageWrapper>
  );
};

export default DetailView;
