import React from "react";
import notFound from "../../public/assets/404.gif";
import notFound1 from "../../public/assets/not-found.gif";
import notFound2 from "../../public/assets/not-found2.gif";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",

        py: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          color: "#132361",
        }}
      >
        Oops! Page Not Found 😢
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image alt="404 error" src={notFound1} width={700} height={700} />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          color: "#132361",
          mt: 2,
        }}
      >
        Sorry, we could not find the page you were looking for.
      </Typography>
    </Container>
  );
};

export default NotFoundPage;
