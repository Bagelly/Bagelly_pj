import React from "react";

const Order = () => {
    return (
        <div>
            <br/>
                <h1> Order </h1>
            <br/>
            <div className="product_container">
                <div className="product">
                    <div className="product_img_div"><img src="./images/plain2.png" className="plain2"/></div>
                    <br/>
                    <h5 className="product_title"> Plain Bagel </h5>
                    <p className="product_des"> 기본 베이글입니다. </p>
                    <div className="product_mon"> 2800 원</div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src="./images/blueberry2.png" className="plain2"/></div>
                    <br/>
                    <h5 className="product_title"> Plain Bagel </h5>
                    <p className="product_des"> 기본 베이글입니다. </p>
                    <div className="product_mon"> 2800 원</div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src="./images/plain2.png" className="plain2"/></div>
                    <br/>
                    <h5 className="product_title"> Plain Bagel </h5>
                    <p className="product_des"> 기본 베이글입니다. </p>
                    <div className="product_mon"> 2800 원</div>
                </div>
                <div className="product">
                    <div className="product_img_div"><img src="./images/plain2.png" className="plain2"/></div>
                    <br/>
                    <h5 className="product_title"> Plain Bagel </h5>
                    <p className="product_des"> 기본 베이글입니다. </p>
                    <div className="product_mon"> 2800 원</div>
                </div>
            </div>
        </div>

    )
}

export default Order;

