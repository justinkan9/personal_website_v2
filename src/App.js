import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
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
					<div className="header-quote">
						<div className="header-quote-main">
							Software is a great combination between artistry and engineering
						</div>
						<div className="header-quote-sub">
							Bill Gates
						</div>
					</div>
				</div>
				<div className="placeholder-large">
					some large item here..
				</div>
      		</div>
    	);
  	}
}

/*
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
*/

export default App;
