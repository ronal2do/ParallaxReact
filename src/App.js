import React, { Component } from 'react';
import mouseParallax from './mouseParallax';
import './App.css';

class App extends Component {

  componentDidMount() {
		let parallaxBox = document.getElementById ( 'box' );
		let c1left = document.getElementById ( 'l1' ).offsetLeft,
		c1top = document.getElementById ( 'l1' ).offsetTop,
		c2left = document.getElementById ( 'l2' ).offsetLeft,
		c2top = document.getElementById ( 'l2' ).offsetTop,
		c3left = document.getElementById ( 'l3' ).offsetLeft,
		c3top = document.getElementById ( 'l3' ).offsetTop,
		c4left = document.getElementById ( 'l4' ).offsetLeft,
		c4top = document.getElementById ( 'l4' ).offsetTop;
		
		parallaxBox.onmousemove = function ( event ) {
			event = event || window.event;
			let x = event.clientX - parallaxBox.offsetLeft,
			y = event.clientY - parallaxBox.offsetTop;
			
			mouseParallax( 'l1', c1left, c1top, x, y, 5 );
			mouseParallax( 'l2', c2left, c2top, x, y, 15 );
			mouseParallax( 'l3', c3left, c3top, x, y, 30 );
			mouseParallax( 'l4', c4left, c4top, x, y, 65 );
		}
  }

  render() {
    return (
			<div className="container">
				<main id="box">
					<div className="layer" id="l1">
						<div id="sun">&nbsp;</div>
					</div>
					<div className="layer" id="l2">
						<div id="clouds">
							<div className="cloud c1">&nbsp;</div>
							<div className="cloud c2">&nbsp;</div>
							<div className="cloud c3">&nbsp;</div>
							<div className="cloud c4">&nbsp;</div>
						</div>
					</div>
					<div className="layer" id="l3">	
						<div className="hill hill1">&nbsp;</div>
						<div className="hill hill2">&nbsp;</div>
					</div>
					<div className="layer" id="l4">
						<div className="flower f1">
							<div className="s">&nbsp;</div>
							<div className="petal1 petal">&nbsp;</div>
							<div className="petal2 petal">&nbsp;</div>
							<div className="petal3 petal">&nbsp;</div>
							<div className="petal4 petal">&nbsp;</div>
							<div className="petal5 petal">&nbsp;</div>
							<div className="petal6 petal">&nbsp;</div>
						</div>
						<div className="flower f2">
							<div className="s">&nbsp;</div>
							<div className="petal1 petal">&nbsp;</div>
							<div className="petal2 petal">&nbsp;</div>
							<div className="petal3 petal">&nbsp;</div>
							<div className="petal4 petal">&nbsp;</div>
							<div className="petal5 petal">&nbsp;</div>
							<div className="petal6 petal">&nbsp;</div>
						</div>
						<div className="flower f3">
							<div className="s">&nbsp;</div>
							<div className="petal1 petal">&nbsp;</div>
							<div className="petal2 petal">&nbsp;</div>
							<div className="petal3 petal">&nbsp;</div>
							<div className="petal4 petal">&nbsp;</div>
							<div className="petal5 petal">&nbsp;</div>
							<div className="petal6 petal">&nbsp;</div>
						</div>
						<div className="flower f4">
							<div className="s">&nbsp;</div>
							<div className="petal1 petal">&nbsp;</div>
							<div className="petal2 petal">&nbsp;</div>
							<div className="petal3 petal">&nbsp;</div>
							<div className="petal4 petal">&nbsp;</div>
							<div className="petal5 petal">&nbsp;</div>
							<div className="petal6 petal">&nbsp;</div>
						</div>
					</div>
				</main>
			</div>
    );
  }
}

export default App;
