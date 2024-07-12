"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { Course } from "@/types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DataTables() {
  const { data, isLoading, isError } = useGetAllCourseQuery({});

  if (isLoading) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "#132361",
          }}
        >
          <CircularProgress sx={{ color: "#132361" }} />
        </Box>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography variant="h6" color="error">
            Failed to load courses.
          </Typography>
        </Box>
      </Container>
    );
  }
  return (
    <TableContainer component={Paper} sx={{ my: "100px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Name</StyledTableCell>
            <StyledTableCell align="right">Instructor</StyledTableCell>
            <StyledTableCell align="right">Students Enrolled</StyledTableCell>
            <StyledTableCell align="right">Duration</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((course: Course) => (
              <StyledTableRow key={course.courseName}>
                <StyledTableCell component="th" scope="row">
                  {course.courseName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {course.professorName}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {course.maximumStudents}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {course.courseDuration}
                </StyledTableCell>
                <StyledTableCell align="right">Active</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
