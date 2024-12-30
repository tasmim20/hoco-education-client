"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

interface StatItem {
  value: number;
  label: string;
  duration: number; // Animation duration in milliseconds
}

const statsData: StatItem[] = [
  { value: 250, label: "Courses & videos", duration: 1000 },
  { value: 100, label: "Expert Instructors", duration: 1000 },
  { value: 2000, label: "Students", duration: 500 },
  { value: 180, label: "Classes complete", duration: 1000 },
];

const StatsSection = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const animations = statsData.map((stat, index) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(stat.duration / stat.value));
      const timer = setInterval(() => {
        start += 1;
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = start;
          return newCounts;
        });
        if (start >= stat.value) clearInterval(timer);
      }, stepTime);
      return timer;
    });

    return () => animations.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f1f5fd",
        py: 4,
        textAlign: "center",
        backgroundImage: 'url("/path-to-your-pattern.png")', // Replace with your pattern image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {statsData.map((stat, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.5rem", sm: "1.5rem", md: "2rem" },
                  color: "#132361",
                }}
              >
                {counts[index]}+
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
