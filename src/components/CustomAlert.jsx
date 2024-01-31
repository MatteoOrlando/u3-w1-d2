import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const CustomAlert = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col>
            <Alert className="alert-style">
              <Alert.Heading className="text-center text-dark">
                CIAO LETTORE!
              </Alert.Heading>
              <h2 className="text-center text-dark">
                Benvenuto in Epic-Book Shop!
              </h2>
              <hr />
              <h5 className="mb-0 text-center text-dark">
                Sfoglia pure il nostro catalogo, troverai l'avventura fantasy
                che fa per te!
              </h5>
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomAlert;
