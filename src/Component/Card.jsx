import React from 'react'
import './card.css'
function Card({cardno,name,date,cvv}) {
 







  return (
    <>
    <div className='maindiv'>
    <div className='Visa'> <h1>VISA</h1>
    
    </div>
    <  img className='image'  src='./chip.jpg'/>
    <div className='cardno'><h4 className='number'>{cardno}</h4></div>
    <div className='ditaile'>
      <div  className='cardhol'>Card holder </div>
      <div className='expire' >Expire</div>
      <div className='cvv'>CVV</div>
    </div>
    <div className='lastdiv'>
      <div className='name'>{name}</div>
      <div className='exdate'>{date}</div>
      <div className='cvvno'>{cvv}</div>
    </div>


    </div>
    



    </>
  )
}

export default Card