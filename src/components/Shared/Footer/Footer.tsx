import { Box, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box bgcolor="#132361" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Courses
          </Typography>
          <Typography color="#fff">Registration</Typography>
          <Typography color="#fff">Contact Us</Typography>
          <Typography color="#fff">About Us</Typography>
          <Typography color="#fff">Career</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <FacebookIcon sx={{ color: "#ffff" }} fontSize="large" />
          <InstagramIcon sx={{ color: "#ffff" }} fontSize="large" />
          <TwitterIcon sx={{ color: "#ffff" }} fontSize="large" />
          <LinkedInIcon sx={{ color: "#ffff" }} fontSize="large" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
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
          >
            <Box component="span" color="primary.main">
              Hoco
            </Box>{" "}
            Online Education
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
