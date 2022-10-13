import React, { Component } from "react";
import Header from "./components/Header";
import CardRect from "./components/CardRect";
import CardCirc from "./components/CardCirc";

import hotel1 from "./img/category/hotel/01.jpg";
import hotel2 from "./img/category/hotel/02.jpg";
import hotel3 from "./img/category/hotel/03.jpg";
import hotel4 from "./img/category/hotel/04.jpg";

import nearby1 from "./img/category/hotel/nearby/01.jpg";
import nearby2 from "./img/category/hotel/nearby/02.jpg";
import nearby3 from "./img/category/hotel/nearby/03.jpg";
import nearby4 from "./img/category/hotel/nearby/04.jpg";
import nearby5 from "./img/category/hotel/nearby/05.jpg";
import nearby6 from "./img/category/hotel/nearby/06.jpg";
import nearby7 from "./img/category/hotel/nearby/07.jpg";
import nearby8 from "./img/category/hotel/nearby/08.jpg";
import nearby9 from "./img/category/hotel/nearby/09.jpg";
import nearby10 from "./img/category/hotel/nearby/10.jpg";
import nearby11 from "./img/category/hotel/nearby/11.jpg";

export class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<h1 className="title text-center fw-bold">Featured Hotels</h1>
				<div className="row my-5">
					<CardRect location="New-York" hotelName="Miami Beach Hotel" price="455" imageSource={hotel1} />
					<CardRect location="Boston" hotelName="West Coast Hotel" price="133" imageSource={hotel2} />
					<CardRect location="California" hotelName="Golden Beach Luxury" price="122" imageSource={hotel3} />
					<CardRect location="Wisconsin" hotelName="Red Dragon" price="322" imageSource={hotel4} />
				</div>
				<h1 className="title text-center fw-bold my-5">Explore Nearby</h1>
				<div className="row g-5">
					<CardCirc location="New York" timeDistance="20 mins" imageSource={nearby1} />
					<CardCirc location="Philadelphia" timeDistance="40 mins" imageSource={nearby2} />
					<CardCirc location="Pittsburgh" timeDistance="2 hours" imageSource={nearby3} />
					<CardCirc location="Los Angeles" timeDistance="30 mins" imageSource={nearby4} />
					<CardCirc location="Dacota" timeDistance="22 mins" imageSource={nearby5} />
					<CardCirc location="Las Vegas" timeDistance="55 mins" imageSource={nearby6} />
					<CardCirc location="Boston" timeDistance="1.5 hours" imageSource={nearby7} />
					<CardCirc location="Washington" timeDistance="25 mins" imageSource={nearby8} />
					<CardCirc location="Florida" timeDistance="5 mins" imageSource={nearby9} />
					<CardCirc location="Miami" timeDistance="18 mins" imageSource={nearby10} />
					<CardCirc location="Stockton" timeDistance="13 mins" imageSource={nearby11} />
					<CardCirc location="New Orlean" timeDistance="4 hours" imageSource={nearby1} />
				</div>
			</div>
		);
	}
}

export default App;
