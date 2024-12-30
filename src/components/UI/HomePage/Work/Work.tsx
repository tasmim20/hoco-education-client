import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Container } from "@mui/material";

const data = [
  {
    title: "Teach What You Love",
    details: "Join us on Outschool,  teachers set ",
    more: "own hours and teach the subjects.",
    button: "Start Teaching",
  },
  {
    title: "Join Our Team",
    details: "Join us on Outschool,  teachers set ",
    more: "own hours and teach the subjects.",
    button: "Explore Jobs",
  },
  {
    title: "Hoco For Schools",
    details: "Join us on Outschool,  teachers set ",
    more: "own hours and teach the subjects.",
    button: "More Offer",
  },
];

export default function Work() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        textAlign: "center",
        px: "50px",
        backgroundColor: {
          xs: "transparent",
          md: "#272d7c",
        },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  minWidth: 275,
                  backgroundColor: "#272d7c",
                  boxShadow: "0",

                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  py: 3,
                  px: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "25px",
                      lineHeight: "1.2", // Adjust line height for consistent spacing
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      color: "lightgray",
                    }}
                    component="div"
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    color="#fff"
                    sx={{
                      mt: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      color: "lightgray",
                    }}
                    variant="body1"
                    component="p"
                  >
                    {item.details}
                  </Typography>
                  <Typography
                    color="#fff"
                    sx={{
                      fontSize: { xs: "0.9rem", sm: "1rem", md: "1rem" },
                      color: "lightgray",
                    }}
                    variant="body1"
                    component="p"
                  >
                    {item.more}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", mb: 1 }}>
                  <Button
                    sx={{
                      mb: 3,
                      py: 1,
                      px: 3,
                      backgroundColor: "#CDD4FB",
                      color: "#132361",
                      fontWeight: 600,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#132361",
                        color: "#fff",
                        boxShadow: "0",
                      },
                    }}
                  >
                    {item.button} <ArrowRightAltIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
