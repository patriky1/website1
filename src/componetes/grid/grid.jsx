import React from "react";
import { Col, Navbar, Row, Container, Button } from "react-bootstrap";
import videovg from "../grid/imagemgrid/fundo.mp4";
import "./grid.css";
import Carousel from "nuka-carousel";

import icone1 from "../grid/imagemgrid/search.png";
import Imagem1 from "../grid/imagemgrid/imc1.png";
import Imagem2 from "../grid/imagemgrid/imc2.png";
import Imagem3 from "../grid/imagemgrid/imc3.png";
import Imagem5 from "../grid/imagemgrid/imc5.png";
import Imagem6 from "../grid/imagemgrid/imc6.png";
import Imagem7 from "../grid/imagemgrid/imc7.png";
import Imagem8 from "../grid/imagemgrid/imc8.png";
import icone4 from "../grid/imagemgrid/icone5.png";
import icone5 from "../grid/imagemgrid/icone4.png";
export default grid;

function grid() {
  return (
    <>
      <div className="grid">
        <video src={videovg} autoPlay muted loop />
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

export function Grid2() {
  return (
    <>
      <Container fluid>
        <Row className="fundo2">
          <Col lg={6}>
            <div className="textformat">
              {" "}
              <h1 className="textformat1">
                Select the best trip of<br></br> your life
              </h1>
              <h8>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <br></br>
                industry. Lorem Ipsum has been the industry's standard dummy
                text<br></br>
                ever since the 1500$.
              </h8>
            </div>
          </Col>
          <Col lg={6}>
            <div className="overlay">
              <h1 className="textcarsousel">Travels</h1>
              <Carousel
                cellAlign="center"
                slidesToShow={3}
                autoplay={true}
                autoplayInterval={4000}
                wrapAround={true}
                withoutControls={false}
                transitionMode={"zoom"}
                pauseOnHover={false}
                swiping={false}
                renderCenterLeftControls={({ previousSlide }) => (
                  <button onClick={previousSlide}>
                    <i className="fa fa-arrow-left" />
                    <img
                      src={icone4}
                      width="80"
                      height="80"
                      className=" positionlogo"
                      alt="React Bootstrap logo"
                    />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button onClick={nextSlide}>
                    <i className="fa fa-arrow-right" />
                    <img
                      src={icone5}
                      width="80"
                      height="80"
                      className=" positionlogo"
                      alt="React Bootstrap logo"
                    />
                  </button>
                )}
              >
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem1} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem2} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem3} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem5} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem6} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem7} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="https://www.instagram.com/patrikybrito/"
                  variant="outline-secondary"
                  size="lg"
                >
                  <img src={Imagem8} height="380px" width="170px" alt="...." />
                </Button>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
