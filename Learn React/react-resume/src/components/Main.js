import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard } from "mdb-react-ui-kit";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Skills from "./sections/Skills";
import BasicInfo from "./sections/BasicInfo";
import Academics from "./sections/Academics";
import Certifications from "./sections/certifications";
import Experience from "./sections/Experience";

function Main() {
  return (
    <>
      <MDBContainer>
        <MDBRow center>
          <MDBCol center md={8} className="my-5 p-3">
            <MDBCard className="my-5 shadow-lg">
              {/* all custom components goes here */}
              <Header />
              <BasicInfo />
              <Skills />
              <Academics />
              <Certifications />
              <Experience />
              <Footer />
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Main;
