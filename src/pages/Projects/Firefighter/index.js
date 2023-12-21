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
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Footer from "examples/Footers/CenteredFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/projects/firefighter/fire1.png";
import post1 from "assets/images/projects/firefighter/fire1.png";
import post2 from "assets/images/projects/firefighter/fire1.png";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"

function Firefighter() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            textAlign="center"
            mt={-2}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            FIREFIGHTER TURRET{""}
          </MKTypography>
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

          <MKBox component="section" py={3}>

            <Container>
              <MKTypography variant="h3" color="black" ml={3} mb={3}>
                About the Project
              </MKTypography>
              <Container>
                  <MKTypography variant="body1" fontWeight="light" color="black" mb={2}>
                    Introducing our cutting-edge fire detection system, featuring an AI model based on YOLO V3 for precise identification with two degrees of freedom
                    targeting. This innovative system employs a camera for detection, verification through a laser, and seamless integration with a continuous supply
                    of firefighting fluid, ensuring swift response. Engineered with adjustable flow and designed for easy reproduction using fire-resistant materials,
                    our solution prioritizes safety. Powered by Python and C, with Arduino for electronics and control, and leveraging the capabilities of Nvidia Jetson
                    Nano for AI fire detection, our system operates with full autonomy, providing a robust and reliable fire safety solution for diverse environments.
                  </MKTypography>
                </Container>
                <PhotoProvider>
                <Grid container spacing={0}>
                <Grid item xs={12} sm={12} lg={12}>
                    <PhotoView src={post1}>
                      <CardMedia image={post1} sx={{ height: "416px" }} />
                    </PhotoView>
                    {/* <Grid container spacing={0}>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post4}>
                          <CardMedia image={post4} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post2}>
                          <CardMedia image={post2} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                    </Grid> */}
                  </Grid>
                  {/* <Grid item xs={12} sm={6} lg={6}>
                    <PhotoView src={post1}>
                      <CardMedia image={post1} sx={{ height: "416px" }} />
                    </PhotoView>
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post4}>
                          <CardMedia image={post4} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post2}>
                          <CardMedia image={post2} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                    </Grid>
                  </Grid> */}
                </Grid>
              </PhotoProvider>
            </Container>

            <Container>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Container>
                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Specifications
                    </MKTypography>

                    <List>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'fire' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "20px" }}>
                          Fire Detection Using a Camera Device.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'chalkboard-user' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          AI Model Based on YOLO V3.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'up-down-left-right' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Targeting Capability with 2 Degrees of Freedom.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'bullseye' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "18px" }}>
                          Verification Using a Laser Device.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'link' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "13px" }}>
                          Connection to a Continuous Supply of Firefighting Fluid.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'bars-staggered' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "17px" }}>
                          Adjustable Flow.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'diagram-predecessor' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Designed for Easy Reproduction with Fire-Resistant Materials.
                        </MKTypography>
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Container>
                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Programming Stack
                    </MKTypography>

                    <List>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'microchip' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Arduino for Electronics and Control.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'eye' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Nvidia Jetson Nano for AI Fire Detection.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Python and C.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'laptop-code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Completely Independent Operation.
                        </MKTypography>
                      </ListItem>
                    </List>

                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Partners
                    </MKTypography>
                    <MKBox component="img" src={logo1} width="60px" sx={{ marginRight: '10px' }} />
                    <MKBox component="img" src={logo2} width="70px" sx={{ marginRight: '10px' }} />
                  </Container>
                </Grid>
              </Grid>
            </Container>
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default Firefighter;
