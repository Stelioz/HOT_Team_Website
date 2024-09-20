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
import bgImage from "assets/images/projects/noa/noa1.jpg";
import post1 from "assets/images/projects/noa/noa1.jpg";
import post2 from "assets/images/projects/noa/noa3.png";
import post3 from "assets/images/projects/noa/noa2.png";
// import post4 from "assets/images/examples/blog2.jpg";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"
import logo3 from "assets/images/logos/NOA-logo.png"

function Noa() {
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
            NOA BEYOND 7I12{""}
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
                  Introducing our state-of-the-art satellite equipped with cutting-edge features for fire detection. Utilizing a camera for precise identification, the
                  satellite boasts a foldable panel and communication antenna system for operational flexibility. It incorporates solar panels for sustainable charging
                  and a multitude of sensors for comprehensive data acquisition. The advanced image and data telemetry system ensures real-time monitoring. Powered by
                  Python and C, with Arduino managing electronics and control, and the Nvidia Jetson Nano facilitating AI fire detection, our satellite is designed for
                  seamless remote control via a PC program. Explore the future of fire monitoring technology with our innovative and efficient satellite solution.
                </MKTypography>
              </Container>
              <PhotoProvider>
                <Grid container spacing={0}>
                  {/* <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post1}>
                      <CardMedia image={post1} sx={{ height: "416px" }} />
                    </PhotoView>
                  </Grid> */}
                  <Grid item xs={12} sm={6} lg={3}>
                    <PhotoView src={post2}>
                      <CardMedia image={post2} sx={{ height: "200px" }} />
                    </PhotoView>
                    <PhotoView src={post3}>
                      <CardMedia image={post3} sx={{ height: "200px" }} />
                    </PhotoView>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={9}>
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
                        <FontAwesomeIcon icon={icon({ name: 'satellite-dish' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Multiple Sensors for Data Acquisition.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'tower-broadcast' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Foldable Panel and Communication Antenna.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'solar-panel' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Solar Panel Charging.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'diagram-project' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Image and Data Telemetry System.
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
                        <FontAwesomeIcon icon={icon({ name: 'desktop' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Remote Control via a PC Program.
                        </MKTypography>
                      </ListItem>
                    </List>

                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Partners
                    </MKTypography>
                    <MKBox component="img" src={logo1} width="60px" sx={{ marginRight: '10px' }} />
                    <MKBox component="img" src={logo2} width="70px" sx={{ marginRight: '10px' }} />
                    <MKBox component="img" src={logo3} width="70px" sx={{ marginRight: '10px' }} />
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

export default Noa;
