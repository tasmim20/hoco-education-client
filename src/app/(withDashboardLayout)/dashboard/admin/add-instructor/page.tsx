"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateInstructorMutation } from "@/redux/api/instructorApi";

// Define the schema based on the fields provided
const schema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  joiningDate: z.string().min(1, "Joining Date is required"),
  mobileNumber: z
    .string()
    .regex(/^\d+$/, "Mobile Number must be a valid number")
    .min(1, "Mobile Number is required"),
  gender: z.string().min(1, "Gender is required"),
  designation: z.string().min(1, "Designation is required"),
  department: z.string().min(1, "Department is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  education: z.string().min(1, "Education is required"),
  image: z.string().url("Invalid URL").min(1, "Instructor Image is required"),
});

type FormData = z.infer<typeof schema>;

const AddInstructor = () => {
  const [createInstructor, { isLoading, isSuccess, isError, error }] =
    useCreateInstructorMutation();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      joiningDate: "",
      mobileNumber: "",
      gender: "",
      designation: "",
      department: "",
      dateOfBirth: "",
      education: "",
      image: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await createInstructor(data).unwrap();
      console.log("Instructor created successfully:", res);
      // reset();
    } catch (err: any) {
      console.error("Failed to create instructor:", err);
    }
  };

  const handleReset = () => {
    reset();
  };

  const fields: Array<{
    name: keyof FormData;
    label: string;
    type: string;
    multiline?: boolean;
    rows?: number;
  }> = [
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "joiningDate", label: "Joining Date", type: "date" },
    { name: "mobileNumber", label: "Mobile Number", type: "text" },
    { name: "gender", label: "Gender", type: "text" },
    { name: "designation", label: "Designation", type: "text" },
    { name: "department", label: "Department", type: "text" },
    { name: "dateOfBirth", label: "Date of Birth", type: "date" },
    { name: "education", label: "Education", type: "text" },
    { name: "image", label: "Instructor Image", type: "url" },
  ];

  return (
    <Stack sx={{ bgcolor: "#f8f8f8" }}>
      <Container>
        <Stack>
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
            <Typography fontWeight="700" variant="h5" component="h5">
              Add Instructor
            </Typography>
            <Link href="instructors">
              <Button sx={{ bgcolor: "#132361" }}>
                <VisibilityIcon sx={{ marginRight: "1px" }} /> View Instructors
              </Button>
            </Link>
          </Box>
          <Stack
            sx={{
              bgcolor: "#fff",
              p: "10px",
            }}
          >
            <Box>
              <Typography fontWeight="500" variant="h6" component="h5">
                Instructor Details
              </Typography>
              <Divider />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} sx={{ my: "10px" }}>
                  {fields.map((field, index) => (
                    <Grid key={index} item md={6} sm={6} xs={12}>
                      <Controller
                        name={field.name}
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <TextField
                            label={field.label}
                            type={field.type}
                            variant="outlined"
                            size="small"
                            fullWidth
                            multiline={field.multiline}
                            rows={field.rows}
                            value={value}
                            onChange={onChange}
                            error={!!errors[field.name]}
                            helperText={errors[field.name]?.message}
                          />
                        )}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Button
                  type="submit"
                  sx={{ my: 2, backgroundColor: "#132361", color: "#fff" }}
                >
                  Submit
                </Button>
                <Button
                  onClick={handleReset}
                  sx={{
                    my: 2,
                    mx: 2,
                    backgroundColor: "#ffcccc",
                    color: "#ff1616",
                    "&:hover": {
                      backgroundColor: "#ff1616",
                      color: "#fff",
                    },
                  }}
                >
                  Cancel
                </Button>
              </form>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AddInstructor;
