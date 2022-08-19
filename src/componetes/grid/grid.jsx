import React from "react";
import { Col, Navbar, Row, Container, Button } from "react-bootstrap";
import videovg from "../grid/imagemgrid/fundo.mp4";
import "./grid.css";
import Carousel from "nuka-carousel";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
// import Arrow from "../grid/imagemgrid/arrow.png";
export default grid;

function grid() {
  return (
    <>
      <div className="grid">
        <video className="videobg" src={videovg} autoPlay muted loop />
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
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  return (
    <>
      <Container fluid>
        <Row className="fundo2">
          <Col lg={6}>
            <div className="textformat1">
              <h1> Select the best trip you life </h1>
              <h6>
                {" "}
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam.{" "}
              </h6>
            </div>
          </Col>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>LONDON</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>NEW YORK</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>TAIWAN</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show3}
            onHide={() => setShow3(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>JAPAN</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show4}
            onHide={() => setShow4(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>MOSCOU</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show5}
            onHide={() => setShow5(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>HAWAI</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

          <Modal
            show={show6}
            onHide={() => setShow6(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <h2>JAPAN</h2>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
              </Form>

              <p>
                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                unde commodi aspernatur enim, consectetur. Cumque deleniti
                temporibus ipsam atque a dolores quisquam quisquam adipisci
                possimus laboriosam. Quibusdam facilis doloribus debitis! Sit
                quasi quod accusamus eos quod. Ab quos consequuntur eaque quo
                rem! Mollitia reiciendis porro quo magni incidunt dolore amet
                atque facilis ipsum deleniti rem!<br></br>
                <br></br>
                <Button
                  href="mailto:patrikybrito@gmail.com"
                  variant="outline-secondary"
                  size="lg"
                >
                  Reservar
                </Button>
              </p>
            </Modal.Body>
          </Modal>

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
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow(true)}
                >
                  <img src={Imagem1} height="380px" width="170px" alt="...." />
                </Button>

                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow1(true)}
                >
                  <img src={Imagem2} height="380px" width="170px" alt="...." />
                </Button>

                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow2(true)}
                >
                  <img src={Imagem3} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow3(true)}
                >
                  <img src={Imagem5} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow4(true)}
                >
                  <img src={Imagem6} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow5(true)}
                >
                  <img src={Imagem7} height="380px" width="170px" alt="...." />
                </Button>
                <Button
                  href="#ptb"
                  variant="outline-secondary"
                  size="lg"
                  onClick={() => setShow6(true)}
                >
                  <img src={Imagem8} height="380px" width="170px" alt="...." />
                </Button>
              </Carousel>
              <p className="direct">© all rights reserved, 2022. </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}






