import React from "react";
import About from "../about us/About";
import img1 from "../../imgs/01.jpg";
import './Explore.css';

const Explore = ()=>{
    return(
        <div className="explore" id="explore">
            <div className="container">
                <h1>Explore Our Foods</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img1}/>
                        </div>
                        <div className="text">
                            <h6>Rainbow Vegetable Sandwich</h6>
                            <p>Time: 15 - 20 Minutes | Serves: 1</p>
                            <span className="span1"> $10.50</span> <span className="span2"> $11.70</span>
                        </div>
                        <div className="btn">
                            <button><a href="#">Order Now</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img1}/>
                        </div>
                        <div className="text">
                            <h6>Rainbow Vegetable Sandwich</h6>
                            <p>Time: 15 - 20 Minutes | Serves: 1</p>
                            <span className="span1"> $10.50</span> <span className="span2"> $11.70</span>
                        </div>
                        <div className="btn">
                            <button><a href="#">Order Now</a></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="img">
                            <img src={img1}/>
                        </div>
                        <div className="text">
                            <h6>Rainbow Vegetable Sandwich</h6>
                            <p>Time: 15 - 20 Minutes | Serves: 1</p>
                            <span className="span1"> $10.50</span> <span className="span2"> $11.70</span>
                        </div>
                        <div className="btn">
                            <button><a href="#">Order Now</a></button>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Explore;