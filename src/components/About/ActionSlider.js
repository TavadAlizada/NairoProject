import React from 'react'

export default function ActionSlider(props) {
  return (
    <div className="actionSlider">
        <div className="img">
            <img src={props.img} alt=""/>
        </div>
        <div className="content">
            <p>{props.content}</p>
            <h6>{props.title}</h6>
            <span>{props.text}</span>
        </div>
    </div>
    
  )
}