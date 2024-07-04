"use client";
import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const data = [
  { value: 30, label: "Coding & Tech" },
  { value: 20, label: "Science & Nature" },
  { value: 15, label: "English Language" },
  { value: 15, label: "Life Skills" },
  { value: 10, label: "Art & Design" },
  { value: 10, label: "Health & Wellness" },
];

const size = {
  width: 500,
  height: 200,
};

const StyledText = styled("text")(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 17,
}));

function PieCenterLabel({ children }: { children: React.ReactNode }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export default function PieChartWithCenterLabel() {
  return (
    <Stack sx={{ mt: "60px" }}>
      <PieChart series={[{ data, innerRadius: 70 }]} {...size}>
        <PieCenterLabel>Priority</PieCenterLabel>
      </PieChart>
    </Stack>
  );
}
