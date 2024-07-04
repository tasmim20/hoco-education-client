"use client";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import boy1 from "../../../../public/assets/about-1.webp";
import boy2 from "../../../../public/assets/about-2.webp";
import phone from "../../../../public/assets/download.svg";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@emotion/react";

const HomeSchooling = () => {
  // Define the rotation animation
  //   const rotate = keyframes`
  // 0% {
  //   transform: rotate(0deg);
  // }
  // 100% {
  //   transform: rotate(360deg);
  // }
  // `;
  return (
    <Stack
      sx={{
        mx: { xs: 8, md: 20 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 8, md: 20 },
      }}
    >
      <Grid container spacing={1}>
        <Grid xs={12} sm={12} md={9}>
          <Box>
            {" "}
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                fontWeight: { xs: 800, md: 800 },
                lineHeight: { xs: "1.2", md: "1.2" },
                variant: { xs: "h3", md: "h1" },
              }}
              component="h1"
            >
              Start Your Child’s
              <span style={{ color: "#ffC53A" }}> Homeschooling</span> Online
              With Hoco
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: "20px" }}>
            <Grid xs={12} sm={6} md={4} sx={{ mt: { xs: 2, md: 0 } }}>
              {/* Add content for the 4-column part here */}
              <Box>
                <Image alt="group" src={boy1} layout="responsive" />
              </Box>
            </Grid>
            <Grid xs={12} sm={6} md={8}>
              {/* Add content for the 8-column part here */}
              <Box sx={{ marginLeft: { xs: 0, md: "20px" } }}>
                <Typography
                  color="#646464"
                  sx={{
                    fontSize: "1.05rem",
                  }}
                  variant="body1"
                  component="p"
                >
                  Founded in 2004, Hoco is the world’s most experienced Online
                  home study & homeschooling online provider.
                </Typography>
                <Typography
                  color="#646464"
                  sx={{
                    mt: 2,
                    fontSize: "1.05rem",
                  }}
                  variant="body1"
                  component="p"
                >
                  We’re proud to say that one of our students was XYZ, who
                  studied for his London University law degree with Hoco – an
                  inspiration to All home learners everywhere! Let’s join Hoco
                  and start learning!
                </Typography>
                <Button
                  sx={{
                    my: 3,
                    py: 1.5,
                    backgroundColor: "#CDD4FB",
                    color: "#132361",
                    fontWeight: 600,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#132361",
                      color: "#fff",
                    },
                  }}
                >
                  Know More About Us <ArrowRightAltIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md={4} sx={{ marginRight: "-500px" }}>
          {" "}
          <Box sx={{ marginLeft: { xs: 0, md: "80px" }, mt: { xs: 4, md: 0 } }}>
            <Image alt="group" src={boy2} layout="responsive" />
            <Card
              variant="outlined"
              sx={{ p: "14px", backgroundColor: "#03008d", mt: 3 }}
            >
              <Stack spacing={2} direction="row" alignItems="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    py: "15px",
                  }}
                >
                  <Box
                    sx={{
                      marginRight: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 50,
                      height: 50,
                      marginTop: "10px",
                    }}
                  >
                    <Image alt="group" src={phone} layout="responsive" />
                  </Box>

                  <Box sx={{ color: "#fff" }}>
                    <Typography component="p" sx={{ fontWeight: "600" }}>
                      Call Us For Enquiry
                    </Typography>
                    <Typography component="p" sx={{ fontWeight: "600" }}>
                      ++9903215369
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Card>
            {/* <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 150,
                height: 150,
                borderRadius: "50%",
                border: "2px solid #FFC53A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                animation: `${rotate} 20s linear infinite`,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    width: "200%",
                    textAlign: "center",
                    transformOrigin: "center center",
                    animation: `${rotate} 20s linear infinite reverse`,
                    color: "#FFC53A",
                    fontWeight: 600,
                  }}
                >
                  The best online learning platform awards
                </Typography>
              </Box>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default HomeSchooling;

// "use client";
// import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
// import boy1 from "../../../../public/assets/about-1.webp";
// import boy2 from "../../../../public/assets/about-2.webp";
// import phone from "../../../../public/assets/download.svg";
// import Image from "next/image";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import { keyframes } from "@emotion/react";

// const HomeSchooling = () => {
//   return (
//     <Stack
//       sx={{
//         mx: { xs: 2, sm: 8, md: 20 },
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         my: { xs: 4, md: 8 },
//       }}
//     >
//       <Grid container spacing={4}>
//         <Grid item xs={12} md={8}>
//           <Typography
//             color="#132361"
//             sx={{
//               fontSize: { xs: "2rem", md: "4rem" },
//               fontWeight: 800,
//               lineHeight: 1.2,
//             }}
//             component="h1"
//           >
//             Start Your Child’s
//             <span style={{ color: "#ffC53A" }}> Homeschooling</span> Online With
//             Hoco
//           </Typography>
//           <Grid container spacing={2} sx={{ mt: "20px" }}>
//             <Grid item xs={12} sm={6} md={4} sx={{ mt: { xs: 2, md: 0 } }}>
//               <Box>
//                 <Image alt="group" src={boy1} layout="responsive" />
//               </Box>
//             </Grid>
//             <Grid item xs={12} sm={6} md={8}>
//               <Box sx={{ marginLeft: { xs: 0, md: "20px" } }}>
//                 <Typography
//                   color="#646464"
//                   sx={{
//                     fontSize: "1.05rem",
//                   }}
//                   variant="body1"
//                   component="p"
//                 >
//                   Founded in 2004, Hoco is the world’s most experienced Online
//                   home study & homeschooling online provider.
//                 </Typography>
//                 <Typography
//                   color="#646464"
//                   sx={{
//                     mt: 2,
//                     fontSize: "1.05rem",
//                   }}
//                   variant="body1"
//                   component="p"
//                 >
//                   We’re proud to say that one of our students was XYZ, who
//                   studied for his London University law degree with Hoco – an
//                   inspiration to All home learners everywhere! Let’s join Hoco
//                   and start learning!
//                 </Typography>
//                 <Button
//                   sx={{
//                     mt: 3,
//                     py: 1.5,
//                     backgroundColor: "#CDD4FB",
//                     color: "#132361",
//                     fontWeight: 600,
//                     boxShadow: "none",
//                     "&:hover": {
//                       backgroundColor: "#132361",
//                       color: "#fff",
//                     },
//                   }}
//                 >
//                   Know More About Us <ArrowRightAltIcon />
//                 </Button>
//               </Box>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ marginLeft: { xs: 0, md: "80px" }, mt: { xs: 4, md: 0 } }}>
//             <Image alt="group" src={boy2} layout="responsive" />
//             <Card
//               variant="outlined"
//               sx={{ py: 4, px: "2", backgroundColor: "#03008d", mt: 3 }}
//             >
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Box sx={{ width: 50, height: 50 }}>
//                   <Image alt="group" src={phone} layout="responsive" />
//                 </Box>
//                 <Box sx={{ color: "#fff" }}>
//                   <Typography component="p" sx={{ fontWeight: 600 }}>
//                     Call Us For Enquiry
//                   </Typography>
//                   <Typography component="p" sx={{ fontWeight: 600 }}>
//                     ++9903215369
//                   </Typography>
//                 </Box>
//               </Stack>
//             </Card>
//           </Box>
//         </Grid>
//       </Grid>
//     </Stack>
//   );
// };

// export default HomeSchooling;
