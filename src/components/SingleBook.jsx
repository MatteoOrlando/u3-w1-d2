import { Component } from 'react';
import Card from 'react-bootstrap/Card';

class SingleBook extends Component {
    state = { selected: false };

    handleCardClick = () => {
        this.setState({
            selected: true
        });
    };

    render() {
        return (
            <Card style={{ width: '18rem' }} onClick={this.handleCardClick}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
