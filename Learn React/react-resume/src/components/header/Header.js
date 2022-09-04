import React from "react";
import { MDBCardBody } from "mdb-react-ui-kit";

function Header() {
  return (
    <MDBCardBody className="px-5 rounded">
      <div className=" text-left">
        <h1 className="mb-2 fw-light">
          Myself, <span className="fw-bold">Azlaan</span>
        </h1>
        <h5 className="mb-3 fw-light">Fullstack Developer</h5>
        <hr className="mb-4" />
        <p className="mb-3">
          Hi! Myself Azlaan Zubair, a full-stack web developer who's graduated
          from Ilma University as a Software Engineer and enjoy turning complex
          problems into simple, beautiful, and intuitive designs.
        </p>
        <p className="mb-3">
          My aim is to bring across the message and identity of my client in the
          most creative way.
        </p>
        <pre className="bg-dark text-light py-2 px-3 rounded-2 slim-scroll overflow-auto">
          <code>
            I don't code a <em className="text-danger">websites</em> for
            my clients, I create their online presence.
          </code>
        </pre>
      </div>
    </MDBCardBody>
  );
}

export default Header;
