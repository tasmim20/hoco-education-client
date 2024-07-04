// ShoppingCart.js
"use client";
import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";

const ShoppingCart = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Fetch cart item count from localStorage or wherever your cart data is stored
    const fetchCartItemCount = () => {
      // Example: Fetch from localStorage
      const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
      const itemCount = cartItems.reduce(
        (total: number, item: any) => total + item.quantity,
        0
      );
      setCartItemCount(itemCount); // Update cart item count
    };

    fetchCartItemCount();
  }, []);

  return (
    <IconButton aria-label="shopping cart" color="inherit" edge="end">
      <Badge badgeContent={cartItemCount} color="error">
        <ShoppingCartIcon sx={{ color: "#132361" }} />
      </Badge>
    </IconButton>
  );
};

export default ShoppingCart;
