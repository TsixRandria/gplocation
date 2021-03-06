import React from 'react';
import { Link } from 'react-router-dom';

import './Style.css';

class Header extends React.Component {
	render() {
		return (
			<>
				{/* <header className="b-topBar">
						<div className="container wow slideInDown" data-wow-delay="0.7s">
							<div className="row">
								<div className="col-md-4 col-xs-6">
									<div className="b-topBar__addr">
										<span className="fa fa-map-marker"></span>
										34 Rue de la Plantation, Sainte-Marie 97438, <br />
										<span className=" SainteMarie">île de la Réunion</span>
									</div>
								</div>
								<div className="col-md-2 col-xs-3">
									<div className="b-topBar__tel">
										<span className="fa fa-phone"></span>
										06-92-370-380
									</div>
								</div>
								<div className="col-md-2 col-xs-3">
									<div className="b-topBar__tel">
										<span className="fa fa-phone"></span>
										06-92-370-380
									</div>
								</div>
								<div className="col-md-4 col-xs-12">
									<nav className="b-topBar__nav">
										<ul>
											<li><Link to="/Contact">Contact</Link></li>
											<li><Link to="/Login">Espace client</Link></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</header>															

					<nav className="b-nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-3 col-xs-4">
									<div className="b-nav__logo wow slideInLeft" data-wow-delay="0.3s">
										<h3><a href="/">GP<span>Location</span></a></h3>
										<h2><a href="/">Location de voiture à la REunion</a></h2>
									</div>
								</div>
								<div className="col-sm-9 col-xs-8">
									<div className="b-nav__list wow slideInRight" data-wow-delay="0.3s">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
												<span className="sr-only">Toggle navigation</span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
											</button>
										</div>
										<div className="collapse navbar-collapse navbar-main-slide" id="nav">
											<ul className="navbar-nav-menu">
												<li className="dropdown">
													<Link to="/">Accueil</Link>							
												</li>
												
												<li><Link to="/Aeroport">Aéroport de Roland-Garros</Link></li>
												<li><Link to="/Sainte-Marie">Sainte-Marie</Link></li>
												<li><Link to="/Condition">Conditions générales de location</Link></li>
												
	
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav> */}
					<header className="b-topBar">
						<div className="container wow slideInDown" data-wow-delay="0.7s">
							<div className="row">
								<div className="col-md-3 col-xs-6">
									<div className="b-topBar__addr">
										<span className="fa fa-phone"></span>
										06-92-370-380
									</div>
								</div>
								<div className="col-md-3 col-xs-6">
									<div className="b-topBar__tel">
										<span className="fa fa-envelope"></span>
										infos@gplocation.fr
									</div>
								</div>
								<div className="col-md-6 col-xs-6">
									<nav className="b-topBar__nav">
										<ul>
										<li><Link to="/Contact">Contact</Link></li>
											<li><Link to="/Login">Espace client</Link></li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</header>
					<nav className="b-nav">
						<div className="container">
							<div className="row">
								<div className="col-sm-3 col-xs-4">
									<div className="b-nav__logo" data-wow-delay="0.3s">
										<h3><a href="/">GP<span>Location</span></a></h3>
										<h2><a href="/">Location de voiture à la REunion</a></h2>
									</div>
								</div>
								<div className="col-sm-9 col-xs-8">
									<div className="b-nav__list">
										<div className="navbar-header">
											<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
												<span className="sr-only">Toggle navigation</span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
												<span className="icon-bar"></span>
											</button>
										</div>
										<div className="collapse navbar-collapse navbar-main-slide" id="nav">
											<ul className="navbar-nav-menu">
												<li className="dropdown">
													<Link to="/">Accueil</Link>							
												</li>
												
												<li><Link to="/Aeroport">Aéroport de Roland-Garros</Link></li>
												<li><Link to="/Sainte-Marie">Sainte-Marie</Link></li>
												<li><Link to="/Condition">Conditions générales de location</Link></li>
												
	
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</nav>
			</>

		)
	}
}


export default Header;