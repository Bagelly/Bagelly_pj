import React from "react";
// import data from "./Data";
import Heroimg from './Heroimg';
// import Itemcard from "./Itemcard";

const Home = () => {
    return (
        <div>
            <Heroimg />
            <h1 className="text-center mt-2">Menu</h1>
            <section className="py-4 container">
                <div className="row justify-content-center"> 
                <div className="bagelcontainer">
                        <div class="row">
                            <div class="col-sm-3 grid">
                                <img src='./images/plain2.png'/>
                                <h5>Plain Bagel</h5>
                            </div>
                            <div class="col-sm-3 grid">
                                <img src='./images/blueberry2.png'/>
                                <h5>Blueberry Bage l</h5>
                            </div>
                            <div class="col-sm-3 grid">
                                <img src='./images/onion2.png'/>
                                <h5>Onion Bagel</h5>
                            </div>
                            <div class="col-sm-3 grid">
                                <img src='./images/basil2.png'/>
                                <h5>Basil Bagel</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default Home;


// <div key={index} className="col">
// <div className="card">
//     <img src={image} className="card-img-top" alt={`Image ${index + 1}`} />
//     <div className="card-body">
//         <p className="card-text">{info.description}</p>
//     </div>
// </div>
// </div>