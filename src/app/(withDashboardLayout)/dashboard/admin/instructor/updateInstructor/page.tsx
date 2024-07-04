// import * as React from "react";
// import {
//   Modal,
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Stack,
//   Grid,
// } from "@mui/material";

// interface InstructorData {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobileNumber: string;
//   education: string;
//   department: string;
//   designation: string;
//   // Add other properties as per your data structure
// }

// interface EditInstructorModalProps {
//   open: any | never;
//   onClose: () => void;
//   instructor: InstructorData | null;
//   onUpdate: (formData: Partial<InstructorData>) => void;
//   onChange: (e: any) => void;
// }

// const EditInstructorModal: React.FC<EditInstructorModalProps> = ({
//   open,
//   onClose,
//   instructor,
//   onUpdate,
//   onChange,
// }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={onClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 600, // Increase width for two columns
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <Typography
//           id="modal-modal-title"
//           variant="h6"
//           component="h2"
//           gutterBottom
//         >
//           Edit Instructor
//         </Typography>
//         <Stack spacing={2}>
//           <Grid container spacing={2}>
//             {/* First Column */}
//             <Grid item xs={6}>
//               <TextField
//                 name="firstName"
//                 label="First Name"
//                 value={instructor?.firstName || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="lastName"
//                 label="Last Name"
//                 value={instructor?.lastName || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="email"
//                 label="Email"
//                 value={instructor?.email || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="mobileNumber"
//                 label="Mobile Number"
//                 value={instructor?.mobileNumber || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//           </Grid>
//           <Grid container spacing={2}>
//             {/* Second Column */}
//             <Grid item xs={6}>
//               <TextField
//                 name="education"
//                 label="Education"
//                 value={instructor?.education || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="department"
//                 label="Department"
//                 value={instructor?.department || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 name="designation"
//                 label="Designation"
//                 value={instructor?.designation || ""}
//                 onChange={onChange}
//                 fullWidth
//               />
//             </Grid>
//           </Grid>
//           <Button
//             onClick={() => onUpdate(instructor as Partial<InstructorData>)}
//             variant="contained"
//             color="primary"
//           >
//             Update
//           </Button>
//           <Button onClick={onClose} variant="contained" color="secondary">
//             Cancel
//           </Button>
//         </Stack>
//       </Box>
//     </Modal>
//   );
// };

// export default EditInstructorModal;
