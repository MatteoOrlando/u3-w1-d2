import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CustomFooter = function () {
  return (
    <Card className="text-center">
      <Card.Body>
        <Button>Torna su!</Button>
      </Card.Body>
      <Card.Footer className=" bg-success text-light">
        &copy;2024 Epic-Book Shop - All rights reserved
      </Card.Footer>
    </Card>
  );
};

export default CustomFooter;
