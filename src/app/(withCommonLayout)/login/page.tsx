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
} from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import { loginUser } from "@/utils/actions/loginUser";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormValues = {
  email: string;
  password: string;
};

const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address!!"),
  password: z.string().min(6, "Must be at least 6 characters"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
  });
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setLoginError(null); // Reset error state before each submission
    console.log(data);
    try {
      const res = await loginUser(data);
      console.log(res);
      if (res.accessToken) {
        alert(res.message);
        localStorage.setItem("accessToken", res.accessToken);
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error("Login error:", err.message);
      setLoginError(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
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
          <Typography variant="h5" fontWeight={100}>
            Hi, Welcome Back
          </Typography>

          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    {...register("email")}
                    sx={{ mt: 4 }}
                    label="Email"
                    type="email"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    {...register("password")}
                    sx={{ my: 2 }}
                    label="Password"
                    type="password"
                    variant="outlined"
                    size="small"
                    fullWidth={true}
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
                fullWidth={true}
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
                  Don't have an account?
                  {} <Link href="register">Register</Link>
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
                direction: "flex",
              }}
            >
              <GoogleIcon
                fontSize="large"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
              />
              <GitHubIcon
                fontSize="large"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "http://localhost:3000/dashboard",
                  })
                }
              />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
