import React from "react";
import Heroimg from './Heroimg';
const Home = () => {

    return (
        <div>
            {/* <h1> Bagelly </h1> */}
            <Heroimg />
            <br />
            {/* <h1> Menu </h1> */}
            <br></br>
            <div className="bagelcontainer">
                <div class="row">
                    <div class="col-sm-3 grid">
                        <img src='./images/plain2.png'/>
                        <h5>Plain Bagel</h5>
                    </div>
                    <div class="col-sm-3 grid">
                        <img src='./images/blueberry2.png'/>
                        <h5>Blueberry Bagel</h5>
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