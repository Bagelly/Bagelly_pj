import React, { useState, useEffect } from 'react';

import SearchBox from './SearchBox';

const data = [
       {
         imageUrl: 'bagel.jpeg',
         name: 'bagel'
       },
      
     ]
// const BAGEL_API_ENDPOINT = aws api url;
export default function Order(props) {
    const [bagel, setBagel] = useState([]);      //베이글 가져오기  
  
    const searchHandler = (name) => {
      console.log('in searchHandler: ' + name)
      fetch(/*BAGEL_API_ENDPOINT*/data + `?name=${name}`)
        .then((res) => res.json())
        .then((res) => setBagel(res));
    }
  
    const cardClickHandler = (bagel) => {
      console.log(bagel.id + ' clicked')
      props.onBagelSelect(bagel)
    }
  
    //이름을 받아서 같은 이름만 보이게 기능
    useEffect(() => {
      fetch(/*BAGEL_API_ENDPOINT*/data)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setBagel(res);
        });
    }, []);
  
    return <SearchBox title="주문" data={bagel} selectedItemId={props.selectedBagel?.id} onSearch={searchHandler} onCardClick={cardClickHandler} />
  }
/*const Counter = () => {
    const [num,setNumber] = useState(0);


    const increase = () => {

        setNumber(num+1);
    };

    const decrease = () => {

        setNumber(num-1);
    };
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button>-1</button>
            <p>(num)</p>
        </div>
    );
};
*/
