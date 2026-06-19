
import { useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const UploadSection = ({ onUpload }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [cameraOpen, setCameraOpen] = useState(false);

  // NEW: Gender state
  const [gender, setGender] = useState("male");

  // ------------------ FILE UPLOAD ------------------
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) onUpload(file, gender); // PASS GENDER
  };

  // ------------------ OPEN CAMERA ------------------
  const openCamera = async () => {
    try {
      setCameraOpen(true);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
      }, 200);
    } catch (err) {
      console.error("Camera error:", err);
    }
  };

  // ------------------ CAPTURE IMAGE ------------------
  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], "capture.jpg", {
        type: "image/jpeg",
      });

      console.log("📸 Image Captured");

      onUpload(file, gender); //  PASS GENDER HERE ALSO
      closeCamera();
    }, "image/jpeg");
  };

  // ------------------ CLOSE CAMERA ------------------
  const closeCamera = () => {
    const stream = videoRef.current?.srcObject;
    const tracks = stream?.getTracks();

    tracks?.forEach((track) => track.stop());
    setCameraOpen(false);
  };

  return (
    <Box
      sx={{
        background: "#000",
        padding: "30px",
        borderRadius: "12px",
        textAlign: "center",
        width: "320px",
        border: "2px solid #ffd600",
        boxShadow: "0 0 20px rgba(255,214,0,0.3)",
      }}
    >
      <Typography
        sx={{
          color: "#ffd600",
          fontWeight: "700",
          mb: 2,
        }}
      >
        AI Outfit Recommendation
      </Typography>

      {/* NEW: GENDER SELECTOR */}
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "8px",
          borderRadius: "6px",
          width: "100%",
          fontWeight: "600"
        }}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      {/* Upload Button */}
      <Button
        variant="contained"
        component="label"
        sx={{
          background: "#ffd600",
          color: "#000",
          fontWeight: 700,
          mb: 2,
          "&:hover": {
            background: "#000",
            color: "#ffd600",
            border: "2px solid #ffd600",
          },
        }}
      >
        Upload Image
        <input hidden type="file" accept="image/*" onChange={handleChange} />
      </Button>

      {/* Camera Button */}
      {!cameraOpen && (
        <Button
          variant="outlined"
          fullWidth
          onClick={openCamera}
          sx={{
            borderColor: "#ffd600",
            color: "#ffd600",
            fontWeight: 700,
            "&:hover": {
              background: "#ffd600",
              color: "#000",
            },
          }}
        >
          Open Camera
        </Button>
      )}

      {/* Camera View */}
      {cameraOpen && (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: "100%",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          />

          <canvas ref={canvasRef} style={{ display: "none" }} />

          <Button
            fullWidth
            onClick={captureImage}
            sx={{
              mt: 2,
              background: "#ffd600",
              color: "#000",
              fontWeight: 700,
            }}
          >
            Capture
          </Button>

          <Button
            fullWidth
            onClick={closeCamera}
            sx={{
              mt: 1,
              color: "#fff",
            }}
          >
            Close Camera
          </Button>
        </>
      )}
    </Box>
  );
};

export default UploadSection;