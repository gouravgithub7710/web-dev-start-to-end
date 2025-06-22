import React from 'react'
import { useState } from 'react'
import {movies} from './Data.js'
export const Movies = () => {
  const [MovieList, setMovieList] = useState()
  return (
    <div style={{display:'flex', flexWrap:'wrap', gap:'20px',padding:'20px',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
    {movies.map((data)=>(
      <div key={data.id}>
        
       <div>
         <img src={data.poster_path} alt={data.title} style={{width:'200px'}}/>
       </div>
      <h3 style={{width:'200px'}}>{data.title}</h3>
      <p>{data.release_date}</p>
      </div>
    ))}
      <img src='' alt=''/>
    </div>
  )
}

export default Movies
