import {
  Card,
  CardContent,
  Typography,
  Chip,
  Grid,
  Button,
  Box
} from "@mui/material";
import { useState, useEffect } from "react";

const ResultSection = ({ data }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userImage, setUserImage] = useState("");

  const IMAGE_WIDTH = 320;
  const IMAGE_HEIGHT = 420;

  // ✅ IMAGE FIX (UNCHANGED LOGIC)
  useEffect(() => {
    if (data?.uploadedImage instanceof File) {
      const url = URL.createObjectURL(data.uploadedImage);
      setUserImage(url);
    } else if (typeof data?.uploadedImage === "string") {
      setUserImage(data.uploadedImage);
    }
  }, [data]);

  return (
    <Box sx={{ width: "100%", px: { xs: 2, md: 4 } }}>

      {/* ================= USER IMAGE ================= */}
      {userImage && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography sx={{ color: "#ffd600", mb: 1, fontWeight: 600 }}>
            Your Image
          </Typography>

          <Box
            sx={{
              display: "inline-block",
              border: "2px solid #ffd600",
              borderRadius: "12px",
              p: 1,
              boxShadow: "0 0 15px rgba(255,214,0,0.4)"
            }}
          >
            <img
              src={userImage}
              alt="user"
              style={{
                width: "200px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
          </Box>
        </Box>
      )}

      {/* ================= AI ANALYSIS ================= */}
      <Card
        sx={{
          mt: 4,
          background: "#111",
          color: "#fff",
          borderRadius: 3,
          border: "1px solid rgba(255,214,0,0.2)"
        }}
      >
        <CardContent>
          <Typography sx={{ color: "#ffd600", fontWeight: 700, mb: 2 }}>
            AI Analysis
          </Typography>

          {/* 🔥 CLEAN TAGS */}
          <Box sx={{ mb: 2 }}>
            <Chip
              label={`Skin: ${data?.skinTone}`}
              sx={{ mr: 1, background: "#ffd600", color: "#000" }}
            />
            <Chip
              label={`Body: ${data?.bodyType}`}
              sx={{ background: "#ffd600", color: "#000" }}
            />
          </Box>

          {/* 🔥 CATEGORY CHIPS */}
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {data?.recommendations?.map((item, i) => (
              <Chip
                key={i}
                label={item.category}
                sx={{
                  m: 0.5,
                  background: "#222",
                  color: "#ffd600",
                  border: "1px solid #ffd600"
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>

      {/* ================= TRY ON ================= */}
      {selectedProduct && userImage && data?.pose && (
        <Box
          sx={{
            mt: 5,
            textAlign: "center",
            background: "#000",
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            border: "2px solid #ffd600",
            boxShadow: "0 0 25px rgba(255,214,0,0.3)"
          }}
        >
          <Typography sx={{ color: "#ffd600", mb: 2, fontWeight: 700 }}>
            AI Virtual Try-On
          </Typography>

          <Box sx={{ position: "relative", display: "inline-block" }}>
            <img
              src={userImage}
              alt="user"
              style={{
                width: `${IMAGE_WIDTH}px`,
                height: `${IMAGE_HEIGHT}px`,
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            {/* 🔥 YOUR EXISTING LOGIC (UNCHANGED) */}
            {(() => {
              const left = data.pose.left_shoulder;
              const right = data.pose.right_shoulder;

              if (!left || !right) return null;

              const centerX = (left.x + right.x) / 2;
              const centerY = (left.y + right.y) / 2;
              const shoulderWidth = Math.abs(right.x - left.x);

              return (
                <img
                  src={selectedProduct.url}
                  alt="overlay"
                  style={{
                    position: "absolute",
                    left: `${centerX * IMAGE_WIDTH}px`,
                    top: `${centerY * IMAGE_HEIGHT + 50}px`,
                    width: `${shoulderWidth * IMAGE_WIDTH * 2.3}px`,
                    transform: "translate(-50%, -25%)",
                    opacity: 0.92,
                    mixBlendMode: "multiply",
                    filter: "brightness(0.95) contrast(1.1)",
                    pointerEvents: "none"
                  }}
                />
              );
            })()}
          </Box>
        </Box>
      )}

      {/* ================= PRODUCTS ================= */}
      {data?.products?.length > 0 && (
        <>
          <Typography
            variant="h5"
            sx={{
              mt: 5,
              mb: 2,
              color: "#ffd600",
              fontWeight: 700
            }}
          >
            Recommended Outfit
          </Typography>

          <Grid container spacing={2}>
            {data.products.map((product) => (
              <Grid item xs={6} sm={4} md={3} lg={2.4} key={product._id}>
                <Card
                  sx={{
                    background: "#111",
                    color: "#fff",
                    borderRadius: 2,
                    overflow: "hidden",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 0 15px #ffd600"
                    }
                  }}
                >
                  <img
                    src={product.url}
                    alt=""
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover"
                    }}
                  />

                  <CardContent sx={{ p: 1.5 }}>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      {product.title?.shortTitle}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#ffd600",
                        fontWeight: 700,
                        mb: 1
                      }}
                    >
                      ₹{product.price?.cost}
                    </Typography>

                    <Button
                      fullWidth
                      size="small"
                      sx={{
                        background: "#ffd600",
                        color: "#000",
                        fontWeight: 700,
                        "&:hover": {
                          background: "#000",
                          color: "#ffd600",
                          border: "1px solid #ffd600"
                        }
                      }}
                      onClick={() => setSelectedProduct(product)}
                    >
                      TRY ON
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ResultSection;