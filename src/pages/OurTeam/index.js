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
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/CenteredFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/OurTeam/sections/Counters";
import InfoCard from "pages/OurTeam/sections/InfoCard";
import Team from "pages/OurTeam/sections/Team";
import Information from "pages/OurTeam/sections/Information";
import DesignBlocks from "pages/OurTeam/sections/DesignBlocks";
import Pages from "pages/OurTeam/sections/Pages";
import Testimonials from "pages/OurTeam/sections/Testimonials";
import Download from "pages/OurTeam/sections/Download";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import MainArticle from "pages/OurTeam/components/MainArticle";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/logos/huaBanner.jpg";
import logo from "assets/images/logos/hot_white.png";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import THpost1 from "assets/images/examples/THtestimonial-6-2.png";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

// Import necessary Font Awesome components
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OurTeam() {
  // Add icons to the library
  // library.add(faCoffee, faUser);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />

      {/* Website Header */}
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { rgba, linearGradient } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      // sx={{
      //   backgroundImage: `url(${bgImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "top",
      //   display: "grid",
      //   placeItems: "center",
      // }}
      >
        {/* Website main title */}
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKBox
              mb={7}
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                placeItems: "center",
                height: "150px",
                width: "100%",
              }}
            />
            <MKTypography
              variant="h1"
              color="white"
              textAlign="center"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              HAROKOPIO OPEN TECHNOLOGIES{""}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
              developers around the world.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <MKTypography variant="h3" color="black" ml={2} mb={3}>
            Our Team
          </MKTypography>
          <Grid container spacing={3} mb={3}>
            <Grid item ml={2} xs={12} sm={12} lg={12}>
              <MKTypography variant="body1" fontWeight="light" color="black">
                Introducing a cutting-edge robot meticulously crafted with advanced technologies, this innovative creation boasts an impressive array of features.
                Equipped with speech recognition and voice commands, a user-friendly interface, and the capability for space mapping, our robot is designed for
                seamless interaction. The integration of a Raspberry Pi 3 and a Kinect Sensor enables robust functionality utilizing Python with Pygame. The robot
                excels in diverse tasks, from following lines and detecting visual elements to reading QR-Codes and converting text to speech. Powered by the A*
                The PID controller ensures accuracy in movement, while face detection allows the robot to intelligently follow individuals. With the implementation
                of remote control movement and the notable feature of complete independence from a central computer, this robot represents a groundbreaking fusion of
                cutting-edge technologies for an exceptional user.
              </MKTypography>
            </Grid>
          </Grid>
        </Container>

        <Team />

        <Container>
          <PhotoProvider>
          <Grid container spacing={3} mt={1} mb={4}>          
            <Grid item xs={12} sm={6} lg={3}>
            <PhotoView src={post1}>
              <CardMedia image={post1} sx={{ height: "200px" }} />
              </PhotoView>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
            <PhotoView src={post2}>
              <CardMedia image={post2} sx={{ height: "200px" }} />
              </PhotoView>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
            <PhotoView src={post3}>
              <CardMedia image={post3} sx={{ height: "200px" }} />
              </PhotoView>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
            <PhotoView src={post4}>
              <CardMedia image={post4} sx={{ height: "200px" }} />
              </PhotoView>
            </Grid>
          </Grid>
          </PhotoProvider>
        </Container>

      </Card>
      <MKBox pt={0} px={0} mt={0}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default OurTeam;
