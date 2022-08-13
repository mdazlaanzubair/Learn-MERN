import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow py-3 mb-5">
        <div className="container-fluid">
          <ul className="navbar-nav mx-auto">
            <a className="navbar-brand mx-5" href="/">
              TextUtils
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
