import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBadge,
} from "mdb-react-ui-kit";

function Experience() {
  const experience = [
    {
      period: "Fresh",
      company: "No Professional Experience yet",
      link: "https://github.com/mdazlaanzubair",
      desc: "Strong in design and integration problem-solving skills.",
    },
  ];
  return (
    <MDBCardBody className="px-5 rounded">
      <MDBContainer className="p-0">
        <MDBRow>
          <h2 className="mb-3 fw-bold">Experience</h2>
          {experience.map((data) => (
            <MDBCol md={6} className="mb-3">
              <MDBBadge color="light" className="px-2 mb-2" light>
                {data.period}
              </MDBBadge>
              <h4 className="fw mb-0 fw-bold">{data.title}</h4>
              <p className="small fw-light">{data.desc}</p>
              <a
                className="small"
                href={data.link}
                target="_blank"
                rel="noreferrer"
              >
                Checkout My Github
              </a>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  );
}

export default Experience;
