import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { Component } from "react"


class SingleBook extends Component {
    state = {
        selected: false,
    }

    render() {
        return (

            <Card className={this.state.selected ? 'mt-5 p-3 w-100 card-estetics' : 'mt-5 p-3 w-100'}>
                <Card.Img src={this.props.once.img} />
                <Card.Body className="card-estetics d-flex flex-column p-1 align-items-center">
                    <Card.Title className="text-center mt-3 fw-bold ">
                        {this.props.once.title}
                    </Card.Title>
                    {/* <Card.Text className="mt-2">
                    {this.props.once.category}
                </Card.Text> */}
                    <div id='bottomFixed'><Card.Text className="text-center fw-bold mt-3">$ {this.props.once.price}</Card.Text>
                        <Button onClick={() => {
                            this.setState({
                                selected: !this.state.selected
                            })
                        }} className=" pb-2 mb-3 fw-bold card-button-style">
                            Agg. al carrello
                        </Button></div>
                </Card.Body>
                {/* <hr /> */}
            </Card>


        )
    }
    // row-cols-sm-2 row-cols-md-2 row-cols-lg-4 === fix grandezza quando si vede un solo libro!!!--------
    // <Card >
    //     <Card.Img variant="top" src={props.once.img} />
    //     <Card.Body>
    //         <Card.Title>{props.once.title}</Card.Title>
    //         <Card.Text>
    //             {props.once.category}
    //         </Card.Text>
    //         <Button variant="primary">Acquista</Button>
    //     </Card.Body>
    // </Card>



}

export default SingleBook