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

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";
import underConst from "assets/images/illustrations/under-const-illu.png";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"

function BFMC() {
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
            BOSCH FUTURE MOBILITY CHALLENGE{""}
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

            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} lg={6}>
                <MKBox
                  display={{ xs: "none", lg: "flex" }}
                  width="calc(100% - 2rem)"
                  height="calc(100vh - 2rem)"
                  borderRadius="lg"
                  ml={2}
                  mt={2}
                  sx={{ backgroundImage: `url(${underConst})` }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={10}
                md={7}
                lg={6}
                xl={4}
                ml={{ xs: "auto", lg: 6 }}
                mr={{ xs: "auto", lg: 6 }}
              >
                <MKBox
                  bgColor="white"
                  borderRadius="xl"
                  shadow="lg"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  mt={{ xs: 20, sm: 18, md: 20 }}
                  mb={{ xs: 20, sm: 18, md: 20 }}
                  mx={3}
                >
                  <MKBox
                    bgColor="#fbec5d"
                    coloredShadow="info"
                    borderRadius="lg"
                    p={2}
                    mx={2}
                    mt={-3}
                  >
                    <MKTypography variant="h3" color="black">
                      UNDER CONSTRUCTION.
                    </MKTypography>
                  </MKBox>
                  <MKBox p={3}>
                    <MKTypography variant="body2" color="text" mb={3}>
                      This section is under construction and will be up and running ASAP.
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </Grid>
            </Grid>

            {/* <Container>
              <MKTypography variant="h3" color="black" ml={2} mb={3}>
                About the Project
              </MKTypography>
              <Grid container spacing={3}>
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
              </Grid>
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
            </Container> */}
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default BFMC;
