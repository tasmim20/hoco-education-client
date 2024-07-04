import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";

import partner1 from "../../../../../public/assets/partner-1.webp";
import partner2 from "../../../../../public/assets/partner-2.webp";
import partner3 from "../../../../../public/assets/partner-3.webp";
import partner4 from "../../../../../public/assets/partner-4.webp";
import partner5 from "../../../../../public/assets/partner-5.webp";
import partner6 from "../../../../../public/assets/partner-6.webp";

const Partner = () => {
  return (
    <Stack sx={{ backgroundColor: "#f9f9fc" }}>
      <Grid container spacing={1} sx={{ my: "200px" }}>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner1}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner2}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner3}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner4}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner5}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={4} md={2}>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: "160px",
              mx: "auto",
            }}
          >
            <Image
              alt="group"
              src={partner6}
              width={170}
              height={170}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Partner;
