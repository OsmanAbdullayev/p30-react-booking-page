import React, { Component } from "react";
import Logo from "../img/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faEarth } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../img/avatar/01.jpg";

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg fixed-top container bg-white">
				<div className="container-fluid">
					<p className="navbar-brand my-0" href="#">
						<img src={Logo} alt="error" className="w-100" />
					</p>
					{/* dropdowns start */}
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Listings
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Pages
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Accounts
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									...
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					{/* dropdowns end */}
					{/* buttons start */}
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse rightNav" id="navbarSupportedContent2">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li class="nav-item">
								<button className="btn active p-2 m-1">
									<FontAwesomeIcon icon={faHotel} class="icon me-2"></FontAwesomeIcon>Hotel
								</button>
							</li>
							<li class="nav-item">
								<button className="btn p-2 m-1">
									<FontAwesomeIcon icon={faPlane} class="icon me-2"></FontAwesomeIcon>Flight
								</button>
							</li>
							<li class="nav-item">
								<button className="btn p-2 m-1">
									<FontAwesomeIcon icon={faEarth} class="icon me-2"></FontAwesomeIcon>Tour
								</button>
							</li>
							<li class="nav-item">
								<button className="btn p-2 m-1">
									<FontAwesomeIcon icon={faCar} class="icon me-2"></FontAwesomeIcon>Cab
								</button>
							</li>
						</ul>
					</div>
						<button className="btn py-2 px-3 m-1">
							<FontAwesomeIcon icon={faBell} class="icon"></FontAwesomeIcon>
						</button>
						<figure className="avatar m-1">
							<img src={Avatar} alt="#" />
						</figure>
					{/* buttons end */}
				</div>
			</nav>
		);
	}
}

export default Header;