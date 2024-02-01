// Css //

// import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component //
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import CustomAlert from './components/CustomAlert';
// import AllTheBooks from './components/AllTheBooks';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

import books from './components/data/fantasy.json';
function App() {
  return (
    <>
      <CustomNavbar />
      <CustomAlert />
      {/* <AllTheBooks /> */}
      {/* <SingleBook once={books[0]} /> */}
      <Row className="row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 mx-5">
        <Col>
          <BookList jsonFantasy={books} />
        </Col>
      </Row>

      <CustomFooter />
    </>
  );
}

export default App;
