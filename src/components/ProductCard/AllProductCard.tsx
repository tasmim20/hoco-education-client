import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Grid } from "@mui/material";
import { Book } from "@/types";
import AddToCart from "../AddToCart";

export default function AllProductCard({ book }: { book: Book }) {
  return (
    <Box>
      <Card
        sx={{
          width: {
            xs: 300, // Width for extra small and small devices
            md: 400, // Width for medium devices
          }, // Decreased width for small devices
          position: "relative",
          overflow: "hidden",
          "&:hover .card-media": {
            transform: "scale(1.1)",
            transition: "transform 0.5s ease",
          },
          "&:hover .overlay-icons": {
            opacity: 1,
            transition: "opacity 1s ease",
          },
          "&:hover .card-button": {
            backgroundColor: "#f66a1d",
            color: "#fff",
            borderColor: "#f66a1d",
            transition:
              "background-color 1s ease, color 1s ease, border-color 1s ease",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            className="card-media"
            sx={{
              width: {
                xs: 300, // Width for extra small and small devices
                md: 400, // Width for medium devices
              },
              height: {
                xs: 250, // Height for extra small and small devices
                md: 400, // Height for medium devices
              },
            }}
            image={book.image}
            title={book.title}
          />
          <Box
            className="overlay-icons"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              opacity: 0,
              zIndex: 1,
            }}
          >
            <VisibilityIcon sx={{ color: "#fff", mr: 2 }} />
            <LinkIcon sx={{ color: "#fff" }} />
          </Box>
        </Box>
        <CardContent sx={{ textAlign: "center", my: "10px" }}>
          <Typography
            gutterBottom
            variant="h6"
            sx={{ fontWeight: 800, fontSize: "22px" }}
            component="div"
          >
            {book.title}
          </Typography>
          <Typography
            gutterBottom
            sx={{ fontWeight: 700 }}
            component="div"
            color="gray"
          >
            {book.price}
          </Typography>
          <Box
            color="#fcb900"
            display="flex"
            sx={{ mt: "10px" }}
            justifyContent="center"
          >
            <StarBorderPurple500OutlinedIcon fontSize="small" />
            <StarBorderPurple500OutlinedIcon fontSize="small" />
            <StarBorderPurple500OutlinedIcon fontSize="small" />
            <StarBorderPurple500OutlinedIcon fontSize="small" />
            <StarBorderPurple500OutlinedIcon fontSize="small" />
          </Box>
        </CardContent>

        <AddToCart bookId={book._id} />
      </Card>
    </Box>
  );
}
