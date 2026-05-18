import React from 'react'

const Card = (props) => {
  return (
    
    <div className = 'CARD'>
        <img src='https://unsplash.com/photos/field-of-daisies-in-a-lush-green-meadow--sftOAq6m8Y'></img>
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>view profile</button>
      
    </div>
  )
}

export default Card
