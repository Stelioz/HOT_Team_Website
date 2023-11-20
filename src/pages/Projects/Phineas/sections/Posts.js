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
import CardMedia from "@mui/material/CardMedia";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Places() {
  return (
    <MKBox component="section" py={3}>
      
      <Container>
      <MKTypography variant="h2" ml={2} mb={3}>
          Phineas
      </MKTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <CardMedia image={post1} sx={{ height: "200px" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardMedia image={post2} sx={{ height: "200px" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardMedia image={post3} sx={{ height: "200px" }} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <CardMedia image={post4} sx={{ height: "200px" }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <MKTypography variant="body1" fontWeight="light" color="text">
                Introducing our advanced robot, powered by Raspberry Pi 3 and Kinect Sensor with
                Python and Pygame. Packed with features like speech recognition, space mapping,
                and A* algorithm for precise navigation, it excels in tasks from line following
                to face detection. Enjoy remote control movement and full independence from a
                central computer for a seamless user experience.
              </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
