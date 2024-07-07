import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box } from "@mui/material";
import Image from "next/image";
import { Course } from "@/types";
import Link from "next/link";

const MAX_DETAILS_LENGTH = 100;

export default function CourseCard({ course }: { course: Course }) {
  const truncatedDetails =
    course.courseDetails.length > MAX_DETAILS_LENGTH
      ? `${course.courseDetails.slice(0, MAX_DETAILS_LENGTH)}...`
      : course.courseDetails;

  return (
    <Box sx={{ mb: 2 }}>
      <Card
        sx={{
          boxShadow: 0,
          border: "1px solid #f0f0f0", // Added light border
          overflow: "hidden",
          "&:hover": {
            "& img": {
              transform: "scale(1.1)",
            },
            "& .MuiButton-root": {
              backgroundColor: "#132361",
              color: "#fff",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%", // 16:9 aspect ratio
          }}
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="image"
            src={course.coursePhoto}
            style={{
              transition: "transform 0.3s ease-in-out",
            }}
          />
        </Box>
        <CardContent sx={{ my: "10px" }}>
          <Typography
            gutterBottom
            variant="h5" // Increase font size
            sx={{ fontWeight: 700, fontSize: "26px", color: "#132361" }}
            component="div"
          >
            {course.courseName}
          </Typography>
          <Typography
            gutterBottom
            variant="body1" // Increase font size
            sx={{ fontWeight: 400, fontSize: "16px", color: "text.secondary" }}
            component="p"
          >
            {truncatedDetails}
            {course.courseDetails.length > MAX_DETAILS_LENGTH && (
              <Link href={`/courses/${course._id}`} passHref>
                <Typography
                  component="span"
                  sx={{
                    color: "#132361",
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Read More
                </Typography>
              </Link>
            )}
          </Typography>
          <Link href={`/courses/${course._id}`} passHref>
            <Button
              sx={{
                mt: 4,
                mb: 4,
                py: 1.5,
                backgroundColor: "#CDD4FB",
                color: "#132361",
                fontWeight: 600,
                boxShadow: "none",
                transition: "background-color 0.3s, color 0.3s",
              }}
            >
              View Courses <ArrowRightAltIcon />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Box>
  );
}
