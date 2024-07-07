// "use client";
// import {
//   Box,
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Link from "next/link";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const AddCourse = () => {
//   return (
//     <Container>
//       <Stack>
//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             justifyContent: "space-between",
//             my: "30px",
//             py: "10px",
//             px: "8px",
//             bgcolor: "#fff",
//           }}
//         >
//           <Typography fontWeight="700" variant="h5" component="h5">
//             Add Course
//           </Typography>
//           <Link href="course">
//             {" "}
//             <Button sx={{ bgcolor: "#132361" }}>
//               <VisibilityIcon sx={{ marginRight: "1px" }} /> View Course
//             </Button>
//           </Link>
//         </Box>
//         <Stack
//           sx={{
//             bgcolor: "#fff",
//             p: "10px",
//             boxShadow: "1",
//           }}
//         >
//           <Box>
//             <Typography fontWeight="500" variant="h6" component="h5">
//               Courses Details
//             </Typography>
//             <Divider />
//             <form>
//               <Grid container spacing={4} sx={{ my: "10px" }}>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Course Name"
//                     type="name"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Course Code"
//                     type="text"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{
//                       "& .MuiInputBase-root": {
//                         height: "100px", // Adjust the height as needed
//                       },
//                       "& .MuiOutlinedInput-input": {
//                         padding: "14px", // Adjust the padding as needed to vertically center the text
//                       },
//                     }}
//                     label="Course Details"
//                     type="text"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label=""
//                     type="date"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Course Duration"
//                     type="text"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Course Price"
//                     type="price"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Professor Name"
//                     type="text"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Maximum Students"
//                     type="number"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Contact Number"
//                     type="number"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//                 <Grid item md={6} sm={12} xs={12}>
//                   <TextField
//                     label="Course Photo"
//                     type="photo"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                   />
//                 </Grid>
//               </Grid>

//               <Button type="submit" sx={{ my: 2, backgroundColor: "#132361" }}>
//                 Submit
//               </Button>
//               <Button
//                 sx={{
//                   my: 2,
//                   mx: 2,
//                   backgroundColor: "#ffcccc",
//                   color: "#ff1616",
//                   "&:hover": {
//                     backgroundColor: "#ff1616",
//                     color: "#fff",
//                   },
//                 }}
//               >
//                 Cancel
//               </Button>
//             </form>
//           </Box>
//         </Stack>
//       </Stack>
//     </Container>
//   );
// };
// export default AddCourse;

"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateCourseMutation } from "@/redux/api/courseApi";
import { modifyPayload } from "@/utils/modifyPayload";
import toast from "react-hot-toast";

const schema = z.object({
  courseName: z.string().min(1, "Course Name is required"),
  courseCode: z.string().min(1, "Course Code is required"),
  courseDetails: z.string().min(1, "Course Details are required"),
  startDate: z.string().min(1, "Start Date is required"),
  courseDuration: z.string().min(1, "Course Duration is required"),
  coursePrice: z.string().min(0, "Course Price must be a positive number"),
  professorName: z.string().min(1, "Professor Name is required"),
  maximumStudents: z
    .string()
    .min(1, "Maximum Students must be a positive number"),
  contactNumber: z.string().min(1, "Contact Number is required"),
  coursePhoto: z.string().min(1, "Course Photo is required"),
});

type FormData = z.infer<typeof schema>;

const AddCourse = () => {
  const [createCourse] = useCreateCourseMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      courseName: "",
      courseCode: "",
      courseDetails: "",
      startDate: "",
      courseDuration: "",
      coursePrice: "",
      professorName: "",
      maximumStudents: "",
      contactNumber: "",
      coursePhoto: "",
    },
  });

  // const onSubmit = (data: FormData) => {
  //   console.log(data);
  //   try {
  //     const res = createCourse(data);
  //     console.log(res);
  //   } catch (err: any) {
  //     console.error(err.message);
  //   }
  // };
  const onSubmit = async (data: FormData) => {
    try {
      const res = await createCourse(data).unwrap();
      console.log("Course created successfully:", res);
      toast.success("Course created successfully");
      reset();
    } catch (err: any) {
      console.error("Failed to create course:", err);
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
    { name: "courseName", label: "Course Name", type: "text" },
    { name: "courseCode", label: "Course Code", type: "text" },
    {
      name: "courseDetails",
      label: "Course Details",
      type: "text",
      multiline: true,
      rows: 4,
    },
    { name: "startDate", label: "Start Date", type: "date" },
    { name: "courseDuration", label: "Course Duration", type: "text" },
    { name: "coursePrice", label: "Course Price", type: "number" },
    { name: "professorName", label: "Professor Name", type: "text" },
    { name: "maximumStudents", label: "Maximum Students", type: "number" },
    { name: "contactNumber", label: "Contact Number", type: "text" },
    { name: "coursePhoto", label: "Course Photo", type: "text" },
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
              Add Course
            </Typography>
            <Link href="course">
              <Button sx={{ bgcolor: "#132361" }}>
                <VisibilityIcon sx={{ marginRight: "1px" }} /> View Course
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
                Courses Details
              </Typography>
              <Divider />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} sx={{ my: "10px" }}>
                  {fields.map((field, index) => (
                    <Grid
                      key={index}
                      item
                      md={field.name === "courseDetails" ? 12 : 6}
                      sm={12}
                      xs={12}
                    >
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

export default AddCourse;
