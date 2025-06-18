import React from 'react'

const Filter_Product = () => {

  const product_Data=[{
    "id": 1,
    "firstName": "Rahul",
    "lastName": "Verma",
    "image": "https://randomuser.me/api/portraits/men/75.jpg",
    "company": { "title": "Software Engineer", "salary": 850000 },
    "university": "IIT Delhi"
  },
  {
    "id": 2,
    "firstName": "Priya",
    "lastName": "Sharma",
    "image": "https://randomuser.me/api/portraits/women/65.jpg",
    "company": { "title": "Product Designer", "salary": 780000 },
    "university": "NID Ahmedabad"
  },
  {
    "id": 3,
    "firstName": "Amit",
    "lastName": "Singh",
    "image": "https://randomuser.me/api/portraits/men/41.jpg",
    "company": { "title": "Data Analyst", "salary": 640000 },
    "university": "IIT Kharagpur"
  },
  {
    "id": 4,
    "firstName": "Neha",
    "lastName": "Patel",
    "image": "https://randomuser.me/api/portraits/women/72.jpg",
    "company": { "title": "UI/UX Designer", "salary": 700000 },
    "university": "NIFT Delhi"
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "lastName": "Choudhary",
    "image": "https://randomuser.me/api/portraits/men/31.jpg",
    "company": { "title": "DevOps Engineer", "salary": 900000 },
    "university": "BITS Pilani"
  },]

  
    const filter_Data= product_Data.filter((data =>data.firstName=='Vikram'))
    console.log(filter_Data);
    return (
      <div>
      {filter_Data.map(data=>(<div key={data.id}> 
      <img src={data.image}></img>
      <h1>{data.lastName}</h1>
      <h2>{data.company.title}</h2>
      <h3>{data.company.salary}</h3>
      <h4>Collage:{data.university}</h4>
      <h5>Name:{data.firstName}</h5>

      </div>))}
      </div>
  )
}

export default Filter_Product
