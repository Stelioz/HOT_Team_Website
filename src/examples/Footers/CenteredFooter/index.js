/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import logo from "assets/images/logos/huaLogoSmall.png"

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Divider from '@mui/material/Divider';

function CenteredFooter({ company, links, socials, light }) {
  const { href, name } = company;

  const year = new Date().getFullYear();

  // const renderLinks = links.map((link) => (
  //   <MKTypography
  //     key={link.name}
  //     component={Link}
  //     href={link.href}
  //     variant="body2"
  //     color={light ? "white" : "secondary"}
  //     fontWeight="regular"
  //   >
  //     {link.name}
  //   </MKTypography>
  // ));

  const renderSocials = socials.map((social) => (
    <MKTypography
      key={social.link}
      component={Link}
      href={social.link}
      variant="body2"
      color={light ? "white" : "secondary"}
      fontWeight="regular"
    >
      {social.icon}
    </MKTypography>
  ));

  return (
    <MKBox component="footer" py={4}>
      <Grid container justifyContent="center">
        <MKBox
          mb={7}
          sx={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            placeItems: "center",
            height: "75px",
            width: "100%",
            mt: "-25px",
            mb: "5px"
          }}
        />
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Harokopio University of Athens is a Higher Education Institution founded in 1990.
          </MKTypography>
        </Grid>
        {/* <Grid item xs={10} lg={8}>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            style={{ color: "#004978" }}
            spacing={{ xs: 2, lg: 3, xl: 6 }}
          >
            HAROKOPIO OPEN TECHNOLOGIES
          </Stack>
        </Grid> */}
        <Grid item xs={12} lg={8}>
        <Divider variant="middle" component="li" sx={{ width: '50%', margin: '0 auto' }} />
          <Stack display="flex" direction="row" justifyContent="center" spacing={3} mt={1} mb={3}>
            {renderSocials}
          </Stack>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <MKTypography variant="body2" color={light ? "white" : "secondary"}>
            Copyright &copy; {year} by HOT team.
          </MKTypography>
        </Grid>
      </Grid>
    </MKBox>
  );
}

// Setting default values for the props of CenteredFooter
CenteredFooter.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links: [
    { href: "https://www.creative-tim.com/", name: "Company" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/presentation", name: "Team" },
    { href: "https://www.creative-tim.com/templates/react", name: "Products" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
  socials: [
    { icon: <FacebookIcon fontSize="small" />, link: "https://web.facebook.com/ditharokopio/" },
    { icon: <TwitterIcon fontSize="small" />, link: "https://twitter.com/dit_hua" },
    { icon: <GitHubIcon fontSize="small" />, link: "https://github.com/" },
  ],
  light: false,
};

// Typechecking props for the CenteredFooter
CenteredFooter.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  socials: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  light: PropTypes.bool,
};

export default CenteredFooter;
