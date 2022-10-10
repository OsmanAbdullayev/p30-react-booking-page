import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../img/category/hotel/01.jpg";

export class CardRect extends Component {
	render() {
		return (
			<div className="col-lg-3 col-md-6">
				<div className="cardRect card border-0">
					<figure className="rounded-4">
						<img src={this.props.imageSource} className="card-img-top rounded-4" alt="error" />
					</figure>
					<span className="badge rounded-pill text-bg-dark fs-6">
						<FontAwesomeIcon icon={faLocationDot} className="icon text-warning me-2 text-light"></FontAwesomeIcon>{this.props.location}
					</span>
					<div className="card-body">
						<h4 className="card-title fw-bold">{this.props.hotelName}</h4>
						<div className="wrapper d-flex justify-content-between align-items-center">
							<h6 className="price text-success fw-bold text-center">${this.props.price}/starting at</h6>
							<h6 className="stars fw-bold d-flex align-items-center">
								4.5 <FontAwesomeIcon icon={faStar} className="icon text-warning"></FontAwesomeIcon>
							</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardRect;
