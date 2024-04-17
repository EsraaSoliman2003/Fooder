import React from "react";

import img1 from '../../imgs/facebook.svg';
import img2 from '../../imgs/twitter.svg';
import img3 from '../../imgs/youtube.svg';
import img4 from '../../imgs/linkedin.svg';
import img5 from '../../imgs/square-instagram.svg';

import './Footer.css';

const Footer = ()=>{
    return(
        <>
        <div className="part1">
            <div className="container">
                <h1>Baked fresh daily by bakers with passion.</h1>
                <button><a href="#">Learn More</a></button>
            </div>
        </div>
        <div className="part2">
            <div className="container">
                <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
                <p>Limited time offer for this month. No credit card required.</p>
                <input placeholder="Email Address here" type="email"/>
                <button><a href="#">Subscribe</a></button>
            </div>
        </div>
        <div className="part3">
            <div className="container">
                <div className="links">
                    <a href="#">Register</a>
                    <a href="#">Forum</a>
                    <a href="#"> Affiliate </a>
                    <a href="#">FAQ</a>
                </div>
                <div className="links">
                    <a href="#"> <img src={img1}/> </a>
                    <a href="#"> <img src={img2}/> </a>
                    <a href="#"> <img src={img3}/> </a>
                    <a href="#"> <img src={img4}/> </a>
                    <a href="#"> <img src={img5}/> </a>
                </div>
                <p>© 2021. Foodera. All rights reserved.</p>
            </div>
        </div>
        </>
    )
}

export default Footer;