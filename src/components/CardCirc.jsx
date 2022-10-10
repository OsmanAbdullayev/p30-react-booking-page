import React, { Component } from "react";
import img1 from "../img/category/hotel/nearby/01.jpg";

export class CardCirc extends Component {
	render() {
		return (
			<div className="card cardCirc border-0">
				<img src={img1} className="card-img-top rounded-circle" alt="error" />
				<div className="card-body text-center"> 
					<h4 className="card-title fw-bold">Baga Comfort</h4>
					<p className="<Card.Subtitle>Subtitle</Card.Subtitle>">25 min drive</p>
				</div>
			</div>
		);
	}
}

export default CardCirc;
