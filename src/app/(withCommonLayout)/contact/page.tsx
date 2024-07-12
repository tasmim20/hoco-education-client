"use client";
import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Modal,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import shape1 from "../../../../public/assets/shape-1.webp";
import shape2 from "../../../../public/assets/shape-2.webp";
import shape3 from "../../../../public/assets/shape-3.webp";
import shape4 from "../../../../public/assets/shape-4.webp";
import emailIcon from "../../../../public/assets/email-1.svg";
import phoneIcon from "../../../../public/assets/phone-call-1.svg";
import locationIcon from "../../../../public/assets/your-location.svg";
import Link from "next/link";

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

const ContactForm = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(2),
  backgroundColor: "#edf6fd",
  borderRadius: theme.shape.borderRadius,
}));

const ContactDetails = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: theme.spacing(10),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const DetailItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(3),
  },
}));

const ContactPage = () => {
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
          Contact Us
        </Typography>
      </HeroSection>
      <Container sx={{ mt: 4, mb: 4 }}>
        <ContactDetails>
          <DetailItem>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image src={emailIcon} alt="Email" width={100} height={100} />
            </Box>
            <Typography
              variant="h6"
              sx={{ color: "#132361", fontWeight: "600" }}
            >
              Our Mail
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              hello@hoco.com
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              info@hoco.com
            </Typography>
          </DetailItem>
          <DetailItem>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image src={phoneIcon} alt="Phone" width={100} height={100} />
            </Box>
            <Typography
              variant="h6"
              sx={{ color: "#132361", fontWeight: "600" }}
            >
              Telephone
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              +458 123 657 2324
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              +458 123 657 2324
            </Typography>
          </DetailItem>
          <DetailItem>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src={locationIcon}
                alt="Location"
                width={100}
                height={100}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{ color: "#132361", fontWeight: "600" }}
            >
              Location
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              Address: +7011 Vermont Ave,
            </Typography>
            <Typography variant="body1" sx={{ color: "gray" }}>
              Los Angeles, CA 90044
            </Typography>
          </DetailItem>
        </ContactDetails>
        <ContactForm>
          <Typography
            sx={{
              color: "#132361",
              fontWeight: "600",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              textAlign: "center",
              my: 5,
            }}
            variant="h5"
            gutterBottom
          >
            Send Us A Message
          </Typography>
          <Grid sx={{ py: "10px", px: "50px" }} container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 3, bgcolor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Email"
                variant="outlined"
                sx={{ mb: 3, bgcolor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={{ mb: 3, bgcolor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                label="Subject"
                variant="outlined"
                sx={{ mb: 3, bgcolor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 3, bgcolor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="I accept the terms and conditions"
                sx={{ mb: 3 }}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button
                sx={{ bgcolor: "#132361", py: 2 }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </ContactForm>
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
            Message Received
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Thank you for getting in touch with us!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            We received your message and will get back to you shortly.
          </Typography>

          <Box
            sx={{
              my: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <Button
                variant="contained"
                color="primary"
                sx={{ bgcolor: "#132361", color: "red" }}
                onClick={handleModalClose}
              >
                Go to Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactPage;
