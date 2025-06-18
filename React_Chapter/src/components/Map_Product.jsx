import React from 'react'

const Map_Product = () => {

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

  return ( //using map method to iterate over product_Data array
    <div>
      {product_Data.map(data => (
        <div key={data.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <img src={data.image} alt={`${data.firstName} ${data.lastName}`} style={{ width: '80px', borderRadius: '50%' }} />
          <h3>Name:{data.firstName} {data.lastName}</h3>
          <p><strong>Title:</strong> {data.company.title}</p>
          <p><strong>Salary:</strong> ₹{data.company.salary.toLocaleString()}</p>
          <p><strong>University:</strong> {data.university}</p>
        </div>
      ))}
    </div>
  )
}

export default Map_Product
