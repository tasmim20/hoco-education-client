/* eslint-disable react/no-unescaped-entities */
// "use client";
// import { registerUser } from "@/utils/actions/registerUser";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useForm } from "react-hook-form";

// export type UserData = {
//   name: string;
//   image: string;
//   userName: string;
//   email: string;
//   password: string;
// };

// const RegisterPage = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<UserData>();
//   const router = useRouter();
//   const onSubmit = async (data: UserData) => {
//     console.log(data);
//     try {
//       const res = await registerUser(data);
//       console.log(res);
//       if (res.success) {
//         alert(res.message);
//         router.push("/login");
//       }
//     } catch (err: any) {
//       console.error(err.message);
//       throw new Error(err.message);
//     }
//   };
//   return (
//     <Container>
//       <Stack
//         sx={{ height: "130vh", justifyContent: "center", alignItems: "center" }}
//       >
//         <Box
//           sx={{
//             maxWidth: 500,
//             width: "100%",
//             boxShadow: 1,
//             borderRadius: 1,
//             p: 8,
//           }}
//         >
//           <Box>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <Grid container spacing={2}>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{ mt: 4, mb: 2 }}
//                     label="Your Name"
//                     type="name"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                     {...register("name")}
//                   />
//                 </Grid>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{ my: 2 }}
//                     label="Your Image"
//                     type=""
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                     {...register("image")}
//                   />
//                 </Grid>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{ my: 2 }}
//                     label="User Name"
//                     type="userName"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                     {...register("userName")}
//                   />
//                 </Grid>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{ my: 2 }}
//                     label="Email"
//                     type="email"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                     {...register("email")}
//                   />
//                 </Grid>
//                 <Grid item md={12} sm={12} xs={12}>
//                   <TextField
//                     sx={{ my: 2 }}
//                     label="Password"
//                     type="password"
//                     variant="outlined"
//                     size="small"
//                     fullWidth={true}
//                     {...register("password")}
//                   />
//                 </Grid>
//               </Grid>
//               <Box sx={{ py: "10px" }}>
//                 <Typography component="p" sx={{ fontSize: 17 }}>
//                   By signing up, I agree with the website's{" "}
//                 </Typography>
//                 <Typography variant="h6" sx={{ fontSize: 17 }}>
//                   Terms and Conditions{" "}
//                 </Typography>
//               </Box>
//               <Button
//                 sx={{ my: 2, backgroundColor: "#132361" }}
//                 fullWidth={true}
//                 type="submit"
//               >
//                 Register
//               </Button>

//               <Stack
//                 sx={{
//                   justifyContent: "center",
//                   alignItems: "center",
//                   py: "10px",
//                 }}
//               >
//                 <Typography component="p" sx={{ pt: "10px", fontSize: 17 }}>
//                   Already have an account?
//                   <Link href="login">Login</Link>
//                 </Typography>
//               </Stack>
//             </form>
//           </Box>
//         </Box>
//       </Stack>
//     </Container>
//   );
// };

// export default RegisterPage;

/* eslint-disable react/no-unescaped-entities */
"use client";
import { registerUser } from "@/utils/actions/registerUser";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

export type UserData = {
  name: string;
  image: string;
  userName: string;
  email: string;
  password: string;
};

const validationSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  image: z.string().url({ message: "Must be a valid URL" }),
  userName: z.string().min(1, { message: "Username is required" }),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(validationSchema),
  });
  const router = useRouter();
  const [registerError, setRegisterError] = useState<string | null>(null);

  const onSubmit = async (data: UserData) => {
    setRegisterError(null); // Reset error state before each submission
    console.log(data);
    try {
      const res = await registerUser(data);
      console.log(res);
      if (res.success) {
        toast.success("Successfully registered..!!!");
        router.push("/login");
      }
    } catch (err: any) {
      console.error("Registration error:", err.message);
      setRegisterError(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "130vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: 500,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 8,
          }}
        >
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    sx={{ mt: 4, mb: 2 }}
                    label="Your Name"
                    type="name"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    sx={{ my: 2 }}
                    label="Your Image"
                    type="url"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("image")}
                    error={!!errors.image}
                    helperText={errors.image?.message}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    sx={{ my: 2 }}
                    label="User Name"
                    type="text"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("userName")}
                    error={!!errors.userName}
                    helperText={errors.userName?.message}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    sx={{ my: 2 }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    sx={{ my: 2 }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                </Grid>
              </Grid>
              {registerError && (
                <Alert severity="error" sx={{ my: 2 }}>
                  {registerError}
                </Alert>
              )}
              <Box sx={{ py: "10px" }}>
                <Typography component="p" sx={{ fontSize: 17 }}>
                  By signing up, I agree with the website's{" "}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 17 }}>
                  Terms and Conditions{" "}
                </Typography>
              </Box>
              <Button
                sx={{ my: 2, backgroundColor: "#132361" }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  py: "10px",
                }}
              >
                <Typography component="p" sx={{ pt: "10px", fontSize: 17 }}>
                  Already have an account?
                  <Link
                    href="login"
                    style={{ color: "#132361", fontWeight: 800 }}
                  >
                    Login
                  </Link>
                </Typography>
              </Stack>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
