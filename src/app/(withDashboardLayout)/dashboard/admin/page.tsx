import { Card, Container } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import HocoSurveyBarChart from "./chart/barChart/page";
import PieChartWithCenterLabel from "./chart/pieChart/page";
import CardComponent from "./card/page";
import DataTables from "./dataTable/page";

const AdminPage = () => {
  return (
    <div>
      <Container>
        <CardComponent />
        <Grid container spacing={4}>
          <Grid style={{ marginLeft: "-20px" }} xs={12} md={6} sm={12}>
            <Card variant="outlined" sx={{ mt: "50px" }}>
              <HocoSurveyBarChart />
            </Card>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sm={12}
            sx={{ mt: "50px" }}
            style={{ marginLeft: "-0px" }}
          >
            <Card variant="outlined" sx={{ pb: "140px" }}>
              <PieChartWithCenterLabel />
            </Card>
          </Grid>
        </Grid>
        <DataTables />
      </Container>
    </div>
  );
};

export default AdminPage;
