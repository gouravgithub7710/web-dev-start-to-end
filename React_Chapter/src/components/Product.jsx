import React from 'react'

const Product = ({name,price,year}) => {
  return (
    <div>
      <h1>Product Name: {name}</h1>
      <p>Price: {price}</p>
      <p>Year: {year}</p>
   
    </div>
  )
}

export default Product
