// "use client";
// import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import {
//   Box,
//   Button,
//   CardActionArea,
//   CardActions,
//   Container,
// } from "@mui/material";

// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import Divider from "@mui/material/Divider";
// import AddIcon from "@mui/icons-material/Add";
// import Link from "next/link";
// import { useGetAllCourseQuery } from "@/redux/api/courseApi";

// const AllCourse = () => {
//   const { data, isLoading } = useGetAllCourseQuery({});
//   console.log(data);
//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "flex",
//           width: "100%",
//           justifyContent: "space-between",
//           my: "30px",
//           py: "10px",
//           px: "8px",
//           bgcolor: "#fff",

//           border: "1px solid lightgray",
//         }}
//       >
//         <Typography fontWeight="700" variant="h5" component="h5">
//           All Course
//         </Typography>
//         <Link href="add-course">
//           {" "}
//           <Button sx={{ bgcolor: "#132361" }}>
//             <AddIcon /> Add Course
//           </Button>
//         </Link>
//       </Box>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           justifyContent: "center",
//         }}
//       >
//         {Array.from({ length: 6 }).map((_, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ maxWidth: 420, boxShadow: 1 }}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image="https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/class-2.webp"
//                   alt="green iguana"
//                 />
//                 <CardContent sx={{ fontSize: "120px" }}>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                   </Typography>

//                   <Box>
//                     <List aria-label="mailbox folders">
//                       <ListItem disableGutters>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             width: "100%",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <ListItemText primary="Date" />
//                           <ListItemText
//                             primary="love"
//                             sx={{ textAlign: "end" }}
//                           />
//                         </Box>
//                       </ListItem>
//                       <Divider component="li" />
//                       <ListItem disableGutters>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             width: "100%",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <ListItemText primary="Duration" />
//                           <ListItemText
//                             primary="duration"
//                             sx={{ textAlign: "end" }}
//                           />
//                         </Box>
//                       </ListItem>
//                       <Divider component="li" />
//                       <ListItem disableGutters>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             width: "100%",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <Typography sx={{ fontSize: "15px" }}>
//                             hello
//                           </Typography>
//                           <Typography>hello</Typography>
//                           {/* <ListItemText primary="professor" />
//                           <ListItemText
//                             primary="End Side"
//                             sx={{ textAlign: "end" }}
//                           /> */}
//                         </Box>
//                       </ListItem>
//                       <Divider component="li" />
//                       <ListItem disableGutters>
//                         <Box
//                           sx={{
//                             display: "flex",
//                             width: "100%",
//                             justifyContent: "space-between",
//                           }}
//                         >
//                           <ListItemText primary="Student" />
//                           <ListItemText
//                             primary="End Side"
//                             sx={{ textAlign: "end" }}
//                           />
//                         </Box>
//                       </ListItem>
//                     </List>
//                   </Box>
//                 </CardContent>
//               </CardActionArea>
//               <CardActions>
//                 <Button
//                   size="small"
//                   sx={{ bgcolor: "#132361", mb: "10px", marginLeft: "8px" }}
//                 >
//                   Read More
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default AllCourse;

"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  CircularProgress,
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { useGetAllCourseQuery } from "@/redux/api/courseApi";
import { Course } from "@/types";

const AllCourse = () => {
  const { data, isLoading, isError } = useGetAllCourseQuery({});
  console.log(data);

  // React.useEffect(() => {
  //   if (data) {
  //     const courseNames = data.map((course: Course) => course.courseName);
  //     console.log("Course Names:", courseNames);
  //   }
  // }, [data]);
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
    <Container>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          my: "30px",
          py: "10px",
          px: "8px",
          bgcolor: "#fff",
          border: "1px solid lightgray",
        }}
      >
        <Typography fontWeight="700" variant="h5" component="h5">
          All Courses
        </Typography>
        <Link href="add-course">
          <Button sx={{ bgcolor: "#132361" }}>
            <AddIcon /> Add Course
          </Button>
        </Link>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: "center",
        }}
      >
        {data &&
          data.map((course: Course) => (
            <Grid item xs={12} sm={6} md={4} key={course._id}>
              <Card sx={{ maxWidth: 420, boxShadow: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={
                      course.coursePhoto ||
                      "https://themes.hibotheme.com/hoco/wp-content/uploads/2023/01/class-2.webp"
                    }
                    alt={course.courseName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.courseName}
                    </Typography>

                    <Box>
                      <List aria-label="course details">
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Date" />
                            <ListItemText
                              primary={course.startDate}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Duration" />
                            <ListItemText
                              primary={course.courseDuration}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Instructor" />
                            <ListItemText
                              primary={course.professorName}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                        <Divider component="li" />
                        <ListItem disableGutters>
                          <Box
                            sx={{
                              display: "flex",
                              width: "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <ListItemText primary="Students" />
                            <ListItemText
                              primary={course.maximumStudents}
                              sx={{ textAlign: "end" }}
                            />
                          </Box>
                        </ListItem>
                      </List>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    sx={{ bgcolor: "#132361", mb: "10px", marginLeft: "8px" }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default AllCourse;
