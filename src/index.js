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
				<h1 class="title text-center fw-bold">Featured Hotels</h1>
				<div className="row my-5">
					<div className="col-lg-3 col-md-6">
						<CardRect />
					</div>
					<div className="col-lg-3 col-md-6">
						<CardRect />
					</div>
					<div className="col-lg-3 col-md-6">
						<CardRect />
					</div>
					<div className="col-lg-3 col-md-6">
						<CardRect />
					</div>
				</div>
				<h1 className="title text-center fw-bold my-5">Explore Nearby</h1>
				<div className="row g-5">
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
					<div className="col-lg-2 col-md-3 col-sm-4">
						<CardCirc />
					</div>
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
