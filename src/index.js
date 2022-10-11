import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./sass/style.css";
import Header from "./components/Header";
import CardRect from "./components/CardRect";
import CardCirc from "./components/CardCirc";

class App extends Component {
	render() {
		return (
			<div className="container">
				<Header />
				<h1 className="title text-center fw-bold">Featured Hotels</h1>
				<div className="row my-5">
					<CardRect location="New-York" hotelName="Miami Beach Hotel" price="455" imageSource={require("./img/category/hotel/01.jpg")} />
					<CardRect location="Boston" hotelName="West Coast Hotel" price="133" imageSource={require("./img/category/hotel/02.jpg")} />
					<CardRect location="California" hotelName="Golden Beach Luxury" price="122" imageSource={require("./img/category/hotel/03.jpg")} />
					<CardRect location="Wisconsin" hotelName="Red Dragon" price="322" imageSource={require("./img/category/hotel/04.jpg")} />
				</div>
				<h1 className="title text-center fw-bold my-5">Explore Nearby</h1>
				<div className="row g-5">
					<CardCirc location="New York" timeDistance="20 mins" imageSource={require("./img/category/hotel/nearby/01.jpg")} />
					<CardCirc location="Philadelphia" timeDistance="40 mins" imageSource={require("./img/category/hotel/nearby/02.jpg")} />
					<CardCirc location="Pittsburgh" timeDistance="2 hours" imageSource={require("./img/category/hotel/nearby/03.jpg")} />
					<CardCirc location="Los Angeles" timeDistance="30 mins" imageSource={require("./img/category/hotel/nearby/04.jpg")} />
					<CardCirc location="Dacota" timeDistance="22 mins" imageSource={require("./img/category/hotel/nearby/05.jpg")} />
					<CardCirc location="Las Vegas" timeDistance="55 mins" imageSource={require("./img/category/hotel/nearby/06.jpg")} />
					<CardCirc location="Boston" timeDistance="1.5 hours" imageSource={require("./img/category/hotel/nearby/07.jpg")} />
					<CardCirc location="Washington" timeDistance="25 mins" imageSource={require("./img/category/hotel/nearby/08.jpg")} />
					<CardCirc location="Florida" timeDistance="5 mins" imageSource={require("./img/category/hotel/nearby/09.jpg")} />
					<CardCirc location="Miami" timeDistance="18 mins" imageSource={require("./img/category/hotel/nearby/10.jpg")} />
					<CardCirc location="Stockton" timeDistance="13 mins" imageSource={require("./img/category/hotel/nearby/11.jpg")} />
					<CardCirc location="New Orlean" timeDistance="4 hours" imageSource={require("./img/category/hotel/nearby/01.jpg")} />
				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

reportWebVitals();
