/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import profilePicture from "assets/images/bruce-mars.jpg";

function Profile() {
  return (
    <MKBox component="section">
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/* <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox> */}
          <Grid container justifyContent="center" py={0}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                {/* <MKTypography variant="h3">Phineas</MKTypography> */}
                {/* <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton> */}
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Introducing our advanced robot, powered by Raspberry Pi 3 and Kinect Sensor with
                Python and Pygame. Packed with features like speech recognition, space mapping,
                and A* algorithm for precise navigation, it excels in tasks from line following
                to face detection. Enjoy remote control movement and full independence from a
                central computer for a seamless user experience.
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
