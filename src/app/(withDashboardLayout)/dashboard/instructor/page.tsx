"use client";

// Import necessary dependencies
import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  TextField,
  Box,
  Container,
  Paper,
  Grid,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { getAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { CustomJwtPayload } from "@/components/Dashboard/SideBar/SideBar";

// Custom styles
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));

const MotionPaper = motion(StyledPaper);

const InstructorHomePage: React.FC = () => {
  const token = getAccessToken("accessToken");
  const user = token ? (verifyToken(token) as CustomJwtPayload) : null;
  const initialProfile = {
    firstName: "Mr.",
    lastName: "Rahman",
    email: "rahman20@gmail.com",
    joiningDate: "2024-07-08",
    mobileNumber: "0156895872",
    gender: "male",
    designation: "Professor",
    department: "Coding",
    education: "BSc in ECE",
    photo: user?.image || "", // Ensure photo is set or an empty string
  };

  const [profileInfo, setProfileInfo] = useState(initialProfile);
  const [editableProfile, setEditableProfile] = useState(initialProfile);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setEditableProfile((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    setProfileInfo(editableProfile);
    toast.success("Profile updated successfully!");
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 4,
        backgroundColor: "#f0f4f8",
      }}
    >
      <Grid container spacing={2}>
        {/* Profile Section */}
        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ padding: 4, boxShadow: 0 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: "center", marginBottom: 4 }}>
                  <Avatar
                    alt={`${profileInfo.firstName} ${profileInfo.lastName}`}
                    src={profileInfo.photo} // Ensure src is correctly set
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: 1, color: "#132361", fontWeight: 600 }}
                  >
                    {profileInfo.firstName} {profileInfo.lastName}
                  </Typography>
                  <Typography variant="body1" sx={{ my: 1 }}>
                    {profileInfo.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Joining Date: {profileInfo.joiningDate}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ my: 1 }}
                  >
                    Mobile Number: {profileInfo.mobileNumber}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Designation: {profileInfo.designation}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ my: 1 }}
                  >
                    Department: {profileInfo.department}
                  </Typography>

                  <Typography variant="body2" color="textSecondary">
                    Education: {profileInfo.education}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={editableProfile.firstName}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={editableProfile.lastName}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={editableProfile.email}
                    onChange={handleChange}
                    margin="normal"
                  />

                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobileNumber"
                    value={editableProfile.mobileNumber}
                    onChange={handleChange}
                    margin="normal"
                  />

                  <TextField
                    fullWidth
                    label="Designation"
                    name="designation"
                    value={editableProfile.designation}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={editableProfile.department}
                    onChange={handleChange}
                    margin="normal"
                  />

                  <TextField
                    fullWidth
                    label="Education"
                    name="education"
                    value={editableProfile.education}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveChanges}
                    sx={{ bgcolor: "#132361", marginTop: 2 }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </MotionPaper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstructorHomePage;
