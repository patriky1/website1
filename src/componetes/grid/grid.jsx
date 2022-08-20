import React from "react";
import { Col, Navbar, } from "react-bootstrap";
// import videovg from "../grid/imagemgrid/fundo.mp4";
import "./grid.css";



import icone1 from "../grid/imagemgrid/search.png";

// import Arrow from "../grid/imagemgrid/arrow.png";
export default grid;

function grid() {
  return (
    <>
      <div className="grid">
        {/* <video className="videobg" src={videovg} autoPlay muted loop /> */}
        <div className="content">
          <Col lg="1">
            <a className=" content1" href="#education">
              <h5> Travel </h5>
            </a>
          </Col>
          <Col lg="6">
            <a className="content1" href="#education">
              <h5> packages </h5>
            </a>
          </Col>
          <Col lg="13">
            <a className="content1" href="#education">
              <h5> Contact </h5>
            </a>
          </Col>
          <Col>
            <Navbar.Brand href="#home">
              <img
                src={icone1}
                width="28"
                height="28"
                className=" positionlogo1"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Col>

          <div className="absolute">
            <h1 className="textoc borderLeft">
              {" "}
              Tourist trips around<br></br> the world{" "}
            </h1>
            <h3 className="textoc1 borderLeft">
              {" "}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              <br></br>
              It has roots in a piece of classical Latin literature from 45 BC,
              <br></br>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}






