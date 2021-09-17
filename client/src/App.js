//import logo from "./logo.svg";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Options from "./components/options";
import { Container, Row, Col } from "react-bootstrap";
//import { useLocation } from "react-router-dom";
//import queryString from "query-string";

export default function App() {
 /*const { search } = useLocation();
  const URLSearchParams = new URLSearchParams(search);
  const name =  searchParams.get("token");
  const myObject = {
   token: name,
  };
  console.log(myObject);
 }*/

 return (
  <Container fluid="md">
   <Row className="justify-content-md-center">
    <Col xs={12} md={8}>
     <Options />
    </Col>
   </Row>
  </Container>
 );
}

///export default App;