import { Box, Container, Stack, Typography, IconButton } from "@mui/material";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#132361", py: { xs: 3, sm: 5 } }}>
      <Container>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography
            color="#fff"
            component={Link}
            href="/consultation"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Courses
          </Typography>
          <Typography
            color="#fff"
            component={Link}
            href="/registration"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Registration
          </Typography>
          <Typography
            color="#fff"
            component={Link}
            href="/contact"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Contact Us
          </Typography>
          <Typography
            color="#fff"
            component={Link}
            href="/about"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            About Us
          </Typography>
          <Typography
            color="#fff"
            component={Link}
            href="/career"
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Career
          </Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <IconButton component={Link} href="https://facebook.com">
            <FacebookIcon sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://instagram.com">
            <InstagramIcon sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://twitter.com">
            <TwitterIcon sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
          <IconButton component={Link} href="https://linkedin.com">
            <LinkedInIcon sx={{ color: "#fff" }} fontSize="large" />
          </IconButton>
        </Stack>
        <Box sx={{ borderBottom: "1px dashed #fff" }}></Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography component="p" color="white">
            &copy;2024 Hoco Education. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
            sx={{
              textAlign: { xs: "center", sm: "left" },
              textDecoration: "none",
            }}
          >
            <Box component="span" color="primary.main">
              Hoco
            </Box>{" "}
            Online Education
          </Typography>
          <Typography
            component={Link}
            href="/privacy-policy"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            component={Link}
            href="/terms-conditions"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
