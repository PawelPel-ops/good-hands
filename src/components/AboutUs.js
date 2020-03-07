import React from 'react';
import Decoration from '../assets/Decoration.svg';
import Signature from '../assets/Signature.svg';
import People from '../assets/People.jpg';

const AboutUs = () => {
    return (
        <div className="container aboutUs">
           <div className="aboutUs_content">
               <h3 className="aboutUs_header">O nas</h3>
               <img className="aboutUs_decoration" src={Decoration} alt="decoration" />
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dicta magni maiores minima provident rerum voluptatem. Ipsum, perferendis voluptatem.</p>
               <div className="aboutUs_signature">
                   <img src={Signature} alt="signature"/>
               </div>
           </div>
           <div className="aboutUs_image">
               <img src={People} alt="People" />
           </div>
        </div>
    );
};

export default AboutUs;