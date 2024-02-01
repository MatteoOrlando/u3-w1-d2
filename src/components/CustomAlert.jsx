import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const MyAlert = function () {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center mb-5">
          <Col>
            <Alert className="alert-style">
              <Alert.Heading className="text-center fs-4 text-dark">
                Ciao caro lettore!
              </Alert.Heading>
              <h1 className="text-center text-dark fw-bold ">
                Benvenuto in Epic-Book Shop!
              </h1>
              <hr className='text-dark' />
              <h5 className="mb-0 text-center text-dark fs-4 pb-2">
                Sfoglia il nostro immenso catalogo!<br />Troverai l'avventura fantasy
                che fa per te!
              </h5>
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyAlert;
