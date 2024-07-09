"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  Modal,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import shape1 from "../../../../public/assets/shape-1.webp";
import shape2 from "../../../../public/assets/shape-2.webp";
import shape3 from "../../../../public/assets/shape-3.webp";
import shape4 from "../../../../public/assets/shape-4.webp";
import hand from "../../../../public/assets/instructor-thankyou.png";

const HeroSection = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to right, #eff9ff, #f9f4fd, #fef1f5, #fef0ef)",
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    height: "200px",
  },
}));

const ShapeImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  width: "100px",
  height: "100px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const CareerPage = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = () => {
    setModalOpen(true);

    setTimeout(() => {
      setModalOpen(false);
    }, 10000);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <HeroSection>
        <ShapeImage
          src={shape1}
          alt="shape1"
          style={{ top: "40px", left: "60px", transform: "rotate(20deg)" }}
        />
        <ShapeImage
          src={shape2}
          alt="shape2"
          style={{ bottom: "10px", left: "80px", transform: "rotate(-30deg)" }}
        />
        <ShapeImage
          src={shape3}
          alt="shape3"
          style={{ top: "20px", right: "60px", transform: "rotate(30deg)" }}
        />
        <ShapeImage
          src={shape4}
          alt="shape4"
          style={{
            bottom: "40px",
            right: "50px",
            transform: "rotate(0deg)",
          }}
        />
        <Typography
          sx={{
            color: "#132361",
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
          }}
          variant="h2"
          component="h1"
        >
          Join Our Team
        </Typography>
      </HeroSection>
      <Container sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              color: "#132361",
              fontWeight: "600",
              fontSize: { xs: "2rem", md: "2rem" },
            }}
            variant="h4"
            gutterBottom
          >
            Careers at Our Education Platform
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "gray",
            }}
          >
            We are always looking for passionate and talented individuals to
            join our team. Explore our current job openings and apply today!
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#132361",
              fontWeight: "500",
              fontSize: { xs: "1.5rem", md: "1.5rem" },
            }}
            variant="h5"
            gutterBottom
          >
            Job Opportunities
          </Typography>
          <Box sx={{ p: 4, mt: 2, backgroundColor: "#f9f9fc" }}>
            <Typography
              sx={{
                color: "#132361",
                fontWeight: "500",
                fontSize: { xs: "1.2rem", md: "1.2rem" },
              }}
              variant="h6"
              gutterBottom
            >
              Current Openings
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
              variant="body1"
              gutterBottom
            >
              - Instructor for A Level and IGCSE - 2
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
              variant="body1"
              gutterBottom
            >
              - Full Stack Developer for Website Management - 1
            </Typography>
            <Typography
              sx={{
                color: "gray",
              }}
              variant="body1"
              gutterBottom
            >
              - Content Developer for Educational Materials - 2
            </Typography>
            <Button variant="contained" sx={{ mt: 2, bgcolor: "#132361" }}>
              See All Openings
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 6 }}>
          <Typography
            sx={{
              color: "#132361",
              fontWeight: "500",
              fontSize: { xs: "1.5rem", md: "1.5rem" },
            }}
            variant="h5"
            gutterBottom
          >
            Apply for Instructor Position
          </Typography>
          <Box sx={{ p: 4, mt: 2, backgroundColor: "#f9f9fc" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                <Avatar sx={{ width: 100, height: 100, mb: 2 }}>A</Avatar>
                <Button
                  variant="contained"
                  sx={{ mt: 2, bgcolor: "#132361", color: "gray" }}
                  component="label"
                  startIcon={<UploadFileIcon />}
                >
                  Upload Photo
                  <input type="file" hidden />
                </Button>
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Cover Letter"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />
                <TextField
                  required
                  fullWidth
                  label="CV"
                  variant="outlined"
                  type="file"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ mb: 3 }}
                />
                <Button
                  sx={{ mt: 2, bgcolor: "#132361" }}
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Submit Application
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              my: 5,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image width={200} height={200} alt="hand" src={hand} />
          </Box>
          <Typography
            sx={{
              color: "#132361",
              fontWeight: "700",
              fontSize: { xs: "1.2rem", md: "1.2rem" },
            }}
            id="modal-title"
            variant="h6"
            component="h2"
          >
            Instructor Application Received
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Thank you for registering as an instructor!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            We received your application, and we will review it soon inform you
            via email. Please hang tight! 🤝
          </Typography>

          <Box
            sx={{
              my: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ bgcolor: "#132361", color: "red" }}
              onClick={handleModalClose}
            >
              Go to Dashboard
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CareerPage;
