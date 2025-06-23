import React from 'react'
import { useEffect,useState } from 'react'
const Fetch_Data_API = () => {
 const [ApiData, setApiData] = useState([])
  // This component is intended to fetch data from an API
 useEffect(() => {
   const FeatchDatafromAPI= async()=>{
    const api = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data= await api.json()
    setApiData(data)
    console.log('my data',data);
  }
    FeatchDatafromAPI()
 }, [])
 
  return (
    <div>
       <h1>Fetch Data from API Example</h1>
       <h2>{ApiData.map((data)=><div key={data.id}
       style={{border:'1px solid brown',margin:'10px',padding:'10px',borderRadius:'5px',backgroundColor:'gray',textAlign:'center', color:'blue'}}>
          <h3>{data.title}</h3>
          <h5>{data.body}</h5>
       </div>)}</h2>
    </div>
  )
}

export default Fetch_Data_API
