import books from './data/fantasy.json';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// row-cols-2 row-cols-sm-2 row-cols-md 3 row-cols-lg-6 justify-content-center ROW
const AllTheBooks = function () {
  return (
    <Row className=" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
      {books.map((book) => {
        return (
          <Col className="" key={book.asin}>
            <Card className="mt-5 p-3 w-100 card-estetics">
              <Card.Img src={book.img} alt={book.title} />
              <Card.Body className="card-estetics d-flex flex-column p-1 align-items-center">
                <Card.Title className="text-center mt-3 fw-bold ">
                  {book.title}
                </Card.Title>
                <div id='bottomFixed'><Card.Text className="text-center fw-bold mt-3">${book.price}</Card.Text>
                  <Button className=" pb-2 mb-3 fw-bold card-button-style">
                    Agg. al carrello
                  </Button></div>
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
