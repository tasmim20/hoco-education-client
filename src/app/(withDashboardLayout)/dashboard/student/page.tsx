"use client";

// Import necessary dependencies
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { getAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { CustomJwtPayload } from "@/components/Dashboard/SideBar/SideBar";
import toast from "react-hot-toast";

// Custom styles
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(1),
  boxShadow: theme.shadows[3],
}));

const MotionPaper = motion(StyledPaper);

const StudentPage: React.FC = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    avatar: "",
    email: "",
    role: "",
    id: "S078",
    address: "123 Main St, City, Country",
    mobileNo: "+8801794638594",
  });

  const [editableProfile, setEditableProfile] = useState(profileInfo);

  useEffect(() => {
    const token = getAccessToken("accessToken");
    const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

    if (user) {
      const initialProfile = {
        name: user.name || "",
        avatar: user.image || "",
        email: user.email || "",
        role: user.role || "",
        id: "S078",
        address: "123 Main St, City, Country",
        mobileNo: "+8801794638594",
      };
      setProfileInfo(initialProfile);
      setEditableProfile(initialProfile);
    }
  }, []);

  const enrolledCourses = [
    { name: "Lower Secondary", timeline: "Jan 2023 - Sep 2024" },
    { name: "Coding", timeline: "June 2024 - Present" },
  ];

  const assignments = 5;
  const nextAssignment = "Project Submission - Due: 20th July 2024";

  // Handle form input changes
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setEditableProfile((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Handle save button click
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
                    alt={profileInfo.name}
                    src={profileInfo.avatar}
                    sx={{ width: 100, height: 100, marginBottom: 2 }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ marginBottom: 1, color: "#132361", fontWeight: 600 }}
                  >
                    {profileInfo.name}
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: 1 }}>
                    {profileInfo.email}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Student ID: {profileInfo.id}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Address: {profileInfo.address}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Mobile Number: {profileInfo.mobileNo}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box component="form" noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={editableProfile.name}
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
                    label="Your Role"
                    name="role"
                    value={editableProfile.role}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Your ID"
                    name="id"
                    value={editableProfile.id}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={editableProfile.address}
                    onChange={handleChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Mobile Number"
                    name="mobileNo"
                    value={editableProfile.mobileNo}
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

        {/* Enrolled Courses and Assignments Section */}
        <Grid item xs={12}>
          <MotionPaper
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ boxShadow: 0 }}
          >
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, color: "#132361", fontWeight: 600 }}
            >
              Enrolled Courses and Timeline
            </Typography>
            <List>
              {enrolledCourses.map((course, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <ListItemText primary={course.name} />
                  <Typography variant="body2">{course.timeline}</Typography>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ marginY: 2 }} />
            <Typography
              variant="h6"
              sx={{ marginBottom: 2, color: "#132361", fontWeight: 600 }}
            >
              Assignments
            </Typography>
            <Typography variant="body1">
              Number of Assignments: {assignments}
            </Typography>
            <Typography variant="body2">{nextAssignment}</Typography>
          </MotionPaper>
        </Grid>

        {/* Leaderboard Section */}
      </Grid>
    </Container>
  );
};

export default StudentPage;
