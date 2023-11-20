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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import AppsIcon from "@mui/icons-material/Apps";

// Author page sections
// import Profile from "pages/LandingPages/Author/sections/Profile";
// import Posts from "pages/LandingPages/Author/sections/Posts";
// import Contact from "pages/LandingPages/Author/sections/Contact";
// import Footer from "pages/LandingPages/Author/sections/CenteredFooter";
import Footer from "examples/Footers/CenteredFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { brand_icon } from '@fortawesome/free-brands-svg-icons';

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/testimonial-6-3.jpg";
import post3 from "assets/images/examples/blog-9-4.jpg";
import post4 from "assets/images/examples/blog2.jpg";

function Phineas() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
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
      <MKTypography variant="h3" ml={2} mb={3}>
          About the Project
      </MKTypography>
        <Grid container spacing={3}>
        <Grid item ml={2} xs={12} sm={12} lg={12}>
            <MKTypography variant="body1" fontWeight="light" color="text">
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
  <MKTypography variant="h4" ml={0} mt={5} mb={2}>
    Specifications
  </MKTypography>

  <List>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'microphone'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "20px" }}>
       Speech Recognition and Voice Commands.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'chalkboard-user'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
       User-Friendly Interface.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'map'})} style={{ color: "#095bc6" }} />
      <MKTypography variant="body1" sx={{ marginLeft: "12px" }}>
       Space Mapping.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'lines-leaning'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "22px" }}>
       Line Follower.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'compass'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "17px" }}>
       Detection and Orientation Towards Visual Elements.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'qrcode'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "18px" }}>
       QR-Code Reading.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'comments'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
       Text-to-Speech Conversion.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'code'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
       Use of A* Algorithm with Depth Image for Spatial Navigation.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'code'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
       Use of PID Controller Algorithm for Precision in Movement.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'face-smile'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "16px" }}>
       Face Detection with the Ability to Follow it.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'house-laptop'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
       Remote Control Movement.
      </MKTypography>
    </ListItem>
  </List>
</Container>
</Grid>

<Grid item xs={12} sm={6}>
  <Container>
  <MKTypography variant="h4" ml={0} mt={5} mb={2}>
    Programming Stack
  </MKTypography>

  <List>
  <ListItem>
    <FontAwesomeIcon icon={icon({name: 'microchip'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
      Raspberry Pi 3.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'eye'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
    Microsoft Kinect Sensor.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'code'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
    Python with Pygame.
      </MKTypography>
    </ListItem>
    <ListItem>
    <FontAwesomeIcon icon={icon({name: 'laptop-code'})} style={{ color: "#095bc6" }} />
    <MKTypography variant="body1" sx={{ marginLeft: "10px" }}>
    Completely Independent from a Central Computer.
      </MKTypography>
    </ListItem>
  </List>
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
