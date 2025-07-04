import React from 'react';

const RandomUserCard =(props)=>{
  
  return(
    <div className='RandomUserCard'>
      <img className='user-img' src={props.data.picture.large}/>
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city}, {props.data.location.state}</p>
    </div>
  )
}

export default RandomUserCard;
