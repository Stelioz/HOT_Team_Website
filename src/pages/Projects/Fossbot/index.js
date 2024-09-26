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
import bgImage from "assets/images/projects/fossbot/fossbot-illustration-ai.jpg";
import post1 from "assets/images/projects/fossbot/fossbot2.png";
import post2 from "assets/images/projects/fossbot/fossback.png";
import post3 from "assets/images/projects/fossbot/fossinter.jpg";
import post4 from "assets/images/projects/fossbot/map2.png";
import post5 from "assets/images/projects/fossbot/map3.png";
import post6 from "assets/images/projects/fossbot/robots.jpg";
import post7 from "assets/images/projects/fossbot/fossplat1dark.png";
import post8 from "assets/images/projects/fossbot/fossplat2.png";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"
import logo3 from "assets/images/logos/GFOSSLogoSmall.png"
import logo4 from "assets/images/logos/GSOCLogoSmall.png"

function Fossbot() {
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
            FOSSBot{""}
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
                FOSSBot Robot
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={2} textAlign="justify">
                  FOSSBot is an open-source, open-design DIY robot developed by the Greek Free and Open Source Software (GFOSS) and Harokopio University of Athens (HUA)
                  for educational purposes. It offers a comprehensive solution for STEM education, suitable for all educational levels, combining hardware, software
                  and system tools for a holistic learning experience.<br />
                  <br />
                  The robot is both affordable and highly customizable, built using low-cost electronics and 3D-printable parts. A Raspberry Pi Zero provides internet
                  connectivity and sensor support, enabling tasks like robot control and computer vision. The design features durable PETG filament plastic parts that
                  securely house the electronics, including a gyroscope, accelerometer, odometers, wheel motors, RGB LED, and various sensors. With add-ons like a pencil
                  holder for drawing, side spoilers for wheel protection and a LEGO-compatible top cover, FOSSBot offers versatility for a variety of educational uses.
                  Despite its advanced capabilities, the robot remains cost-effective, with a total price under 200€, making it accessible to a wide audience.<br />
                  <br />
                  The software stack, running on Raspbian OS, is equally versatile. It supports Python, microservices, Google Blockly and Python Flask, offering modes
                  for no-coding, block-based coding and traditional Python programming. This flexibility ensures that students of all skill levels can engage with the
                  robot, from beginners learning block-based coding to advanced users programming with Python.<br />
                  <br />
                  Designed for easy assembly, FOSSBot incorporates an articulated design that allows for flexible component arrangement. Special compartments ensure quick and
                  protected placement of components, making the assembly process stable and efficient. The use of cutting-edge technologies like a new Python library, Raspberry
                  Pi 3, and Jupyter Notebook further enhances its functionality, offering interactive code execution during lessons. This combination of innovation and practicality
                  makes FOSSBot a powerful tool for rapid deployment in diverse educational settings.
                </MKTypography>
                {/* <MKTypography variant="body1" fontWeight="light" color="black" mb={2} textAlign="justify">
                  Introducing our versatile solution with an easy and stable assembly, free from screws and tools, and an articulated design allowing flexible component
                  rearrangement to meet diverse application needs. The design incorporates special compartments for convenient placement of most components, ensuring
                  quick and protected assembly. Leveraging cutting-edge technologies, including a new Python library, Raspberry Pi 3, and Jupyter Notebook for interactive
                  code execution during lessons, our solution offers a seamless blend of innovation and practicality. Explore the efficiency of our system, designed for
                  rapid deployment and adaptable to various educational and technological requirements.
                </MKTypography> */}
              </Container>
              <PhotoProvider>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post6}>
                      <CardMedia image={post6} sx={{ height: "416px" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post1}>
                      <CardMedia image={post1} sx={{ height: "200px" }} />
                    </PhotoView>
                    <PhotoView src={post2}>
                      <CardMedia image={post2} sx={{ height: "200px" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <PhotoView src={post3}>
                      <CardMedia image={post3} sx={{ height: "200px" }} />
                    </PhotoView>
                    <Grid container spacing={0}>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post4}>
                          <CardMedia image={post4} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={6}>
                        <PhotoView src={post5}>
                          <CardMedia image={post5} sx={{ height: "200px" }} />
                        </PhotoView>
                      </Grid>
                    </Grid>
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
                        <FontAwesomeIcon icon={icon({ name: 'satellite-dish' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Sensors: Distance, Light, Noise, Temperature & Battery.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'arrows-left-right-to-line' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Dedicated Gap/Line Detection Sensors.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'layer-group' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          3-Axis Accelerometer & Gyroscope.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'volume-high' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Speaker for Sound Message Playback.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'marker' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Special Slot for Attaching a Marker.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'retweet' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "13px" }}>
                          Dedicated Loop for Towing Objects.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'cubes-stacked' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "17px" }}>
                          Surface for Attaching Lego.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'layer-group' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Detachable Cover for Easy Internal Access.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'gears' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "11px" }}>
                          Two Motors with Odometers.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'car-battery' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Three 18650 Lithium Batteries.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'bolt' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "18px" }}>
                          Direct Recharging Capability Through the Robot.
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
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "20px" }}>
                          Raspberry Pi 3/4 and Zero W.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Python and Blockly.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'laptop-code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "14px" }}>
                          Remote Control and Browser Access.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'folder-tree' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "16px" }}>
                          Dockerized Applications.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code-pull-request' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "18px" }}>
                          Updates Through GitHub.
                        </MKTypography>
                      </ListItem>
                    </List>

                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Partners
                    </MKTypography>
                    <a href="https://hot.dit.hua.gr/" target="_self" rel="noopener noreferrer">
                      <MKBox component="img" src={logo1} width="60px" sx={{ marginRight: '10px' }} />
                    </a>
                    <a href="https://www.hua.gr/en/" target="_blank" rel="noopener noreferrer">
                      <MKBox component="img" src={logo2} width="70px" sx={{ marginRight: '10px' }} />
                    </a>
                    <a href="https://gfoss.eu/" target="_blank" rel="noopener noreferrer">
                      <MKBox component="img" src={logo3} width="70px" sx={{ marginRight: '10px' }} />
                    </a>
                    <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                      <MKBox component="img" src={logo4} width="70px" sx={{ marginRight: '10px' }} />
                    </a>

                  </Container>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <MKTypography variant="h3" color="black" ml={3} mt={7} mb={3}>
                FOSSBot Platform
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={2} textAlign="justify">
                  The FOSSBot platform is a web-based solution designed to offer a seamless experience for users of all ages and backgrounds in creating, editing and
                  running programs for the FOSSBot robot. With an intuitive interface, the platform provides a variety of tools that cater to different skill levels,
                  ensuring accessibility for beginners while offering advanced options for experienced users.<br />
                  <br />
                  For users new to programming, the platform features the Blockly editor, a visual programming language where programs are created by dragging and
                  dropping blocks that represent code. This block-based approach makes coding approachable, especially for those with no prior experience. For more
                  advanced users, the platform includes the Monaco editor, a text-based editor where programs for the FOSSBot robot can be written using Python. The
                  Monaco editor delivers a real coding experience, ideal for users already familiar with text-based programming languages, allowing them to fully
                  utilize the flexibility of Python.<br />
                  <br />
                  Additionally, the FOSSBot platform features a simulator, enabling users to test and debug their programs in a virtual environment before deploying
                  them to the physical robot. This ensures that users can experiment and refine their code without needing immediate access to the robot, making the
                  learning process more efficient and versatile.
                </MKTypography>
              </Container>
              <PhotoProvider>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} lg={6}>
                    <PhotoView src={post7}>
                      <CardMedia image={post7} sx={{ height: "416px", backgroundPosition: "left center" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={6}>
                    <PhotoView src={post8}>
                      <CardMedia image={post8} sx={{ height: "416px" }} />
                    </PhotoView>
                  </Grid>
                </Grid>
              </PhotoProvider>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" mt={5}>
                  <MKTypography variant="h4" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://fossbot.gr/landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#FFA500", textDecoration: "underline" }}
                    >
                      FOSSBot
                    </a>{" "}
                    website.
                  </MKTypography>
                </MKBox>
              </Container>
            </Container>
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default Fossbot;