import { Box, Card, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Groups2Icon from "@mui/icons-material/Groups2";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const CardComponent = () => {
  return (
    <Stack style={{ marginLeft: "-20px" }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={3}>
          <Card
            variant="outlined"
            sx={{ p: "20px", backgroundColor: "#6a73fa" }}
          >
            <Stack spacing={2} direction="row">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <Groups2Icon />
                </Box>
              </Box>

              <Box sx={{ mt: "20px", color: "#fff" }}>
                <Typography component="p" sx={{ fontWeight: "500" }}>
                  TOTAl STUDENT
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "600" }}
                >
                  3180
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  80% Increase in 20 Days
                </Typography>
              </Box>
            </Stack>
            {/* <Typography>Total Student</Typography> */}
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          {" "}
          <Card
            variant="outlined"
            sx={{ p: "20px", backgroundColor: "#6e418a" }}
          >
            <Stack spacing={2} direction="row">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <PersonOutlineOutlinedIcon />
                </Box>
              </Box>

              <Box sx={{ mt: "20px", color: "#fff" }}>
                <Typography component="p" sx={{ fontWeight: "600" }}>
                  NEW STUDENT
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500" }}
                >
                  360
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  50% Increase in 20 Days
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          {" "}
          <Card
            variant="outlined"
            sx={{ p: "20px", backgroundColor: "#673bb7" }}
          >
            <Stack spacing={2} direction="row">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <MenuBookOutlinedIcon />
                </Box>
              </Box>

              <Box sx={{ mt: "20px", color: "#fff" }}>
                <Typography component="p" sx={{ fontWeight: "600" }}>
                  TOTAl COURSE
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500" }}
                >
                  28
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  60% Increase in 20 Days
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
        <Grid xs={12} sm={12} md={3}>
          {" "}
          <Card
            variant="outlined"
            sx={{ p: "20px", backgroundColor: "#03008d" }}
          >
            <Stack spacing={2} direction="row">
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  <AttachMoneyOutlinedIcon />
                </Box>
              </Box>

              <Box sx={{ mt: "20px", color: "#fff" }}>
                <Typography component="p" sx={{ fontWeight: "600" }}>
                  FREE COLLECTION
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ fontWeight: "500" }}
                >
                  1290$
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  35% Increase in 20 Days
                </Typography>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CardComponent;
