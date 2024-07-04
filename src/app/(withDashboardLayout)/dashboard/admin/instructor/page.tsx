"use client";
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Avatar,
  CircularProgress,
  Container,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Link from "next/link";
import {
  useDeleteInstructorMutation,
  useGetInstructorQuery,
  useUpdateInstructorMutation,
} from "@/redux/api/instructorApi";
import toast from "react-hot-toast";

interface Column {
  id: string;
  label: string;
  minWidth: number;
  align?: "left" | "center" | "right";
  format?: (value: number) => string;
}
interface InstructorData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  education: string;
  department: string;
  designation: string;
  // Add other properties as per your data structure
}

const columns: Column[] = [
  { id: "Photo", label: "Photo", minWidth: 100 },
  { id: "fullName", label: "Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "mobileNumber", label: "Mobile Number", minWidth: 150 },
  { id: "education", label: "Education", minWidth: 150 },
  { id: "department", label: "Department", minWidth: 150 },
  { id: "designation", label: "Designation", minWidth: 150 },
  { id: "Action", label: "Action", minWidth: 150, align: "center" },
];

export default function Instructor() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selectedInstructor, setSelectedInstructor] =
    React.useState<InstructorData | null>(null);

  const [showModal, setShowModal] = React.useState(false);
  const [formData, setFormData] = React.useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    education: "",
    department: "",
    designation: "",
  });

  const {
    data: instructors,
    error,
    isLoading,
    refetch,
  } = useGetInstructorQuery({});
  const [deleteInstructor] = useDeleteInstructorMutation();
  const [updateInstructor] = useUpdateInstructorMutation();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenModal = (instructor: InstructorData) => {
    setSelectedInstructor({
      _id: instructor._id,
      firstName: instructor.firstName,
      lastName: instructor.lastName,
      email: instructor.email,
      mobileNumber: instructor.mobileNumber,
      education: instructor.education,
      department: instructor.department,
      designation: instructor.designation,
      // Add other properties as needed
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedInstructor(null);
    setFormData({
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      education: "",
      department: "",
      designation: "",
    });
  };

  const handleUpdate = async () => {
    if (!selectedInstructor || !selectedInstructor._id) {
      console.error("No instructor selected for update or _id is missing.");
      return;
    }

    try {
      await updateInstructor(selectedInstructor);
      refetch();
      toast.success("Successfully Updated!");
      handleCloseModal();
    } catch (error) {
      console.error("Failed to update instructor", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedInstructor((prevInstructor) => ({
      ...prevInstructor!,
      [name]: value,
    }));
  };

  const handleDelete = async (id: any) => {
    try {
      await deleteInstructor(id);
      refetch();
      toast.success("Successfully Deleted!");
    } catch (error) {
      console.error("Failed to delete instructor", error);
    }
  };

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
  if (error) return <div>Error loading instructors</div>;

  return (
    <Stack sx={{ bgcolor: "#f8f8f8" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          my: "30px",
          py: "10px",
          px: "8px",
          bgcolor: "#fff",
        }}
      >
        <Typography
          fontWeight="700"
          variant="h5"
          component="h5"
          sx={{ color: "#132361" }}
        >
          All Instructors
        </Typography>
        <Link href="add-instructor">
          <Button sx={{ bgcolor: "#132361" }}>
            <AddIcon /> Add Instructor
          </Button>
        </Link>
      </Box>
      {/* <EditInstructorModal
        open={showModal}
        onClose={handleCloseModal}
        instructor={selectedInstructor}
        onUpdate={handleUpdate}
        onChange={handleChange} // Pass handleChange function here
      /> */}
      <Stack
        sx={{
          width: "100%",
          margin: "auto",
          overflowX: isMobile ? "auto" : "hidden",
        }}
      >
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={{ fontWeight: 700 }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {instructors
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                      <TableCell key="Photo" align="left">
                        <Avatar alt="Instructor Image" src={row.image} />
                      </TableCell>
                      <TableCell key="fullName" align="left">
                        {`${row.firstName} ${row.lastName}`}
                      </TableCell>
                      <TableCell key="email" align="left">
                        {row.email}
                      </TableCell>
                      {/* <TableCell key="joiningDate" align="left">
                        {row.joiningDate}
                      </TableCell> */}
                      <TableCell key="mobileNumber" align="left">
                        {row.mobileNumber}
                      </TableCell>
                      <TableCell key="education" align="left">
                        {row.education}
                      </TableCell>
                      <TableCell key="department" align="left">
                        {row.department}
                      </TableCell>
                      <TableCell key="designation" align="left">
                        {row.designation}
                      </TableCell>
                      <TableCell key="actions" align="center">
                        {/* <Button
                          sx={{ mx: "5px", px: "-10px", bgcolor: "#132361" }}
                          aria-label="edit"
                          onClick={() => handleOpenModal(row)}
                        >
                          <EditIcon />
                        </Button> */}

                        <Button
                          aria-label="delete"
                          onClick={() => handleDelete(row._id)}
                          sx={{
                            backgroundColor: "#ff1616",
                            color: "#fff",
                            "&:hover": {
                              backgroundColor: "#ffcccc",
                              color: "#ff1616",
                            },
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={instructors.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Stack>
    </Stack>
  );
}
