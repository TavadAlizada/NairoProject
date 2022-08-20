import React from 'react'

export default function (props) {
  return (
    <div className="resumeItems">
        <div className="resumeLeft">
            <h5>{props.name}</h5>
            <span>{props.work}</span>
            <h6>{props.time}</h6>
            <button>{props.workTime}</button>
        </div>
        <div className="resumeLine"></div>
        <div className="resumeRight">
            <h5>{props.title}</h5>
            <p>{props.text} </p>
        </div>
    </div>
  )
}
