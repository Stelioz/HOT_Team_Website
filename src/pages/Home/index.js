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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/CenteredFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Home/sections/Counters";
import InfoCard from "pages/Home/sections/InfoCard";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";
import MainArticle from "pages/Home/components/MainArticle";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/logos/huaBanner.jpg";
import logo from "assets/images/logos/hot_white.png";

// Import necessary Font Awesome components
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faCoffee, faUser } from "@fortawesome/free-solid-svg-icons";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  // Add icons to the library
  // library.add(faCoffee, faUser);
  return (
    <>
      <DefaultNavbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
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
            {/* <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Free & Open Source Web UI Kit built over ReactJS &amp; MUI. Join over 1.6 million
              developers around the world.
            </MKTypography> */}
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
          <Grid container spacing={3} mt={2}>
            <Grid item ml={2} xs={12} sm={12} lg={12}>
              <MKTypography variant="body1" fontWeight="light" color="black">
                Harokopio Open Technologies is a dynamic team of innovation and collaboration, with members from the vibrant community of Harokopio University of
                Athens. Consisting of forward-thinking individuals passionate about technology, our team is committed to the development and promotion of open-source technologies. By fostering an environment that thrives on knowledge-sharing and creativity, HOT aims to harness the collective intelligence 
                of its members to create cutting-edge solutions. With a focus on openness, inclusivity and the democratization of technology, we strive to assist
                the technological landscape, making a meaningful contribution to the global community of open-source enthusiasts.
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
        <Counters />
        {/* <Information /> */}
        {/* <DesignBlocks /> */}
        {/* <Pages /> */}
        {/* <InfoCard /> */}
        {/* <Container sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container> */}
        <Container sx={{ mt: 1, mb: 1 }}>
          <MainArticle />
        </Container>
        <Container>
          <Grid container spacing={3} mt={1} mb={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                // variant="gradient"
                color="info"
                icon="smart_toy"
                title="Phineas"
                description="Guidance Robot Equipped with Kinect Sensor for Space Mapping and Optimal Pathfinding."
                action={{
                  type: "internal",
                  route: "projects/phineas",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="fire_extinguisher"
                title="Firefighter Turret"
                description="AI-Powered Robotic Turret: Advanced Fire Detection and Suppression System."
                action={{
                  type: "internal",
                  route: "projects/firefighter",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="satellite_alt"
                title="NOA Beyond 7I12"
                description="A Prototype Cubesat Designed for the National Observatory of Athens."
                action={{
                  type: "internal",
                  route: "projects/7I12",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="memory"
                title="Proteas"
                description="Modular Educational Robot with User-Friendly Component Rearrangement System."
                action={{
                  type: "internal",
                  route: "projects/proteas",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="memory"
                title="FOSSbot"
                description="Proteas Robot Evolution: Stable Configuration for Enhanced Educational Utility."
                action={{
                  type: "internal",
                  route: "projects/fossbot",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        {/* <Testimonials /> */}
        {/* <Download /> */}
        {/* <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox> */}
      </Card>
      <MKBox pt={0} px={0} mt={0}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Home;
