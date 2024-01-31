import './App.css';
// BISOGNA LINKARE IL FILE DI BOOTSTRAP CON UN IMPORT, e va importato nel file piú importante/principale!
// https://react-bootstrap.github.io/docs/getting-started/introduction
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import CustomAlert from './components/CustomAlert';
// import AllTheBooks from './components/AllTheBooks';
import { Container } from 'react-bootstrap';
// import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './components/SingleBook';
// import BookList from './components/BookList';
// import books from './data/fantasy.json';
function App() {
  return (
    <>
      <header>
        <CustomNavbar className="navStyle" />
      </header>
      <CustomAlert />
      <main>
        <Container>
          {/* book={books[0]} */}
          <SingleBook />

          {/* <AllTheBooks /> */}
        </Container>
      </main>
      <footer>
        <CustomFooter className="footerStyle" />
      </footer>
    </>
  );
}

export default App;
