import React, { useState } from "react";
import { Box, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import UploadSection from "./UploadSection";
import ResultSection from "./ResultSection";
import { analyzeImage } from "../../service/aiService";

const AIPage = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  // ✅ SAME LOGIC (UNCHANGED)
  const handleUpload = async (file, gender) => {
    try {
      const data = await analyzeImage(file, gender);

      setResult({
        ...data,
        uploadedImage: file
      });
    } catch (err) {
      console.error("AI error:", err);
    }
  };

  return (
    <Box
      sx={{
        position: "relative", // 🔥 REQUIRED FOR BACK BUTTON POSITION
        minHeight: "100vh",
        background: "#111",
        pt: { xs: 8, md: 12 },
        pb: 6
      }}
    >
      {/* 🔥 BACK BUTTON (TOP LEFT PERFECT) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 80, md: 100 },
          left: { xs: 20, md: 40 },
          zIndex: 10
        }}
      >
        <Button
          onClick={() => navigate("/")}
          sx={{
            color: "#000",
            background: "#ffd600",
            fontWeight: 700,
            px: 2.5,
            py: 1,
            borderRadius: "6px",
            border: "2px solid #ffd600",
            textTransform: "none",
            "&:hover": {
              background: "#000",
              color: "#ffd600",
            }
          }}
        >
          ← BACK TO HOME
        </Button>
      </Box>

      <Container maxWidth="lg">

        {/* ================= UPLOAD SECTION ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 5
          }}
        >
          <UploadSection onUpload={handleUpload} />
        </Box>

        {/* ================= RESULT SECTION ================= */}
        {result && (
          <Box
            sx={{
              mt: 2,
              width: "100%"
            }}
          >
            <ResultSection data={result} />
          </Box>
        )}

      </Container>
    </Box>
  );
};

export default AIPage;