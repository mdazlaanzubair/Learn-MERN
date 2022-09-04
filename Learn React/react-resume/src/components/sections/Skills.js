import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

function Skills() {
  const capabilities = [
    {
      label: "Professional Skills",
      skill_sets: [
        { title: "Project Management", progress: 90 },
        { title: "Client Side Rendering", progress: 75 },
        { title: "Problem Solving", progress: 95 },
        { title: "Contract & Report Writing", progress: 85 },
      ],
    },
    {
      label: "Technical Skills",
      skill_sets: [
        { title: "HTML/ CSS/ Javascript", progress: 95 },
        { title: "Node, PHP & Python", progress: 90 },
        { title: "UI/UX Designing", progress: 80 },
        { title: "Layouts & Prototyping", progress: 75 },
      ],
    },
  ];

  return (
    <MDBCardBody className="px-5 rounded">
      <MDBContainer className="p-0">
        <MDBRow>
          <h2 className="mb-3 fw-bold">Capabilities</h2>
          {capabilities.map((capability) => (
            <MDBCol md={6}>
              <h5 className="mb-3 fw-bold">{capability.label}</h5>
              {capability.skill_sets.map((skill) => (
                <>
                  <span className="fw-light">{skill.title}</span>
                  <MDBProgress height="5">
                    <MDBProgressBar
                      width={skill.progress}
                      valuemin={0}
                      valuemax={100}
                    />
                  </MDBProgress>
                  <br />
                </>
              ))}
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  );
}

export default Skills;
