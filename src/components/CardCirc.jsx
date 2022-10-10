import React, { Component } from "react";
// import img1 from "../img/category/hotel/nearby/01.jpg";

export class CardCirc extends Component {
	render() {
		return (
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
			<div className="card cardCirc border-0">
				<img src={this.props.imageSource} className="card-img-top rounded-circle" alt="error" />
				<div className="card-body text-center"> 
					<h4 className="card-title fw-bold">{this.props.location}</h4>
					<p className="<Card.Subtitle>Subtitle</Card.Subtitle>">{this.props.timeDistance} drive</p>
				</div>
			</div>
            </div>
		);
	}
}

export default CardCirc;
