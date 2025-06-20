import React from 'react';

const PostCard = (props) =>{
  return(
    <div className='post-card'>
      <h3><g>Title: </g>{props.title}</h3>
      <p><g>Body:</g> {props.body}</p>
    </div>
  )
}

export default PostCard;