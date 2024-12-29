// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Stack,
//   TextField,
//   Typography,
//   Alert,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { signIn } from "next-auth/react";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";
// import bgImage from "../../../../public/assets/login2.jpg";
// import { loginUser } from "@/utils/actions/loginUser";
// import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import toast from "react-hot-toast";
// import { getAccessToken } from "@/utils/token";
// import { verifyToken } from "@/utils/verifyToken";
// import { CustomJwtPayload } from "@/components/Dashboard/SideBar/SideBar";

// export type FormValues = {
//   email: string;
//   password: string;
// };

// const validationSchema = z.object({
//   email: z.string().email("Please enter a valid email address!!"),
//   password: z.string().min(6, "Must be at least 6 characters"),
// });

// const LoginPage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>({
//     resolver: zodResolver(validationSchema),
//   });
//   const router = useRouter();
//   const [loginError, setLoginError] = useState<string | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const onSubmit = async (data: FormValues) => {
//     setLoginError(null); // Reset error state before each submission
//     try {
//       const res = await loginUser(data);

//       if (res.accessToken) {
//         toast.success("Successfully Login..!!!");
//         localStorage.setItem("accessToken", res.accessToken);

//         const token = getAccessToken("accessToken");
//         const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

//         if (user && user.role) {
//           switch (user.role) {
//             case "admin":
//               router.push("/dashboard/admin");
//               break;
//             case "instructor":
//               router.push("/dashboard/instructor");
//               break;
//             case "student":
//               router.push("/dashboard/student");
//               break;
//             default:
//               router.push("/shop");
//               break;
//           }
//         } else {
//           throw new Error("User information is missing or invalid");
//         }
//       } else {
//         throw new Error("Invalid login response");
//       }
//     } catch (err: any) {
//       console.error("Login error:", err.message);
//       setLoginError(err.message);
//     }
//   };

//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         width: "100%",
//         backgroundImage: `url(${bgImage.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         overflow: "hidden",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: "rgba(0, 0, 0, 0.4)",
//           backdropFilter: "blur(2px)",
//         }}
//       />
//       <Container sx={{ position: "relative", zIndex: 1 }}>
//         <Grid
//           container
//           spacing={2}
//           alignItems="center"
//           justifyContent="center"
//           sx={{
//             boxShadow: 0.5,
//             my: 5,
//           }}
//         >
//           <Grid item xs={12} md={7}>
//             <Stack
//               sx={{
//                 minHeight: { xs: "auto", md: "100vh" },
//                 justifyContent: "center",
//                 alignItems: "center",
//                 py: { xs: 4, md: 0 },
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   maxWidth: 500,
//                   width: "100%",
//                   boxShadow: 2,
//                   border: 1,
//                   borderRadius: 2,
//                   borderColor: "#9999",

//                   p: 4,
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   fontWeight={600}
//                   sx={{ color: "#000", mb: 4 }}
//                 >
//                   Hi, Welcome Back
//                 </Typography>

//                 <Box>
//                   <form onSubmit={handleSubmit(onSubmit)}>
//                     <Grid container spacing={2}>
//                       <Grid item xs={12}>
//                         <TextField
//                           {...register("email")}
//                           label="Email"
//                           type="email"
//                           variant="outlined"
//                           size="small"
//                           fullWidth
//                           error={!!errors.email}
//                           helperText={errors.email?.message}
//                         />
//                       </Grid>
//                       <Grid item xs={12}>
//                         <TextField
//                           {...register("password")}
//                           label="Password"
//                           type="password"
//                           variant="outlined"
//                           size="small"
//                           fullWidth
//                           error={!!errors.password}
//                           helperText={errors.password?.message}
//                         />
//                       </Grid>
//                     </Grid>
//                     {loginError && (
//                       <Alert severity="error" sx={{ my: 2 }}>
//                         {loginError}
//                       </Alert>
//                     )}
//                     <Button
//                       type="submit"
//                       sx={{
//                         my: 2,
//                         backgroundColor: "#132361",
//                         ":hover": { backgroundColor: "#0a1a47" },
//                       }}
//                       fullWidth
//                     >
//                       Login
//                     </Button>
//                   </form>

//                   <Stack
//                     sx={{
//                       alignItems: "center",
//                       mt: 2,
//                     }}
//                   >
//                     <Typography>
//                       Don't have an account?{" "}
//                       <Link
//                         href="/register"
//                         style={{
//                           color: "#132361",
//                           fontWeight: 600,
//                           textDecoration: "none",
//                         }}
//                       >
//                         Register
//                       </Link>
//                     </Typography>

//                     <Typography sx={{ mt: 3, fontWeight: "700" }}>
//                       Or Sign Up Using
//                     </Typography>
//                     <Stack
//                       direction="row"
//                       spacing={2}
//                       sx={{
//                         mt: 1,
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <GoogleIcon
//                         fontSize="large"
//                         onClick={() =>
//                           signIn("google", { callbackUrl: "/shop" })
//                         }
//                         sx={{ cursor: "pointer" }}
//                       />
//                       <GitHubIcon
//                         fontSize="large"
//                         onClick={() =>
//                           signIn("github", { callbackUrl: "/shop" })
//                         }
//                         sx={{ cursor: "pointer" }}
//                       />
//                     </Stack>
//                   </Stack>
//                 </Box>
//               </Box>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default LoginPage;

/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import bgImage from "../../../../public/assets/login2.jpg";
import { loginUser } from "@/utils/actions/loginUser";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { getAccessToken } from "@/utils/token";
import { verifyToken } from "@/utils/verifyToken";
import { CustomJwtPayload } from "@/components/Dashboard/SideBar/SideBar";

export type FormValues = {
  email: string;
  password: string;
};

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: FormValues) => {
    setLoginError(null);
    try {
      const res = await loginUser(data);

      if (res.accessToken) {
        toast.success("Successfully Login..!!!");
        localStorage.setItem("accessToken", res.accessToken);

        const token = getAccessToken("accessToken");
        const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

        if (user && user.role) {
          switch (user.role) {
            case "admin":
              router.push("/dashboard/admin");
              break;
            case "instructor":
              router.push("/dashboard/instructor");
              break;
            case "student":
              router.push("/dashboard/student");
              break;
            default:
              router.push("/shop");
              break;
          }
        } else {
          throw new Error("User information is missing or invalid");
        }
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err: any) {
      console.error("Login error:", err.message);
      setLoginError(err.message);
    }
  };

  const handleDemoLogin = (role: "admin" | "student") => {
    if (role === "admin") {
      setValue("email", "tasmimrahman@gmail.com");
      setValue("password", "123456");
    } else if (role === "student") {
      setValue("email", "tasmim20@gmail.com");
      setValue("password", "12345678");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(2px)",
        }}
      />
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{
            boxShadow: 0.5,
            my: 5,
          }}
        >
          <Grid item xs={12} md={7}>
            <Stack
              sx={{
                minHeight: { xs: "auto", md: "100vh" },
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 4, md: 0 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: 500,
                  width: "100%",
                  boxShadow: 2,
                  border: 1,
                  borderRadius: 2,
                  borderColor: "#999",
                  p: 4,
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  sx={{ color: "#000", mb: 4 }}
                >
                  Hi, Welcome Back
                </Typography>

                <Box>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          {...register("email")}
                          label="Email"
                          type="email"
                          variant="outlined"
                          size="small"
                          fullWidth
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          {...register("password")}
                          label="Password"
                          type="password"
                          variant="outlined"
                          size="small"
                          fullWidth
                          error={!!errors.password}
                          helperText={errors.password?.message}
                        />
                      </Grid>
                    </Grid>
                    {loginError && (
                      <Alert severity="error" sx={{ my: 2 }}>
                        {loginError}
                      </Alert>
                    )}
                    <Button
                      type="submit"
                      sx={{
                        my: 2,
                        color: "lightGray",
                        backgroundColor: "#132361",
                        ":hover": { backgroundColor: "#0a1a47" },
                      }}
                      fullWidth
                    >
                      Login
                    </Button>
                  </form>

                  {/* Demo login buttons */}
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      mt: 2,
                      mb: 4,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleDemoLogin("admin")}
                      sx={{
                        my: 2,
                        color: "lightGray",
                        backgroundColor: "#132361",
                        ":hover": { backgroundColor: "#0a1a47" },
                      }}
                    >
                      login as admin
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleDemoLogin("student")}
                      sx={{
                        my: 2,
                        color: "lightGray",
                        backgroundColor: "#132361",
                        ":hover": { backgroundColor: "#0a1a47" },
                      }}
                    >
                      login as student
                    </Button>
                  </Stack>

                  <Stack
                    sx={{
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography>
                      Don't have an account?{" "}
                      <Link
                        href="/register"
                        style={{
                          color: "#132361",
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        Register
                      </Link>
                    </Typography>

                    <Typography
                      sx={{ mt: 3, fontWeight: "700", color: "#132361" }}
                    >
                      Or Sign Up Using
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={2}
                      sx={{
                        mt: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <GoogleIcon
                        fontSize="large"
                        onClick={() =>
                          signIn("google", { callbackUrl: "/shop" })
                        }
                        sx={{ cursor: "pointer", color: "#132361" }}
                      />
                      <GitHubIcon
                        fontSize="large"
                        onClick={() =>
                          signIn("github", { callbackUrl: "/shop" })
                        }
                        sx={{ cursor: "pointer", color: "#132361" }}
                      />
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginPage;
