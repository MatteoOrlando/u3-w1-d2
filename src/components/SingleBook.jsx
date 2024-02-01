import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Component } from "react"


class SingleBook extends Component {
    state = {
        selected: false,
    }

    render() {
        return (
            <Card className={`mt-5 p-4 card-estetics ${this.state.selected ? 'selected-card' : ''}`} onClick={() => {
                this.setState({
                    selected: !this.state.selected
                })
            }}>

                {/* <Card className={this.state.selected ? 'mt-5 p-3 w-100 card-estetics' : 'mt-5 p-3 w-100 card-estetics '}> */}
                <Card.Img className="card-img-size" src={this.props.once.img} />
                <Card.Body className="card-estetics d-flex flex-column p-1 align-items-center">
                    <Card.Title className="text-center mt-3 fw-bold text-dark mx-3">
                        {this.props.once.title}
                    </Card.Title>
                    {/* <Card.Text className="mt-2">
                    {this.props.once.category}
                </Card.Text> */}
                    <div id='bottomFixed'><Card.Text className=" text-dark text-center fw-bold mt-3">
                        Prezzo: $ {this.props.once.price}</Card.Text>
                        <Button className=" pb-2 mb-3 fw-bold card-button-style">
                            Agg. al carrello
                        </Button></div>
                </Card.Body>
                {/* <hr /> */}
            </Card>


        )
    }
}


export default SingleBook



