import React from 'react'
import { useState } from 'react'
import {movies} from './Data.js'
export const Movies = () => {
  const [MovieList, setMovieList] = useState(movies)

const filterbyCategory = (cat) => {
  setMovieList(movies.filter((data)=>data.category==cat))
}
  return (
    <>
      <div className='my-3' style={{width:'1200px',margin:'auto'}}>
      <div className='mx-auto text-center'>
<button onClick={()=>setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">All</button>
<button onClick={()=>filterbyCategory("Action")} type="button" className="btn btn-outline-secondary mx-3">Action</button>
<button onClick={()=>filterbyCategory('Thriller')} type="button" className="btn btn-outline-success mx-3">Thriller</button>
<button onClick={()=>filterbyCategory('Animation')} type="button" className="btn btn-outline-danger mx-3">Animation</button>
<button onClick={()=>filterbyCategory('Horror')} type="button" className="btn btn-outline-warning mx-3">Horror</button>
<button onClick={()=>filterbyCategory('Drama')} type="button" className="btn btn-outline-info mx-3">Drama</button>
<button onClick={()=>filterbyCategory('Sci-Fi')} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
</div>
      </div>
    
    <div style={{display:'flex', flexWrap:'wrap',padding:'20px',justifyContent:'center',alignItems:'center',textAlign:'center',maxWidth:'1300px',backgroundColor:'black',margin:'auto',marginTop:'1.5rem'}}>
    {MovieList.map((data)=>(
      <div key={data.id} style={{maxWidth:'280px',textAlign:'center'}}>
        
       <div style={{padding:'10px'}} className='hover-effect'>
         <img src={data.poster_path} alt={data.title} style={{width:'200px',height:'280px',borderRadius:'10px',border:'3px solid blue'}}/>
       </div>
      <h5>{data.title}</h5>
      <p>{data.release_date}</p>
      </div>
    ))}
    </div>
    </>
  )
}

export default Movies
