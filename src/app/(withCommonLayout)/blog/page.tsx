import { Box, Container, Typography } from "@mui/material";
import React from "react";
import coming2 from "../../../../public/assets/coming2.gif";
import Image from "next/image";

const blog = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",

        py: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          fontWeight: "bold",
          color: "#132361",
          marginBottom: "-5px",
        }}
      >
        Developer is Sleeping...!! 😴
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image alt="group" src={coming2} width={500} height={500} />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          fontWeight: "bold",
          color: "#132361",
          marginTop: "-50px",
        }}
      >
        Coming Soon!!
      </Typography>
    </Container>
  );
};

export default blog;
