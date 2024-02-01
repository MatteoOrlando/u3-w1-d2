import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const MyFooter = function () {
  return (
    <Card className="text-center">
      <Card.Body>
        <Button className='upButton mt-5 btn-lg d-inline'>Torna su!</Button>
      </Card.Body>
      <Card.Footer className="footer-style text-dark">
        &copy;<b>Epic-Book Shop 2024</b> - All rights reserved
      </Card.Footer>
    </Card>
  );
};

export default MyFooter;
