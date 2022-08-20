import React from 'react'

export default function Item(props) {
  return (
    <div className="item">
        <h6>{props.title}</h6>
        <div className="skillBar">
            <h5>{props.text}</h5>
            <div className="value"></div>
        </div>
    </div>
  )
}
