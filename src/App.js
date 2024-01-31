import './App.css';
// BISOGNA LINKARE IL FILE DI BOOTSTRAP CON UN IMPORT, e va importato nel file piú importante/principale!
// https://react-bootstrap.github.io/docs/getting-started/introduction
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import CustomAlert from './components/CustomAlert';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import { Row, Col } from 'react-bootstrap';
// import SingleBook from './components/SingleBook';
import books from '../src/components/data/fantasy.json';
function App() {
  return (
    <>
      <CustomNavbar />
      <CustomAlert />
      {/* --------------------------------- */}
      {/* <AllTheBooks /> */}
      {/* <SingleBook once={books[0]} /> */}
      {/* --------------------------------- */}
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
