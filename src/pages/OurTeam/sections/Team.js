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
import team1 from "assets/images/team/ep2.jpg";
import team2 from "assets/images/team/gk.png";
import team3 from "assets/images/team/sr.jpg";
import team4 from "assets/images/team/ta.jpeg";
import team5 from "assets/images/team/dc.png";
import team6 from "assets/images/team/jk.jpg";
import team7 from "assets/images/team/ml.jpg";
import team8 from "assets/images/team/sz.jpg";

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
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 3 }}>
            <MKTypography variant="h3" color="white">
              Team Members
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Giorgos Kazazis"
                position={{ color: "#004978", label: "MPhil Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/georgekazazis/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/Maagnitude"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:csi23307@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        csi23307@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Eleftheria Papageorgiou"
                position={{ color: "#004978", label: "MPhil Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/eleftheria-papageorgiou-960b421b7/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/Eleftheria-99"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:csi23310@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        csi23310@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team3}
                name="Thanos Apostolidis"
                position={{ color: "#004978", label: "Graduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/thanos-apostolidis-3255591b1/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          {/* <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        GitHub
                        </a> */}
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:tba@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        tba@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team4}
                name="Spyridon Rallis"
                position={{ color: "#004978", label: "Graduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/spyridon-rallis-11520618a/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          {/* <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        GitHub
                        </a> */}
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:tba@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        tba@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Dimitris Charitos"
                position={{ color: "#004978", label: "MSc Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/dimitris-charitos/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/Niroth36"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:it21395@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        it21395@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team6}
                name="Jason Karafotias"
                position={{ color: "#004978", label: "Undergraduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/jason-alexander-karafotias/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/JalexBf"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:tba@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        tba@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team7}
                name="Manousos Linardakis"
                position={{ color: "#004978", label: "Graduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/manouslinard/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/manouslinard"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:tba@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        tba@hua.gr
                        </a>
                        </span> */}
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team8}
                name="Stylianos Zindros"
                position={{ color: "#004978", label: "MSc Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/stelios-zindros-5a0401298/"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                          <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                          <a
                            href="https://github.com/Stelioz"
                            target="_blank"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            GitHub
                          </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:itp23106@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        itp23106@hua.gr
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
