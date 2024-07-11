"use client";
import React, { useEffect, useState } from "react";
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
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { getAccessToken } from "@/utils/token";
import { JwtPayload } from "jwt-decode";
import { verifyToken } from "@/utils/verifyToken";
import { useCreateReviewMutation } from "@/redux/api/reviewApi"; // Import your custom hook

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  feedback: z.string().min(1, "Feedback is required"),
  studentImage: z.string().min(1, "Student Image is required"),
});

type FormData = z.infer<typeof schema>;

interface CustomJwtPayload extends JwtPayload {
  name?: string;
  email?: string;
  image?: string;
}

const AddReview = () => {
  const [user, setUser] = useState<CustomJwtPayload | null>(null);
  const [createReview] = useCreateReviewMutation(); // Use the custom hook

  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      feedback: "",
      studentImage: "",
    },
  });

  useEffect(() => {
    const token = getAccessToken("accessToken");
    const verifiedUser = token
      ? (verifyToken(token) as CustomJwtPayload)
      : null;
    setUser(verifiedUser);
    if (verifiedUser && verifiedUser.image) {
      setValue("studentImage", verifiedUser.image);
    }
  }, [setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await createReview(data).unwrap();
      console.log("Review submitted successfully:", res);
      toast.success("Review submitted successfully");
      reset();
    } catch (err: any) {
      console.error("Failed to submit review:", err);
      toast.error("Failed to submit review");
    }
  };

  const handleReset = () => {
    reset();
  };

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
              Add Review
            </Typography>
          </Box>
          <Stack
            sx={{
              bgcolor: "#fff",
              p: "10px",
            }}
          >
            <Box>
              <Typography fontWeight="500" variant="h6" component="h5">
                Review Details
              </Typography>
              <Divider />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={4} sx={{ my: "10px" }}>
                  <Grid item xs={12}>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          label="Title"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          error={!!errors.title}
                          helperText={errors.title?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="feedback"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          label="About Course or Feedback"
                          variant="outlined"
                          size="small"
                          fullWidth
                          multiline
                          rows={4}
                          value={value}
                          onChange={onChange}
                          error={!!errors.feedback}
                          helperText={errors.feedback?.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Controller
                      name="studentImage"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <TextField
                          label="Student Image"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={value}
                          onChange={onChange}
                          error={!!errors.studentImage}
                          helperText={errors.studentImage?.message}
                          disabled
                        />
                      )}
                    />
                  </Grid>
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

export default AddReview;
