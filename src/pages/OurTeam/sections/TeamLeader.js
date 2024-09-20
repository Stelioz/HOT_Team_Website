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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import MailIcon from "@mui/icons-material/Mail";

// Images
import lead1 from "assets/images/team/cc.jpg";


function Team() {
  return (
    <MKBox
      component="section"
      bgColor="#004978"
      position="relative"
      py={5}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} sx={{ mb: 0 }}>
            <MKTypography variant="h3" color="white">
              Team Leader
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={lead1}
                name="Christos Chronis"
                position={{ color: "#004978", label: "PhD Candidate" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/chr-chronis/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/chronis10"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:chronis@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        chronis@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
