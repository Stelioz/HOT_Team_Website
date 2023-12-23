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
import MailIcon from "@mui/icons-material/Mail";

// Images
import team1 from "assets/images/team/iv.jpg";
import team2 from "assets/images/team/cc.jpg";
import team3 from "assets/images/team/ep2.jpg";
import team4 from "assets/images/team/gk.png";
import team5 from "assets/images/team/sr.jpg";
import team6 from "assets/images/team/ta.jpeg";
import team7 from "assets/images/team/jk.jpg";
import team8 from "assets/images/team/it.jpg";
import team9 from "assets/images/team/vk.jpg";
import team10 from "assets/images/team/dc.png";
import team11 from "assets/images/team/ml.jpg";
import team12 from "assets/images/team/sz.jpg";

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
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Iraklis Varlamis"
                position={{ color: "#004978", label: "Professor" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                          href="https://www.linkedin.com/in/iraklis-varlamis-64a5251/"
                          target="_blank"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                            LinkedIn
                        </a>
                        <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />
                        <a
                          href="https://github.com/username"
                          target="_blank"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        GitHub
                        </a>
                        </span>
                        {/* <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                        <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                        <a
                          href="mailto:varlamis@hua.gr"
                          style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                        >
                        varlamis@hua.gr
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
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team4}
                name="Giorgos Kazazis"
                position={{ color: "#004978", label: "MPill Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
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
                image={team3}
                name="Eleftheria Papageorgiou"
                position={{ color: "#004978", label: "MPill Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
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
                image={team6}
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
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        LinkedIn
                      </a>
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team5}
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
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
                image={team10}
                name="Dimitris Charitos"
                position={{ color: "#004978", label: "Undergraduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
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
                image={team7}
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
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        LinkedIn
                      </a>
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
                image={team9}
                name="Vaggelis Kostakis"
                position={{ color: "#004978", label: "Undergraduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        LinkedIn
                      </a>
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
                image={team11}
                name="Manousos Linardakis"
                position={{ color: "#004978", label: "Undergraduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        LinkedIn
                      </a>
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
                name="Ilias Tolos"
                position={{ color: "#004978", label: "Undergraduate Student" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                      <span style={{ display: "flex", alignItems: "center" }}>
                        <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                        <a
                        href="https://github.com/username"
                        target="_blank"
                        style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                      >
                        LinkedIn
                      </a>
                      <GitHubIcon fontSize="small" style={{ marginLeft: "10px" }} />{" "}
                      <a
                        href="https://github.com/username"
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
                image={team12}
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
