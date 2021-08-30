import React from "react";
//import ReactDOM from 'react-dom';
import Card from "react-bootstrap/Card";
import MyForm from "./form.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faCoffee } from "@fortawesome/free-solid-svg-icons";
library.add(faCheckCircle, faCoffee);

function Options() {
 return (
  <Container>
   Select Subscriptions
   <Row style={{ justifyContent: "center" }}>
    <Card style={{ width: "30rem" }}>
     <CardHeader style={{ background: "#020F47", color: "white" }}>PANIC</CardHeader>
     <Card.Body>
      <h1 class="card-title pricing-card-title">
       R39<small class="text-muted fw-dark">/mo</small>
      </h1>
      <ul class="list-group">
       <li class="list-group-item text-start">
        <FontAwesomeIcon icon="check-circle" /> <span>On-Demand Armed Response</span>
       </li>
       <li class="list-group-item text-start">
        <FontAwesomeIcon icon="check-circle" /> Activated via the Trigger App on your phone
       </li>
       <li class="list-group-item text-start">
        <FontAwesomeIcon icon="check-circle" /> Optional Add-On: Handy standalone, wearable Trigger Panic Button, paired with the Trigger
        app on your phone – sold separately
       </li>
       <li class="list-group-item text-center">
        <MyForm />
       </li>
      </ul>
     </Card.Body>
    </Card>
   </Row>
  </Container>
 );
}

export default Options;
