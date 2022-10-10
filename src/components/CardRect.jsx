import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/category/hotel/01.jpg";

export class CardRect extends Component {
	render() {
		return (
			<div className="cardRect card border-0">
				<figure className="rounded-4">
					<img src={img1} className="card-img-top rounded-4" alt="error" />
				</figure>
				<span class="badge rounded-pill text-bg-dark fs-6">
					<FontAwesomeIcon icon={faLocationDot} class="icon text-warning me-2 text-light"></FontAwesomeIcon>New-York
				</span>
				<div className="card-body">
					<h4 className="card-title fw-bold">Baga Comfort</h4>
					<div className="wrapper d-flex justify-content-between align-items-center">
						<h6 className="price text-success fw-bold text-center">$455/starting at</h6>
						<h6 className="stars fw-bold d-flex align-items-center">
							4.5 <FontAwesomeIcon icon={faStar} class="icon text-warning"></FontAwesomeIcon>
						</h6>
					</div>
				</div>
			</div>
		);
	}
}

export default CardRect;
