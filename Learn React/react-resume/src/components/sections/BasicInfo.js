import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";

function BasicInfo() {
  const bios = [
    { icon: "file-signature", title: "Muhammad Azlaan Zubair" },
    { icon: "calendar-alt", title: "July, 1996" },
    { icon: "map-marker-alt", title: "Karachi, Pakistan" },
    { icon: "at", title: "mdazlaan1996@gmail.com" },
    { icon: "phone-alt", title: "(+92) 311-3046692" },
  ];

  const hobbies = [
    { icon: "laptop-code", title: "Coding" },
    { icon: "glasses", title: "Reading" },
    { icon: "search", title: "Browsing" },
    { icon: "gamepad", title: "Gaming" },
    { icon: "chess-knight", title: "Chess" },
  ];

  const social_links = [
    {
      icon: "facebook-square",
      color: "#4267B2",
      title: "Facebook",
      link: "https://www.facebook.com/mdazlaanzubair/",
    },
    {
      icon: "twitter-square",
      color: "#00acee",
      title: "Twitter",
      link: "https://twitter.com/mdazlaanzubair",
    },
    {
      icon: "linkedin",
      color: "#0072b1",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/mdazlaanzubair/",
    },
    {
      icon: "instagram",
      color: "#e1306c",
      title: "Instagram",
      link: "https://www.instagram.com/mdazlaanzubair/",
    },
    {
      icon: "whatsapp-square",
      color: "#34B7F1",
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=03113046692&text=Hi, Azlaan!",
    },
    {
      icon: "github-square",
      color: "#171515",
      title: "GitHub",
      link: "https://github.com/mdazlaanzubair",
    },
  ];

  return (
    <MDBCardBody className="px-5 rounded">
      <MDBContainer className="p-0">
        <MDBRow>
          <h2 className="mb-3 fw-bold">Who Am I ?</h2>
          <MDBCol md={6}>
            <h5 className="mb-3">Bios</h5>
            <MDBListGroup small light>
              {bios.map((data) => (
                <MDBListGroupItem noBorders className="py-1 small">
                  <MDBIcon fas icon={data.icon} className="me-2" />
                  {data.icon !== "at" ? (
                    data.title
                  ) : (
                    <a href="mailto:{data.title}">{data.title}</a>
                  )}
                </MDBListGroupItem>
              ))}
            </MDBListGroup>
          </MDBCol>
          <MDBCol md={6}>
            <h5 className="mb-3 ms-2">Hobbies</h5>
            {hobbies.map((hobby) => (
              <MDBTooltip tag="span" title={hobby.title} placement="bottom">
                <MDBIcon fas icon={hobby.icon} className="m-2" size="lg sm" />
              </MDBTooltip>
            ))}
            <hr className="my-4" />
            <h5 className="mb-3 ms-2">I'm Social</h5>
            {social_links.map((social) => (
              <MDBTooltip
                tag="a"
                wrapperProps={{ href: social.link, target: "_blank" }}
                title={social.title}
                placement="bottom"
              >
                <MDBIcon
                  fab
                  icon={social.icon}
                  style={{ color: social.color }}
                  className="m-2"
                  size="lg sm"
                />
              </MDBTooltip>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBCardBody>
  );
}

export default BasicInfo;
