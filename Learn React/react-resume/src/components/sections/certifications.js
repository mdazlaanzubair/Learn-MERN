import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBadge,
} from "mdb-react-ui-kit";

function Certifications() {
  const certifications = [
    {
      period: "August 2019",
      title: "Pillow, Tesseract, & Opencv",
      link: "https://www.coursera.org/account/accomplishments/certificate/F42TMF48MXZP",
      desc: "The course was about image manipulation with Python and its libraries Open CV, pillow and tesseract.",
    },
    {
      period: "April 2019",
      title: "AI For Everyone",
      link: "https://www.coursera.org/account/accomplishments/certificate/W2CWXZ2FHD3Q",
      desc: "Introduction to Artificial Intelligence, AI concepts & workflows, along with the fundamentals of machine & deep learning.",
    },
    {
      period: "April 2016",
      title: "Python Data Structures",
      link: "https://www.coursera.org/account/accomplishments/certificate/33JDM48G7YVB",
      desc: "Introduction to Python data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.",
    },
    {
      period: "April 2016",
      title: "Introduction to HTML5",
      link: "https://www.coursera.org/account/accomplishments/certificate/6UK5ZXUCXU72",
      desc: "Introduction to HTML5 and webpage construction. Learned how to use HTML5 and CSS3 to create a web page.",
    },
    {
      period: "March 2016",
      title: "Programming for Everybody",
      link: "https://www.coursera.org/account/accomplishments/certificate/893KLF5Y6NL9",
      desc: "Introduction to Python basics and performing multi-step tasks like sorting and searching.",
    },
  ];
  return (
    <MDBCardBody className="px-5 rounded">
      <MDBContainer className="p-0">
        <MDBRow>
          <h2 className="mb-3 fw-bold">Certifications</h2>
          {certifications.map((data) => (
            <MDBCol md={6} className="mb-3">
              <MDBBadge color="light" className="px-2 mb-2" light>
                {data.period}
              </MDBBadge>
              <h4 className="fw mb-0 fw-bold">{data.title}</h4>
              <p className="small fw-light">{data.desc}</p>
              <a className="small" href={data.link} target="_blank" rel="noreferrer">
                View Certificate
              </a>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  );
}

export default Certifications;
