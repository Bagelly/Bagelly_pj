import React from "react";
import {useCart} from "react-use-cart";

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItem,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">장바구니가 비어있습니다.</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center"> 
                <div className="col-12">
                    <h2>장바구니</h2>
                    <br/>
                    {/* <h5> Cart ({totalUniqueItems}) total Items: ({totalItems})</h5> */}
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td> 수량 ({item.quantity})</td>
                                        <td> 
                                            <button className="btn btn-outline-secondary ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                            -</button>
                                            <button className="btn btn-outline-secondary ms-2"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                            +</button>
                                            <button className="btn btn-outline-danger ms-2"
                                                    onClick={() => removeItem(item.id)}>
                                            삭제 </button>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2> 총 금액 : {cartTotal}원</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-outline-danger m-2"
                            onClick={() => emptyCart()}>
                    장바구니 비우기 </button>
                    <button className="btn btn-outline-success">
                    결제하기 </button>
                </div>
            </div>  
        </section>
    )
}

export default Cart;