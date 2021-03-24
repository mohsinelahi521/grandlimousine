import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookingform from './Bookingform';

var innerbnr = require('./../../images/banner/columbus_chauffeur_service_header.jpg');

class Columbusbanner extends Component{
	render(){
		return(
			<div className="inner-banner overlay-black-middle" style={{backgroundImage:"url("+ innerbnr + ")" }}>
				<div className="container">        
					<div className="row">
						<div className="col-md-6">
								<Bookingform />
						</div>
						<div className="col-md-6">
							<div className="bnr-content text-right">
								<h2><a href="#"> BOOK YOUR RIDE INSTANTLY </a></h2>
								<h6>TRAVEL IN COMFORT. ALWAYS ON TIME </h6>
								<h3>Call <a href="tel:(404) 424-4499">(404) 424-4499</a></h3>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}

export default Columbusbanner;