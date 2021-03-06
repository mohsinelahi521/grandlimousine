import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import DocumentMeta from 'react-document-meta';
import Toplimousine from '../Element/Toplimousine';



class Contact extends Component{
	render(){
		const meta = {
            title: 'Contact US | Limo Service Atlanta | Grand Limousine',
            description: "GrandLimousine.com provides best Corporate Car Service in Atlanta. Book Your Ride Online: (404) 424-4499 ? info@grandlimousine.com",
            canonical: '',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'react,meta,document,html,tags'
              }
            }
          };
    return(
        <DocumentMeta {...meta}>
            <main className="page-wraper">
			
				<Header />
				
				
				
				<div className="page-content bg-white">
				
					<InnerBanner />
					
					
					<section className="section-full content-inner">
						<div className="container">
							<div className="section-head inner-section-head text-black text-center">
								<h2 className="box-title">Contact Us – Grand Limousine</h2>
								<div className="dlab-separator bg-primary"></div>
								<p>The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
							</div>
							<div className="contact-us-main heading">
								<h4>Drop us a line or just say Hello!</h4>
								<form action="#" className="form-style">
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="First Name"/>
												</div>
												<div className="col-lg-6">
													<input type="text" className="form-control"  placeholder="Last Name"/>
												</div>
											</div>
										</div>
										<div className="form-group mb-3">
											<div className="row">
												<div className="col-lg-6">
													<input type="email" className="form-control"  placeholder="Email"/>
												</div>
												<div className="col-lg-6">
													<input type="phone" className="form-control"  placeholder="Phone"/>
												</div>
											</div>
										</div>
									<button type="submit" className="submit-btn">Send Message</button>
								</form>
								<div className="deal-with-us">
									<h4>Come and Deal with us</h4>
									<strong>Grand Limousine</strong> offers the best transport so you can make the most of your business or leisure trip. This is what we take pride in. We provide all our clients with a superlative quality personalized solution for transport.
									<ul>
										<li>Address: <a href="https://g.page/grand-limousine-houston?share">13503 Somersworth Dr, Houston, TX 77041, Georgia, USA</a> </li>
										<li>Phone: <a href="tel:4044244499"> (404) 424-4499</a> </li>
										<li>Email: <a href="mailto:info@grandlimousine.com"> info@grandlimousine.com </a></li>
									</ul>
								</div>
							</div>
						</div>
					</section>


					<Toplimousine />
				</div>		
				
				<Footer  />
				</main>
        </DocumentMeta>
		)
	}
}

export default Contact;