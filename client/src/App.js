//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Options from "./components/options";
import { Container, Row, Col } from "react-bootstrap";

function App() {
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

export default App;
