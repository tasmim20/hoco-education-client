"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Button,
  TextField,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.common.black,
    fontWeight: 700,
    fontSize: "16px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BookCartPage = (props: any) => {
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://hoco-education-server.vercel.app/api/v1/books/${props.params.bookId}`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        const productData = await res.json();
        setProduct(productData);

        const savedQuantity = localStorage.getItem(
          `quantity_${props.params.bookId}`
        );
        const savedTotalPrice = localStorage.getItem(
          `totalPrice_${props.params.bookId}`
        );

        if (savedQuantity && savedTotalPrice) {
          setQuantity(parseInt(savedQuantity));
          setTotalPrice(parseFloat(savedTotalPrice));
        } else {
          const price = parseFloat(productData.price.replace("$", ""));
          setTotalPrice(price * quantity);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [props.params.bookId, quantity]);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleUpdate = () => {
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      const total = price * quantity;
      setTotalPrice(total);

      localStorage.setItem(`quantity_${product._id}`, quantity.toString());
      localStorage.setItem(`totalPrice_${product._id}`, total.toString());
    }
  };

  const handleCancel = () => {
    if (product) {
      const price = parseFloat(product.price.replace("$", ""));
      setQuantity(1);
      setTotalPrice(price);

      localStorage.removeItem(`quantity_${product._id}`);
      localStorage.removeItem(`totalPrice_${product._id}`);
    }
  };

  const handleApplyCoupon = () => {
    // Apply coupon logic here
    console.log("Coupon applied:", couponCode);
  };

  if (!product) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
            color: "#132361",
          }}
        >
          <CircularProgress sx={{ color: "#132361" }} />
        </Box>
      </Container>
    );
  }

  return (
    <Container>
      <TableContainer component={Paper} sx={{ my: "100px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Unit Price</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Subtotal</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                <Avatar alt="Product Image" src={product.image} />
              </StyledTableCell>
              <StyledTableCell>{product.title}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton
                  sx={{ p: "8px" }}
                  onClick={() => handleQuantityChange(quantity - 1)}
                  aria-label="decrease quantity"
                  size="small"
                >
                  <RemoveIcon fontSize="inherit" />
                </IconButton>
                {quantity}
                <IconButton
                  sx={{ p: "8px" }}
                  onClick={() => handleQuantityChange(quantity + 1)}
                  aria-label="increase quantity"
                  size="small"
                >
                  <AddIcon fontSize="inherit" />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="right">
                ${totalPrice.toFixed(2)}
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>

        <div className="py-2 flex justify-between px-4">
          <div>
            <TextField
              label="Coupon Code"
              variant="outlined"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button
              onClick={handleApplyCoupon}
              sx={{
                py: "14px",
                backgroundColor: "#132361",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#000000.",
                  color: "#fff",
                },
              }}
            >
              Apply Coupon
            </Button>
          </div>
          <div>
            <Button
              onClick={handleUpdate}
              sx={{
                mr: 2,
                py: "14px",
                backgroundColor: "#132361",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#000000.",
                  color: "#fff",
                },
              }}
            >
              Update Cart
            </Button>
            <Button
              onClick={handleCancel}
              sx={{
                py: "14px",
                backgroundColor: "#ff1616",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#ff1616",
                  color: "#ffcccc",
                },
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </TableContainer>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        border={1}
        borderColor="gray"
        borderRadius={1}
        my={8}
        p={3}
        mt={2}
        // Set your desired width here
      >
        <Typography variant="h6" component="p" fontWeight={700} sx={{ mr: 2 }}>
          Cart Total: ${totalPrice.toFixed(2)}
        </Typography>
        <Button
          onClick={handleUpdate}
          sx={{
            py: "14px",
            backgroundColor: "#132361",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#000000",
            },
          }}
        >
          Proceed To Checkout
        </Button>
      </Box>
    </Container>
  );
};

export default BookCartPage;
