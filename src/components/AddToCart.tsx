// components/AddToCart.tsx
"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const AddToCart = ({ bookId }: { bookId: string }) => {
  return (
    <div>
      <Link href={`/shop/${bookId}`} passHref>
        <Button
          component="a"
          variant="outlined"
          fullWidth
          className="card-button"
          sx={{
            borderColor: "#f66a1d",
            color: "#f66a1d",
            mb: "20px",
            marginLeft: "5px",
            marginRight: "5px",
            py: "10px",
          }}
        >
          ADD TO CART
        </Button>
      </Link>
    </div>
  );
};

export default AddToCart;
