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
import AllProductCard from "@/components/ProductCard/AllProductCard";

interface Book {
  _id: string;
  title: string;
  details: string;
  image: string;
  writer: string;
  price: string;
}

const ShopPage = async () => {
  const res = await fetch(
    "https://hoco-education-server.vercel.app/api/v1/books",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const books: Book[] = await res.json();

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        textAlign: "center",
        my: "50px",
      }}
    >
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={book._id}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px", // Decreased distance between cards
            }}
          >
            <AllProductCard book={book} key={book._id} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShopPage;
