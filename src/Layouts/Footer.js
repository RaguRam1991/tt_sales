import React from "react";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid>
          <Row>
            <Col sm={6}>{new Date().toLocaleDateString()}.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

/**
  <Col sm={6}>
                            {new Date().getFullYear()} © Velzon.
                        </Col>
                        <Col sm={6}>
                            <div className="text-sm-end d-none d-sm-block">
                                Design & Develop by Themesbrand
                            </div>
                        </Col>
 */
