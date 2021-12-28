//juntando exercicio 1 e 3 -> state 

import React, { useState } from 'react';

import '../App.css';

function Ex1 () { 

  let [name,setName] = React.useState("Start")
  let [newName, setNewName] = React.useState("")

  function upper (element){
    return element.toUpperCase()
  }

  return (
    <div className="App">
     
      <div className="div-em-branco">
          <label> Entre com o texto: </label>
          <input type="text" id="text1" name="text1"  onChange={e => setName(e.target.value)}></input>
       </div>

      <div className="div-de-resposta">
          <br/>
          <br/>
          <p>Texto em minusculo: </p>
          {name}
          <br/>
          <br/>
          <p>Texto em maiusculo: </p>
          {upper(name)}
       </div>
 
    </div>
 
  );
}

export default Ex1;
