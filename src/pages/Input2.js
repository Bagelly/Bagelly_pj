import React, { useState } from 'react';

const Input2 = () => {
   const[inputs, setInputs] =useState({
    id: "",
    pw: "",
   })

   const{id, pw} = inputs;

   const onChange = (e) => {
    const value =e.target.value;
    const id=e.target.id;
    setInputs({
        ...inputs,
        [id]:value
    })
   }

    return (
        <div>
            <div>
                <label> ID </label>
                <input type='id' id="id" value={id} onChange={onChange} />
            </div>
            <div>
                <label> PW </label>
                <input type='pw' id="pw" value={pw} onChange={onChange} />
            </div>
            <p> 아이디: {id}</p>
            <p>비밀번호: {pw}</p> 
        </div>
        
    );
};

export default Input2;