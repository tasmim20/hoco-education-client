"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Divider, Stack, Typography } from "@mui/material";

const surveyData = {
  "Coding & Tech": [4, 4, 3.5, 3],
  "Science & Nature": [3.5, 3, 2, 1],
  "English Language": [3.5, 3.5, 3, 2],
  "Life Skills": [2, 3, 2.5, 1],
  "Art & Design": [1, 3, 1.5, 1],
  "Health & Wellness": [2, 2.5, 3, 2.5],
};

const xLabels = ["Year 1", "Year 2", "Year 3", "Year 4"];

export default function HocoSurveyBarChart() {
  return (
    <Stack>
      <BarChart
        width={500}
        height={400}
        series={[
          {
            data: surveyData["Coding & Tech"],
            label: "Coding & Tech",
            id: "ctId",
            color: "#82ca9d",
          },
          {
            data: surveyData["Science & Nature"],
            label: "Science & Nature",
            id: "snId",
            color: "#1586fd",
          },
          {
            data: surveyData["English Language"],
            label: "English Language",
            id: "elId",
            color: "#6e418a",
          },
          {
            data: surveyData["Life Skills"],
            label: "Life Skills",
            id: "lsId",
            color: "#03008d",
          },
          {
            data: surveyData["Art & Design"],
            label: "Art & Design",
            id: "adId",
            color: "#2731c8",
          },
          {
            data: surveyData["Health & Wellness"],
            label: "Health & Wellness",
            id: "hwId",
            color: "#132361",
          },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Stack>
  );
}
