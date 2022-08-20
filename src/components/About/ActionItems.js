import React from 'react'

export default function ActionItems(props) {
  return (
    <div className="actionItems">
        <div className="item">
            <div className="icon">
                <i className={`fas ${props.icon}`}></i>
            </div>
            <div className="content">
                <h5>{props.title}</h5>
                <p>
                   {props.content}
                </p>
            </div>
        </div>
    </div>
  )
}
