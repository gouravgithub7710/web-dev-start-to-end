import React from 'react'

//show person data as mentioned in the below
const Person = () => {
   const course = "React Basics";
  const person = {
    name: "John Doe",
    age: 30,
    email: "John@gmail.com"};

    const product = {
      name: "Laptop",
      price: 999.99,
      inStock: true
    };

  return (
    <>
<div>
    <h1>APP</h1>

    <h2>Course: {course}</h2>
    <p>This is a simple React component.</p>
    {/* <p>Welcome to the course!</p>
    <p>Enjoy learning React!</p> */}
   <>------------------------------------------------------</>
    <h3>Person Details:</h3>
    <p>Name: {person.name}</p>
    <p>Age: {person.age}</p>
    <p>Email: {person.email}</p>
    <p>Thank you for joining!</p>
    <p>Have a great day!</p>
    <p>Feel free to explore more!</p>
    </div>
    <>------------------------------------------------------</>
    <div>
    <h3>Product Details:</h3>
    <p>Name: {product.name}</p>
    <p>Price: {product.price}</p>
    <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
    <p>Check out our latest products!</p>
    <p>Don't miss out on our special offers!</p>
    <p>Shop now and save big!</p>
    <p>Thank you for visiting our store!</p>
    </div>
    </>
  )
}

export default Person
