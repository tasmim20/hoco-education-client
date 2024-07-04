"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import banner from "../../../../../public/assets/faq-img.webp";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const AnotherHero = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        my: { xs: 8, md: 20 },
      }}
    >
      <Grid container spacing={20}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", md: "700px" },
              top: { xs: 0, md: "-20px" },
              left: { xs: 0, md: "-100px" },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box>
              <Image alt="group" src={banner} layout="responsive" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: { xs: "100%", md: "650px" },
              top: { xs: "-120px", md: "-20px" },
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Typography
              color="#132361"
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                fontWeight: { xs: 800, md: 800 },
                variant: { xs: "h3", md: "h1" },
                lineHeight: { xs: "1.2", md: "1.2" },
              }}
              component="h1"
            >
              Take Control Of Your
              <span style={{ color: "#ffC53A" }}> Child’s</span> Education
            </Typography>
            <Typography
              color="#646464"
              sx={{
                mt: 2,
                fontSize: { xs: "1.10rem", md: "1.10rem" },
              }}
              variant="body1"
              component="p"
            >
              We help you to shape your child’s education. Join us for a live
              presentation and question and answer session to find out more
              about homeschooling with Hoco. Learn anywhere and anytime with our
              award-winning PreK-12th.
            </Typography>

            <div style={{ marginTop: "25px" }}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  backgroundColor: "#f9f9fc",
                  fontWeight: 600,
                  boxShadow: "none",
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === "panel1" ? "#fff" : "#132361",
                      }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={{
                    backgroundColor:
                      expanded === "panel1" ? "#132361" : "inherit",
                    color: expanded === "panel1" ? "#fff" : "#132361",
                    "&:hover": {
                      backgroundColor:
                        expanded === "panel1" ? "#132361" : "#f9f9fc",
                    },
                  }}
                >
                  <Typography
                    color={expanded === "panel1" ? "#fff" : "#132361"}
                    sx={{
                      fontWeight: "bold",
                      variant: { xs: "h5", md: "h5" },
                    }}
                    component="h1"
                  >
                    Online Curriculum For PreK-12th
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Hoco is a standards-based grade-appropriate curriculum with
                    thousands of interactive lessons in math, language arts,
                    social studies, science, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  backgroundColor: "#f9f9fc",
                  fontWeight: 600,
                  boxShadow: "none",
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === "panel2" ? "#fff" : "#132361",
                      }}
                    />
                  }
                  aria-controls="panel2-content"
                  id="panel2-header"
                  sx={{
                    backgroundColor:
                      expanded === "panel2" ? "#132361" : "inherit",
                    color: expanded === "panel2" ? "#fff" : "#132361",
                    "&:hover": {
                      backgroundColor:
                        expanded === "panel2" ? "#132361" : "#f9f9fc",
                    },
                  }}
                >
                  <Typography
                    color={expanded === "panel2" ? "#fff" : "#132361"}
                    sx={{
                      fontWeight: "bold",
                      variant: { xs: "h5", md: "h5" },
                    }}
                    component="h1"
                  >
                    Flexible And Student-Paced
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Hoco is a standards-based grade-appropriate curriculum with
                    thousands of interactive lessons in math, language arts,
                    social studies, science, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  backgroundColor: "#f9f9fc",
                  fontWeight: 600,
                  boxShadow: "none",
                  mb: 2,
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: expanded === "panel3" ? "#fff" : "#132361",
                      }}
                    />
                  }
                  aria-controls="panel3-content"
                  id="panel3-header"
                  sx={{
                    backgroundColor:
                      expanded === "panel3" ? "#132361" : "inherit",
                    color: expanded === "panel3" ? "#fff" : "#132361",
                    "&:hover": {
                      backgroundColor:
                        expanded === "panel3" ? "#132361" : "#f9f9fc",
                    },
                  }}
                >
                  <Typography
                    color={expanded === "panel3" ? "#fff" : "#132361"}
                    sx={{
                      fontWeight: "bold",
                      variant: { xs: "h5", md: "h5" },
                    }}
                    component="h1"
                  >
                    Fun and Engaging
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Hoco is a standards-based grade-appropriate curriculum with
                    thousands of interactive lessons in math, language arts,
                    social studies, science, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AnotherHero;
