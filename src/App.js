import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			scrollTop: 0
		}
		this.handleScroll = this.handleScroll.bind(this);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	handleScroll(event) {
		const scrollTop = event.srcElement.body.scrollTop;
		this.setState({
			scrollTop
		})
	}

	render() {
		var headerQuoteClass = "header-quote ease-in";
		if(this.state.scrollTop > 180) {
			headerQuoteClass = "header-quote ease-out";
		}

		return (
    		<div className="app-content">
				<div className="header-content">
					<div className="header-top-bar">
						<img src={logo} className="logo"/>
						<div className="header-toolbar">
							<a href="#">ABOUT</a>
							<a href="#">WORK</a>
							<a href="#">CONTACT</a>
						</div>
					</div>
					<div className={headerQuoteClass}>
						<div className="header-quote-main">
							Software is a great combination between artistry and engineering
						</div>
						<div className="header-quote-sub">
							Bill Gates
						</div>
					</div>
				</div>
				<div className="page-card bg-pink">
					<div className="page-card-3">
						<img src={process.env.PUBLIC_URL + "/images/about1.jpg"}/>
					</div>
					<div className="page-card-3">
						<img src={process.env.PUBLIC_URL + "/images/about2.jpg"}/>
					</div>
					<div className="page-card-3">
						<img src={process.env.PUBLIC_URL + "/images/about3.jpg"}/>
					</div>
				</div>
				<div className="placeholder-large">
					some large item here..
				</div>
      		</div>
    	);
  	}
}

export default App;
