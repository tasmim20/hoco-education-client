// import { Box, Container, Stack, Typography, IconButton } from "@mui/material";

// import Link from "next/link";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: "#132361", py: { xs: 3, sm: 5 } }}>
//       <Container>
//         <Stack
//           direction={{ xs: "column", sm: "row" }}
//           gap={4}
//           justifyContent="center"
//           alignItems="center"
//           sx={{ textAlign: { xs: "center", sm: "left" } }}
//         >
//           <Typography
//             color="#fff"
//             component={Link}
//             href="/consultation"
//             sx={{
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Courses
//           </Typography>
//           <Typography
//             color="#fff"
//             component={Link}
//             href="/registration"
//             sx={{
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Registration
//           </Typography>
//           <Typography
//             color="#fff"
//             component={Link}
//             href="/contact"
//             sx={{
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Contact Us
//           </Typography>
//           <Typography
//             color="#fff"
//             component={Link}
//             href="/about"
//             sx={{
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             About Us
//           </Typography>
//           <Typography
//             color="#fff"
//             component={Link}
//             href="/career"
//             sx={{
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Career
//           </Typography>
//         </Stack>

//         <Stack direction="row" gap={2} justifyContent="center" py={3}>
//           <IconButton component={Link} href="https://facebook.com">
//             <FacebookIcon sx={{ color: "#fff" }} fontSize="large" />
//           </IconButton>
//           <IconButton component={Link} href="https://instagram.com">
//             <InstagramIcon sx={{ color: "#fff" }} fontSize="large" />
//           </IconButton>
//           <IconButton component={Link} href="https://twitter.com">
//             <TwitterIcon sx={{ color: "#fff" }} fontSize="large" />
//           </IconButton>
//           <IconButton component={Link} href="https://linkedin.com">
//             <LinkedInIcon sx={{ color: "#fff" }} fontSize="large" />
//           </IconButton>
//         </Stack>
//         <Box sx={{ borderBottom: "1px dashed #fff" }}></Box>
//         <Stack
//           direction={{ xs: "column", sm: "row" }}
//           gap={2}
//           justifyContent="space-between"
//           alignItems="center"
//           py={3}
//           sx={{ textAlign: { xs: "center", sm: "left" } }}
//         >
//           <Typography component="p" color="white">
//             &copy;2024 Hoco Education. All Rights Reserved.
//           </Typography>
//           <Typography
//             variant="h4"
//             component={Link}
//             href="/"
//             fontWeight={600}
//             color="white"
//             sx={{
//               textAlign: { xs: "center", sm: "left" },
//               textDecoration: "none",
//             }}
//           >
//             <Box component="span" color="primary.main">
//               Hoco
//             </Box>{" "}
//             Online Education
//           </Typography>
//           <Typography
//             component={Link}
//             href="/privacy-policy"
//             sx={{
//               color: "white",
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Privacy Policy
//           </Typography>
//           <Typography
//             component={Link}
//             href="/terms-conditions"
//             sx={{
//               color: "white",
//               textDecoration: "none",
//               "&:hover": { textDecoration: "underline" },
//             }}
//           >
//             Terms & Conditions
//           </Typography>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Part from "../Navbar/Part";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#132361",
        color: "lightGray",
        py: { xs: 3, sm: 5 },
      }}
    >
      <Container sx={{ color: "lightgray" }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              <Box sx={{ direction: "flex" }}>
                <Part />
                <Typography variant="h6" noWrap component="span">
                  HOCO
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body2" mb={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit varius
              congue Morbi
            </Typography>
            <Typography variant="body2" fontWeight="bold" mb={1}>
              Follow Us On:
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                component={Link}
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon sx={{ color: "lightGray" }} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
              >
                <TwitterIcon sx={{ color: "lightGray" }} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon sx={{ color: "lightGray" }} />
              </IconButton>
              <IconButton
                component={Link}
                href="https://youtube.com"
                target="_blank"
                rel="noopener"
              >
                <YouTubeIcon sx={{ color: "lightGray" }} />
              </IconButton>
            </Stack>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Useful Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link href="/about" style={{ textDecoration: "none" }}>
                About Us
              </Link>
              <Link href="/courses" style={{ textDecoration: "none" }}>
                Courses
              </Link>
              <Link href="/categories" style={{ textDecoration: "none" }}>
                Categories
              </Link>
              <Link href="/pricing" style={{ textDecoration: "none" }}>
                Pricing
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </Stack>
          </Grid>

          {/* Resources */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link href="/community" style={{ textDecoration: "none" }}>
                Community
              </Link>
              <Link href="/support" style={{ textDecoration: "none" }}>
                Support
              </Link>
              <Link href="/video-guides" style={{ textDecoration: "none" }}>
                Video Guides
              </Link>
              <Link href="/terms" style={{ textDecoration: "none" }}>
                Terms and Conditions
              </Link>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                Blog
              </Link>
              <Link href="/security" style={{ textDecoration: "none" }}>
                Security
              </Link>
            </Stack>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">
                  15 Rose Street, Harvey, IL 60426 USA
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">708-210-9101</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon fontSize="small" />
                <Typography variant="body2">
                  hocoSchooling@education.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box mt={4} textAlign="center" borderTop="1px solid #fff" pt={2}>
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            Copyright © 2024 HocoEdu. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
