import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-8">
                        <h4>Comments</h4>
                        {
                            dish.comments.map((comment) => {
                                return (
                                    <blockquote key={comment.id} className="blockquote text-left">
                                        <p className="mb-0">{comment.comment}</p>
                                        <footer className="blockquote-footer text-right">{comment.author}, <cite >{comment.date}</cite></footer>
                                    </blockquote>
                                )
                            })
                        }
                    </div>
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-4 mb-2">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row mt-2">
                    { menu }
                </div>
                <hr />
                <div className="row mt-1">
                    <div className="col-12 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default Menu;
