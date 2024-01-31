import SingleBook from "./SingleBook";
import books from './data/fantasy.json';
import Card from 'react-bootstrap/Card';


const BookList = function () {
    return (<>
        {books.map((book) => (
            <SingleBook key={book.asin} book={book} />

        )


        )}
    </>)


}
export default BookList;

