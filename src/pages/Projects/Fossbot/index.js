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
import bgImage from "assets/images/city-profile.jpg";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";
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
    <MKTypography variant="body1" fontWeight="light" color="black" mb={2}>
      Introducing our versatile solution with an easy and stable assembly, free from screws and tools, and an articulated design allowing flexible component
      rearrangement to meet diverse application needs. The design incorporates special compartments for convenient placement of most components, ensuring
      quick and protected assembly. Leveraging cutting-edge technologies, including a new Python library, Raspberry Pi 3, and Jupyter Notebook for interactive
      code execution during lessons, our solution offers a seamless blend of innovation and practicality. Explore the efficiency of our system, designed for
      rapid deployment and adaptable to various educational and technological requirements.
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
        <PhotoView src={post1}>
          <CardMedia image={post1} sx={{ height: "200px" }} />
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
        <MKBox component="img" src={logo1} width="60px" sx={{ marginRight: '10px' }} />
        <MKBox component="img" src={logo2} width="70px" sx={{ marginRight: '10px' }} />
        <MKBox component="img" src={logo3} width="70px" sx={{ marginRight: '10px' }} />
        <MKBox component="img" src={logo4} width="70px" sx={{ marginRight: '10px' }} />
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

export default Fossbot;