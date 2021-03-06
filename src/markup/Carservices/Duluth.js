import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import InnerBanner from '../Element/Innerbanner';
import Toplimousine from '../Element/Toplimousine';
import Duluthtable from '../Element/Duluthtable';



class Duluth extends Component {
    render() {
        return (
            <div className="page-wraper">
            <Header />
            <div className="page-content bg-white">
                <InnerBanner />
                <section className="section-full section-top">
                    <div className="container">
                        <div className="section-head inner-section-head text-black text-center">
                            <h2 className="box-title"> Duluth Car Service </h2>
                            <div className="dlab-separator bg-primary"></div>
                            <p> The World’s Leading Provider of High-Quality Car & Limousine Transportation</p>
                        </div>
                    </div>
                </section>
                <section className="section-full services-main">
                    <div className="services-content heading">
                        <div className="container">

                            <p> <strong> ​​​Duluth Car Service Atlanta (ATL) Airport Limousine –  </strong>  Now, you can travel and arrive in style and comfort. For over 15 years, we have offered a signature white-glove attention to every single customer that steps into our vehicles.  Whether you’re a Duluth Golf local or visiting our Atlanta North City, Grand Limousine can serve all your transportation needs. We pride ourselves in our team consisting of professional and friendly client representatives, our exceptional quality service, our certified chauffeurs, and our unmatched customer support. Your safety and complete satisfaction is our top priority, which is why you can be sure you are being driven by professionally trained Chauffeurs.</p>

                            <Duluthtable />

                            <h4>Duluth – Atlanta Airport Transportation</h4> 
                            <p>We understand that our Chauffeurs are the face of our business. All of our Chauffeur is trained in traditional etiquette. New luxury units will ensure that you get the little touch of luxury that you so richly deserve.    All staff is skilled, knowledgeable, friendly, and conscientious.  Chauffeurs, in particular, are hand-picked for their exceptional driving skills, friendly and warm demeanor, and their comprehensive knowledge of the City of Atlanta – Duluth.</p>
              
                            <h4>​​​​ Included With This Service?​​</h4>
                            <p>A professional uniformed driver/chauffeur will meet you at your doorstep or in the baggage claim area of the Airport with your own personalized greeting sign. You will experience individual assistance with your luggage and will be personally escorted to your Taxi Sedan, Luxury Town Car, SUV, or Van. The airport meets & greet service is the perfect choice for guests traveling with small children or elderly passengers who need or want individual assistance. Free 15 Minute Grocery Stop. No Charge for use of booster/car seat. No Charge for gate fees, tolls or traffic. NO HIDDEN FEES, NO GIMMICKS.</p>

                        </div>
                    </div>
                </section>
                <Toplimousine />
                 </div>
            <Footer /> </div>
        )
    }
}

export default Duluth;