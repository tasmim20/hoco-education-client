"use client";
import React from "react";
import {
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
  Container,
} from "@mui/material";
import styled from "@emotion/styled";
// import { Theme } from "@mui/material/styles";

// const theme = createTheme({
//   spacing: 8,
//   palette: {
//     background: {
//       default: "#f4f6f8",
//     },
//   },
//   shape: {
//     borderRadius: 8,
//   },
//   shadows: Array(25).fill("none") as any, // Providing a default array for shadows
// });

// const StyledPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
//   padding: theme.spacing(2),
//   backgroundColor: theme.palette.background.default,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
// }));

const LeaderBoard = () => {
  const leaderboard = [
    { id: "S045", name: "Tasmim", position: 1 },
    { id: "S032", name: "Rahman", position: 2 },
    { id: "S031", name: "Rubina Akter", position: 3 },
    { id: "S022", name: "Tina", position: 4 },
    { id: "S012", name: "Rina", position: 5 },
    { id: "S076", name: "Sweety", position: 6 },
    { id: "S022", name: "Tina", position: 7 },
    { id: "S456", name: "Tina", position: 8 },
    { id: "S452", name: "Tina", position: 9 },
    { id: "S010", name: "Tina", position: 10 },
  ];

  return (
    <div className="max-w-5xl justify-center items-center">
      <Grid item xs={12}>
        <Stack>
          <Typography
            variant="h6"
            sx={{ marginBottom: 2, color: "#132361", fontWeight: 600 }}
          >
            Leaderboard Position
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      bgcolor: "#132361",
                      color: "#fff",
                    }}
                  >
                    Position
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      bgcolor: "#132361",
                      color: "#fff",
                    }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontWeight: "bold",
                      bgcolor: "#132361",
                      color: "#fff",
                    }}
                  >
                    ID
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {leaderboard.map((student) => (
                  <TableRow key={student.position}>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.position}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.name}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {student.id}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Grid>
    </div>
  );
};

export default LeaderBoard;
