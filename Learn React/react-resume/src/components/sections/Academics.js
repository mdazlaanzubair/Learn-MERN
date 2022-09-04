import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBadge,
} from "mdb-react-ui-kit";

function Academics() {
  const academics = [
    {
      period: "2022 - In Progress",
      degree: "Masters of Science",
      field: "Software Engineering",
      desc: "After completing the undergraduate study I don't want to quit half way. That's the reason to continue the graduate study was the study programme.",
    },
    {
      period: "2016 - 2020",
      degree: "Bachelor of Science",
      field: "Software Engineering",
      desc: "It was stimulating. I no longer had time to make paper cranes. Instead, I was able to find what I'm passionate about (as well as what I'm not).",
    },
    {
      period: "2012 - 2014",
      degree: "Intermediate",
      field: "Pre Engineering",
      desc: "College was something I did because it's a part of life, but it wasn't something I invested my time in because I didn't really have to.",
    },
    {
      period: "2010 - 2012",
      degree: "High School",
      field: "Computer Science",
      desc: "It meant the end of boring education that I was not challenged in. I spent 2 years in high school rather than those burger traditional 3 years (something like A/O level).",
    },
  ];
  return (
    <MDBCardBody className="px-5 rounded">
      <MDBContainer className="p-0">
        <MDBRow>
          <h2 className="mb-3 fw-bold">Academics</h2>
          {academics.map((data) => (
            <MDBCol md={6} className="mb-3">
              <MDBBadge color="light" className="px-2 mb-2" light>
                {data.period}
              </MDBBadge>
              <h4 className="fw mb-0 fw-bold">{data.degree}</h4>
              <h6 className="text-primary mb-3">
                {data.field}
              </h6>
              <p className="small fw-light">{data.desc}</p>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  );
}

export default Academics;
