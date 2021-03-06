import React, { Component } from 'react';
import _ from 'lodash';
import Slider from 'react-slick';
import logo from './logo.svg';
import resume from './Justin_Kang_Resume_2018.pdf';
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
		const scrollTop = _.get(event, "srcElement.body.scrollTop",
			_.get(event, "target.scrollingElement.scrollTop", 0));
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
						<a href="/">
							<img src={logo} className="logo" alt=""/>
						</a>
						<div className="header-toolbar">
							<a href="#about">ABOUT</a>
							<a href="#work">WORK</a>
							<a href="#contact">CONTACT</a>
						</div>
					</div>
					<div className={headerQuoteClass}>
						<div className="quote">
							Software is a great combination between artistry and engineering
						</div>
						<div className="quote-sub">
							Bill Gates
						</div>
						<i className="material-icons flash">keyboard_arrow_down</i>
					</div>
				</div>
				<div className="page-card bg-pink">
					<a className="anchor" name="about"/>
					<label className="title">ABOUT</label>
					<div className="quote">
						When I give, I give myself
					</div>
					<div className="quote-sub">
						Walt Whitman
					</div>
					<div className="page-card-3">
						<div className="page-card-wrapper">
							<img src={process.env.PUBLIC_URL + "/images/about1.jpg"} alt=""/>
							<p className="page-card-text">
								<i className="material-icons">face</i> Justin Seokhyun Kang <br/><br/>
								Yoga master in training <br/><br/>
								Code, design and everything in between <br/><br/>
								UCSD 2013 - B.S. Computer Science <br/><br/>
								LGBT, love is love
							</p>
						</div>
					</div>
					<div className="page-card-3">
						<div className="page-card-wrapper">
							<img src={process.env.PUBLIC_URL + "/images/about2.jpg"} alt=""/>
							<img className="img-background" src={process.env.PUBLIC_URL + "/images/trevor_project_logo.png"} alt=""/>
							<img className="img-background" src={process.env.PUBLIC_URL + "/images/tnt_logo.png"} alt=""/>
							<a className="button" href="http://www.teamintraining.org/" target="_blank">Learn More</a>
						</div>
					</div>
					<div className="page-card-3">
						<div className="page-card-wrapper">
							<img src={process.env.PUBLIC_URL + "/images/about3.jpg"} alt=""/>
							<p className="page-card-text">
								<i className="material-icons">place</i> San Jose, California <br/><br/>
								<i className="material-icons">home</i> Orange County, California <br/><br/>
								<i className="material-icons">favorite</i> Vienna, Austria
							</p>
						</div>
					</div>
				</div>
                <div className="page-card bg-teal">
					<a className="anchor" name="work"/>
                    <label className="title">WORK</label>
                    <div className="quote">
                        What you are will show in what you do
                    </div>
                    <div className="quote-sub">
                        Thomas A. Edison
                    </div>
					<div className="slider-container">
						<Slider dots={true}
								infinite={true}
								slidesToShow={1}
								slidesToScroll={1}>
							<div className="work-card">
								<div className="img-container">
									<img className="padding-shrink" src={process.env.PUBLIC_URL + "/images/apple_logo.svg"} alt=""/>
								</div>
								<div className="work-desc">
									<h2>Apple Inc.</h2>
									<h4>Cupertino, California</h4>
									<h4>06.2018 - Present</h4>
									<p>
										Software Engineer - Siri
									</p>
								</div>

							</div>
							<div className="work-card">
								<div className="img-container">
									<img src={process.env.PUBLIC_URL + "/images/yahoo_logo.svg"} alt=""/>
								</div>
								<div className="work-desc">
									<h2>Yahoo!</h2>
									<h4>Sunnyvale, California</h4>
									<h4>07.2014 - 05.2018</h4>
									<p>
										Front-end developer - Chatbots & NLU Platform <br/>
										Full-stack tools developer - Search & Labs <br/>
										Mentor - Engineering internship program <br/>
										Hacker - Internal hackday finalist (Bot development)
									</p>
								</div>
							</div>
							<div className="work-card">
								<div className="img-container">
									<img src={process.env.PUBLIC_URL + "/images/raytheon_logo.svg"} alt=""/>
								</div>
								<div className="work-desc">
                                    <h2>Raytheon Company</h2>
                                    <h4>San Diego, California</h4>
                                    <h4>06.2012 - 06.2014</h4>
                                    <p>
                                        Software engineer - Ship self defense system <br/>
                                        Security clearance - United States Department of Defense <br/>
                                        Full-stack tools developer - Interface & HMI
                                    </p>
								</div>
							</div>
							<div className="work-card">
								<div className="img-container">
									<img src={process.env.PUBLIC_URL + "/images/ucsd_logo.svg"} alt=""/>
								</div>
								<div className="work-desc">
                                    <h2>UCSD CSE Department</h2>
                                    <h4>La Jolla, California</h4>
                                    <h4>09.2013 - 12.2013</h4>
                                    <p>
                                        CSE140L Staff - Laboratory tutor <br/>
                                        Digital systems in Verilog <br/>
                                        Grader & Proctor - Project assignment evaluation
                                    </p>
								</div>
							</div>
							<div className="work-card">
								<div className="img-container">
									<img src={process.env.PUBLIC_URL + "/images/lg_logo.svg"} alt=""/>
								</div>
								<div className="work-desc">
                                    <h2>LG Electronics</h2>
                                    <h4>San Diego, California</h4>
                                    <h4>06.2010 - 08.2010</h4>
                                    <p>
                                        R&D intern - Mobile department, buyer approval engineering <br/>
                                        Mobile software test engineer - Integration testing
                                    </p>
								</div>
							</div>
						</Slider>
					</div>
					<a className="button bg-red extra-bottom-margin"
							href={resume}
							download="Justin_Kang_Resume_2018.pdf">
						Download My Resume
					</a>
				</div>
                <div className="page-card bg-blue">
                    <a className="anchor" name="contact"/>
                    <label className="title">CONTACT</label>
                    <div className="quote">
                    	There are no strangers here, only friends you haven't yet met
					</div>
                    <div className="quote-sub">
                        William Butler Yeats
                    </div>
					<div className="contact-header">
						<i className="material-icons">add</i>
						Justin Kang
					</div>
					<table cellSpacing="10">
						<tbody>
							<tr>
								<td>
									<a href="mailto:justinkan9@yahoo.com">
                        	        	<i className="material-icons">email</i>
									</a>
								</td>
								<td>
									<a href="tel:+17142717677">
                        	        	<i className="material-icons">phone</i>
									</a>
								</td>
								<td>
									<a href="https://www.linkedin.com/in/justin-kang-a4b5125b" target="_blank">
                        	        	<i className="fa fa-linkedin"/>
									</a>
								</td>
								<td>
									<a href="https://www.facebook.com/justinokang" target="_blank">
                        	        	<i className="fa fa-facebook"/>
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="footer-content">
					<div id="lights-overlay"/>
					<div className="header fg-mint">
						<span className="fg-pink">this</span>.document
					</div>
					<div className="footer-card">
						<h2>Powered by:</h2>
						<div className="img-container">
							<a href="https://nodejs.org/" target="_blank">
								<img src={process.env.PUBLIC_URL + "/images/nodejs_logo.svg"} alt=""/>
							</a>
                            <a href="https://facebook.github.io/react/" target="_blank">
							<img className="rotate" src={process.env.PUBLIC_URL + "/images/react_logo.svg"} alt=""/>
                            </a>
						</div>
					</div>
					<div className="footer-card">
                        <h2>Deployed on:</h2>
                        <div className="img-container">
                            <a href="https://surge.sh/" target="_blank">
                            	<img src={process.env.PUBLIC_URL + "/images/surge_logo.svg"} alt=""/>
                            </a>
                        </div>
					</div>
					<div className="footer-card">
                        <h2>Saved to:</h2>
                        <div className="img-container">
                            <a href="https://github.com/justinkan9/personal_website_v2" target="_blank">
                            	<img src={process.env.PUBLIC_URL + "/images/github_logo.png"} alt=""/>
                            </a>
                        </div>
					</div>
				</div>
      		</div>
    	);
  	}
}

export default App;
