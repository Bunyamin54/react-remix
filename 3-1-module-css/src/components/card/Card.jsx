import Buton from "../buton/Buton"
import "./Card.module.css"

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* CCS module Webpack, Browsify gibi tool'lar ile kullanilabilir.

import React from 'react'


const Card = ({lang,btn,img}) => {
  return (
     <div>
      <h1 className="title">{lang}</h1>
      <img className="images" src={img} alt="image"/>
      <h2>{btn}</h2>
         <Buton btn={btn}/>
     </div>
  
  )
}

export default Card
