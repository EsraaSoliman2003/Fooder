import React from "react";
import Header from "./Header";
import './Home.css';
import prideimg from '../../imgs/1.jpg';
import everythingimg from '../../imgs/2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faCheck} />

const Home = () =>{
    return(
        <>
        <Header/>
        <section className="numbers">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                    </div>
                    <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                    </div>
                </div>
            </div>

        </section>
        <section className="pride">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={prideimg} title="img" />
                    </div>
                    <div className="col-md-6">
                        <h2>We pride ourselves on making real food from the best ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                        <button><a href="#">learn more</a></button>
                    </div>
                </div>
            </div>
        </section>
        <section className="everything">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible ingredients.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <ul>
                            <li> <i>{element}</i> Etiam sed dolor ac diam volutpat.</li>
                            <li> <i>{element}</i> Erat volutpat aliquet imperdiet.</li>
                            <li> <i>{element}</i> purus a odio finibus bibendum.</li>
                        </ul>
                        <button><a href="#">learn more</a></button>
                    </div>
                    <div className="col-md-6">
                        <img src={everythingimg} title="img" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;