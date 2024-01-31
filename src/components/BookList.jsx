import Col from "react-bootstrap/Col"
import SingleBook from "./SingleBook"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import { Component } from "react"
class BookList extends Component {

    state = {
        searchValue: '',
    }

    render() {
        return (

            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-5">
                <Form.Control className="form-style" placeholder="Cerca Titolo" value={this.state.searchValue}
                    onChange={(e) => {
                        this.setState({ searchValue: e.target.value })
                    }}
                />
                {this.props.jsonFantasy.filter(book => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase))
                    .map((book, i) => (
                        <Col key={i}>
                            <SingleBook once={book} />
                        </Col>
                    ))}
            </Row>

        )
    }
}
export default BookList