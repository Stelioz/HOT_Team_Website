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
import bgImage from "assets/images/projects/phineas/phineashelllo.jpg";
import post1 from "assets/images/projects/phineas/phim1.jpg";
import post2 from "assets/images/projects/phineas/phineas.png";
import post3 from "assets/images/projects/phineas/phineashello2.png";
import post4 from "assets/images/projects/phineas/phin2.png";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"

function Phineas() {
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
            PHINEAS{""}
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
                  Phineas is a fully 3D-printed robot, boasting cutting-edge technologies.
                  It is equipped with speech recognition and voice commands, alongside a user-friendly
                  touch-screen interface, enhancing its interactive capabilities. Additionally,
                  it features space mapping technology for efficient navigation. The core of Phineas
                  includes a Raspberry Pi 3 and a Kinect Sensor, enabling a range of robust
                  functionalities powered by Python and Pygame. This robot is adept at various
                  tasks such as line following, visual element detection (like ArUco markers),
                  QR code reading, and text-to-speech conversion. Navigation is streamlined
                  using the A* algorithm, and movement precision is maintained through a
                  PID controller. Phineas also incorporates face detection, allowing it to
                  intelligently track individuals. Finally, it can be operated with an Xbox 360
                  controller and operates independently, without needing a central computer.
                </MKTypography>
              </Container>
              <PhotoProvider>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post1}>
                      <CardMedia image={post1} sx={{ height: "416px" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post2}>
                      <CardMedia image={post2} sx={{ height: "200px" }} />
                    </PhotoView>
                    <PhotoView src={post3}>
                      <CardMedia image={post3} sx={{ height: "200px" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>

                    <iframe width="600" height="100%" src="https://www.youtube.com/embed/ShOAGPW5iQc?si=bLKS2PCcfZqvxurz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    {/* <PhotoView src={post4}>
                        <CardMedia image={post4} sx={{ height: "416px" }} />
                    </PhotoView> */}
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
                        <FontAwesomeIcon icon={icon({ name: 'microphone' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "20px" }}>
                          Speech Recognition and Voice Commands.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'chalkboard-user' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          User-Friendly Interface.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'map' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Space Mapping.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'lines-leaning' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "22px" }}>
                          Line Follower.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'compass' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "17px" }}>
                          Detection and Orientation Towards Visual Elements.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'qrcode' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "18px" }}>
                          QR-Code Reading.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'comments' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Text-to-Speech Conversion.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Use of A* Algorithm with Depth Image for Spatial Navigation.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Use of PID Controller Algorithm for Precision in Movement.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'face-smile' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "16px" }}>
                          Face Detection with the Ability to Follow it.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'house-laptop' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Remote Control Movement.
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
                          Raspberry Pi 3.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'eye' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Microsoft Kinect Sensor.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Python with Pygame.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'laptop-code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Completely Independent from a Central Computer.
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

export default Phineas;
