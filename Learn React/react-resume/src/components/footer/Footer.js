import React from "react";
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  const social_links = [
    {
      icon: "facebook-f",
      color: "#4267B2",
      title: "Facebook",
      link: "https://www.facebook.com/mdazlaanzubair/",
    },
    {
      icon: "twitter",
      color: "#00acee",
      title: "Twitter",
      link: "https://twitter.com/mdazlaanzubair",
    },
    {
      icon: "linkedin-in",
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
      icon: "whatsapp",
      color: "#34B7F1",
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send?phone=03113046692&text=Hi, Azlaan!",
    },
    {
      icon: "github",
      color: "#171515",
      title: "GitHub",
      link: "https://github.com/mdazlaanzubair",
    },
  ];
  return (
    <MDBFooter className="text-center">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          {social_links.map((social) => (
            <MDBBtn
              outline
              floating
              color="dark"
              className="m-1 mx-2"
              href={social.link}
              target="_blank"
              role="button"
            >
              <MDBIcon fab icon={social.icon} />
            </MDBBtn>
          ))}
        </section>
      </MDBContainer>

      <div className="text-center p-3">
        Made with <MDBIcon fas icon="heart" color="danger" className="me-2" />
        <a href="https://github.com/mdazlaanzubair">Muhammad Azlaan Zubair</a>
      </div>
    </MDBFooter>
  );
}
