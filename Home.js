import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <React.Fragment>
            <div className="maindiv container-fluid">
                <div className="internal">
                    <div className="row">
                        <div className="topcontent col-sm-12">
                        
                               <p>Join our community</p> 
                             
                               <div className="color"> 30-days ,hassle -free money back guarantee
                               </div>
                            <div className="color1">
                                Gain access to our full library of tutorials along with expert codes reviews.
                         perfect for any developers who are
                        serious about honing their skills
                    </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className=" divhalf1 col-sm-6">
                            <center>
                                <h4> Monthly Subscription</h4>
                                <h6> <span className="dollar">$29</span> per month </h6>
                                <h6>
                                    Full access for less than $1 a day
                         </h6>
                            </center>
                            <button className="button ">
                                Sign up
                        </button>
                        </div>
                        <div className="divhalf2 col-sm-6">
                            <div className="content">
                                <h4>
                                    Why Us
                              </h4>
                                <div className='pre'>Tutorials by industry experts<br />
                                peer and expert code reviews<br />
                                coding  exercise<br />
                                Access to our GitHub repos<br />
                                community forum<br />
                                flashcard decks<br />
                                New videos every week
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;