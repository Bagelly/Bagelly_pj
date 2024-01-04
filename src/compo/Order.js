import React from "react";
import data from "./Data";
import Itemcard from "./Itemcard";
// const cardStyle  = {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '16px',
//   };

const Order = () => {
    return (
        <div>
            <br/>
            <h1 className="text-center mt-2">Menu</h1>  
            <br/>
            <section className="py-4 container">
                <div className="row justify-content-center"> 
                    {data.productData.map((item,index)=>{
                        return (
                            <Itemcard 
                            img={item.img} title={item.title} 
                            desc={item.desc} price={item.price} 
                            item = {item} key={index} />
                        )
                    })}
                </div>
            </section>
            {/* <div className="product_container">
                <div style={cardStyle}>
                    <div className="product">
                        <div className="product_img_div"><img src="./images/plain2.png" className="plain2" alt="plain 베이글"/></div>
                        <br/>
                        <h5 className="product_title"> Plain Bagel </h5>
                        <p className="product_des"> 기본 베이글입니다. </p>
                        <div className="product_won"> 2800 원</div>
                    </div>
                </div> 
                <div style={cardStyle}>
                    <div className="product">
                        <div className="product_img_div"><img src="./images/blueberry2.png" className="blueberry2" alt="blueberry 베이글" /></div>
                        <br/>
                        <h5 className="product_title"> blueberry Bagel </h5>
                        <p className="product_des"> blueberry 베이글입니다. </p>
                        <div className="product_won"> 2800 원</div>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div className="product">
                        <div className="product_img_div"><img src="./images/onion2.png" className="onion2" alt="onion 베이글" /></div>
                        <br/>
                        <h5 className="product_title"> Onion Bagel </h5>
                        <p className="product_des"> 어니언 베이글입니다. </p>
                        <div className="product_won"> 3000 원</div>
                    </div>
                </div>
                <div style={cardStyle}>
                    <div className="product">
                        <div className="product_img_div"><img src="./images/basil2.png" className="basil2" alt="basil 베이글" /></div>
                        <br/>
                        <h5 className="product_title"> Basil Bagel </h5>
                        <p className="product_des"> 바질 베이글입니다. </p>
                        <div className="product_won"> 3200 원</div>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Order;

