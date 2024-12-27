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
import LazyGif from "../../../../public/assets/coming2.gif"; // Assuming lazy.gif is located in the public folder
import Image from "next/image";

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
    setLoginError(null); // Reset error state before each submission
    try {
      const res = await loginUser(data);

      if (res.accessToken) {
        toast.success("Successfully Login..!!!");
        localStorage.setItem("accessToken", res.accessToken);

        const token = getAccessToken("accessToken");
        const user = token ? (verifyToken(token) as CustomJwtPayload) : null;

        if (user && user.role) {
          console.log("User role:", user.role); // Logging the role

          // Role-based redirection
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

  // Prevent mismatches during initial render
  if (!isMounted) {
    return null;
  }

  return (
    <Container sx={{ mt: isMobile ? 5 : 0 }}>
      <Stack
        sx={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Image src={LazyGif} alt="Lazy GIF" width={300} height={300} />
              <Typography variant="body2" sx={{ fontStyle: "italic", mt: 2 }}>
                If you are lazy 😴 like me to create a new account😫 ,
                <br /> then join using the following credentials:
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  <strong>Admin:</strong> tasmimrahman@gmail.com / 123456
                </Typography>
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                <strong>Student:</strong> tasmim20@gmail.com / 12345678
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                <strong>Instructor:</strong> rahman20@gmail.com / 12345678
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: 500,
                width: "100%",
                boxShadow: 1,
                borderRadius: 1,
                p: 5,
                mb: 5,
                ...(isMobile && { mt: 5 }),
              }}
            >
              <Typography variant="h5" fontWeight={600} sx={{ color: "#000" }}>
                Hi, Welcome Back
              </Typography>

              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        {...register("email")}
                        sx={{ mt: 4 }}
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
                        sx={{ my: 2 }}
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
                    sx={{ my: 2, backgroundColor: "#132361" }}
                    fullWidth
                  >
                    Login
                  </Button>
                  <Stack
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      py: "10px",
                    }}
                  >
                    <Typography component="p" sx={{ fontSize: 17, mb: "5px" }}>
                      Do not have an account?{" "}
                      <Link
                        href="/register"
                        style={{ color: "#132361", fontWeight: 800 }}
                      >
                        Register
                      </Link>
                    </Typography>
                    <Typography
                      sx={{ mt: "20px", fontWeight: "700" }}
                      component="p"
                    >
                      Or Sign Up Using
                    </Typography>
                  </Stack>
                </form>

                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <GoogleIcon
                    fontSize="large"
                    onClick={() =>
                      signIn("google", {
                        callbackUrl:
                          "https://hoco-education-client.vercel.app/shop",
                      })
                    }
                  />
                  <GitHubIcon
                    fontSize="large"
                    onClick={() =>
                      signIn("github", {
                        callbackUrl:
                          "https://hoco-education-client.vercel.app/shop",
                      })
                    }
                  />
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default LoginPage;
