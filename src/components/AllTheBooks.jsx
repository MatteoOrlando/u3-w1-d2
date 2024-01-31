import books from './data/fantasy.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// row-cols-2 row-cols-sm-2 row-cols-md 3 row-cols-lg-6 justify-content-center ROW
const AllTheBooks = function () {
  return (
    <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5  ">
      {books.map((book) => {
        return (
          <Col key={book.asin}>
            <Card className=" pb-5 h-100 w-100 card-estetics">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body className="d-flex flex-column p-1 card-estetics align-items-center">
                <Card.Title className="text-center mt-3">
                  {book.title}
                </Card.Title>
                <Card.Text className="text-center">${book.price}</Card.Text>
                <Button className="mt-auto mb-4 pb-2 px-3 fw-bold buyButton">
                  Acquista
                </Button>
              </Card.Body>
              {/* <hr /> */}
            </Card>{' '}
          </Col>
        );
      })}
    </Row>
  );
};

export default AllTheBooks;
