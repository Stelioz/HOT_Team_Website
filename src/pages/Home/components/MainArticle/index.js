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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/illustrations/fossbot-illu.png";
import { Link } from "react-router-dom";

function MainArticle() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={8} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography
            component={Link}
            to="projects/fossbot"
            target="_self"
            variant="h1" 
            color="white"
            mb={2}
            mt={1}>
            FOSSBot
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={6} textAlign="justify">
            FOSSBot is an open source and open design DIY robot that has been developed by Greek Free & Open Source Software
            (GFOSS) and Harokopio University of Athens (HUA) for educational purposes. The robot does not come alone, but comprises
            multiple software and system solutions that provide a holistic approach for STEM education at all educational levels.
          </MKTypography>
          <MKTypography
            component={Link} // Use Link component for navigation
            to="https://fossbot.gr/landing-page" // Use "to" instead of "href" for React Router
            target="_blank"
            // rel="noreferrer"
            variant="body1"
            color="white"
            fontWeight="bold"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Visit FOSSBot Platform <Icon sx={{ fontWeight: "bold", color: "#FFA500"}}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default MainArticle;
