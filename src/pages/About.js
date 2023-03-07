import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dataabout, skills, services } from "../content";
import "../styles/about.css";

function About() {
  return (
    <>
      <Container className="About-header">
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p className="aboutme-p">{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row> */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value-top">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_p">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default About;
