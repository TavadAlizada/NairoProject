import React from 'react'

export default function Evaluation(props) {
  return (
    <div className="evaluationItems">
        <span>{props.year}</span>
        <h5>{props.work}</h5>
        <span>{props.study}</span>
    </div>
  )
}
