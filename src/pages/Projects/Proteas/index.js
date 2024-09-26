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
import bgImage from "assets/images/projects/proteas/prot1.png";
import post1 from "assets/images/projects/proteas/prot1.png";
import post2 from "assets/images/projects/proteas/prot2.png";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "assets/images/examples/blog2.jpg";
import logo1 from "assets/images/logos/hot_transp.png"
import logo2 from "assets/images/logos/huaLogoSmall.png"
import logo3 from "assets/images/logos/GFOSSLogoSmall.png"
import logo4 from "assets/images/logos/GSOCLogoSmall.png"

function Proteas() {
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
            PROTEAS{""}
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
                <MKTypography variant="body1" fontWeight="light" color="black" mb={2} textAlign="justify">
                  Introducing our versatile solution with an easy and stable assembly, free from screws and tools, and an articulated design allowing flexible component
                  rearrangement to meet diverse application needs. The design incorporates special compartments for convenient placement of most components, ensuring
                  quick and protected assembly. Leveraging cutting-edge technologies, including a new Python library, Raspberry Pi 3, and Jupyter Notebook for interactive
                  code execution during lessons, our solution offers a seamless blend of innovation and practicality. Explore the efficiency of our system, designed for
                  rapid deployment and adaptable to various educational and technological requirements.
                </MKTypography>
              </Container>
              <PhotoProvider>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} lg={6}>
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
                  <Grid item xs={12} sm={6} lg={6}>
                    <PhotoView src={post2}>
                      <CardMedia image={post2} sx={{ height: "416px" }} />
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
                        <FontAwesomeIcon icon={icon({ name: 'vector-square' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Articulated Design.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'swatchbook' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Quick Assembly.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'layer-group' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Easy and Stable Assembly Without Screws or Tools.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'retweet' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Rearrangeable Components According to Application Needs.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'check-to-slot' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Dedicated Component Compartments for Easy Placement.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'bolt' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Protection of Electronic Components.
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
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Raspberry Pi 3.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          New Python Library.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        <FontAwesomeIcon icon={icon({ name: 'clipboard' })} style={{ color: "#004978" }} />
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "20px" }}>
                          Jupyter Notebook for Direct Code Execution.
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
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default Proteas;
