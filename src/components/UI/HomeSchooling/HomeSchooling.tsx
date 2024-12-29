// "use client";
// import {
//   Box,
//   Button,
//   Card,
//   Container,
//   Grid,
//   Stack,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import boy1 from "../../../../public/assets/about-1.webp";
// import boy2 from "../../../../public/assets/about-2.webp";
// import phone from "../../../../public/assets/download.svg";
// import Image from "next/image";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import { keyframes } from "@emotion/react";
// import Circle from "./Circle";

// const HomeSchooling = () => {
//   // Define the rotation animation
//   //   const rotate = keyframes`
//   // 0% {
//   //   transform: rotate(0deg);
//   // }
//   // 100% {
//   //   transform: rotate(360deg);
//   // }
//   // `;
//   return (
//     <Stack
//       sx={{
//         mx: { xs: 8, md: 20 },
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         my: { xs: 8, md: 20 },
//       }}
//     >
//       <Grid container spacing={1}>
//         <Grid xs={12} sm={12} md={9}>
//           <Box>
//             {" "}
//             <Typography
//               color="#132361"
//               sx={{
//                 fontSize: { xs: "2rem", md: "4rem" },
//                 fontWeight: { xs: 800, md: 800 },
//                 lineHeight: { xs: "1.2", md: "1.2" },
//                 variant: { xs: "h3", md: "h1" },
//               }}
//               component="h1"
//             >
//               Start Your Child’s
//               <span style={{ color: "#ffC53A" }}> Homeschooling</span> Online
//               With Hoco
//             </Typography>
//           </Box>
//           <Grid container spacing={2} sx={{ mt: "20px" }}>
//             <Grid xs={12} sm={6} md={4} sx={{ mt: { xs: 2, md: 0 } }}>
//               {/* Add content for the 4-column part here */}
//               <Box>
//                 <Image alt="group" src={boy1} layout="responsive" />
//               </Box>
//             </Grid>
//             <Grid xs={12} sm={6} md={8}>
//               {/* Add content for the 8-column part here */}
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
//                     my: 3,
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
//         <Grid xs={12} md={4} sx={{ marginRight: "-500px" }}>
//           {" "}
//           <Box sx={{ marginLeft: { xs: 0, md: "80px" }, mt: { xs: 4, md: 0 } }}>
//             <Image alt="group" src={boy2} layout="responsive" />
//             <Card
//               variant="outlined"
//               sx={{ p: "14px", backgroundColor: "#03008d", mt: 3 }}
//             >
//               <Stack spacing={2} direction="row" alignItems="center">
//                 <Box
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",

//                     py: "15px",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       marginRight: "20px",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       width: 50,
//                       height: 50,
//                       marginTop: "10px",
//                     }}
//                   >
//                     <Image alt="group" src={phone} layout="responsive" />
//                   </Box>

//                   <Box sx={{ color: "#fff" }}>
//                     <Typography component="p" sx={{ fontWeight: "600" }}>
//                       Call Us For Enquiry
//                     </Typography>
//                     <Typography component="p" sx={{ fontWeight: "600" }}>
//                       ++9903215369
//                     </Typography>
//                   </Box>
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

"use client";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import boy1 from "../../../../public/assets/about-1.webp";
import boy2 from "../../../../public/assets/about-2.webp";
import best from "../../../../public/assets/best.webp";
import phone from "../../../../public/assets/download.svg";
import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { keyframes } from "@emotion/react";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const HomeSchooling = () => {
  return (
    <Stack
      sx={{
        mx: { xs: 2, sm: 4, md: 8, lg: 20 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        mb: 1,
        mt: 12,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box>
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 800,
                lineHeight: 1.2,
              }}
              component="h1"
            >
              Start Your Child’s
              <span style={{ color: "#ffC53A" }}> Homeschooling</span> Online
              With Hoco
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Image alt="group" src={boy1} layout="responsive" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
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
        <Grid item xs={12} md={4} sx={{ mt: { xs: 4, md: 0 } }}>
          <Box sx={{ marginLeft: { xs: 0, md: "80px" }, zIndex: 2 }}>
            <Image alt="group" src={boy2} layout="responsive" />
            <Card
              variant="outlined"
              sx={{ p: 2, backgroundColor: "#03008d", mt: 3 }}
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
          </Box>
          <Box
            sx={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
              mt: "-50px",

              animation: `${rotate} 10s linear infinite`,
              display: { xs: "none", md: "block" }, // Hide on smaller devices
              zIndex: -1,
            }}
          >
            <Image
              alt="group"
              src={best}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HomeSchooling;
