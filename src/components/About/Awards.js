import React from 'react'

export default function Awards(props) {
  return (
    <div className="awards">
        <div className="logo">
            <img src="https://nairo.ibthemespro.com/img/award/a1.png" alt=""/>
        </div>
        <div className="awardsTitle">
            <h6>{props.title}</h6>
            <p>{props.content}</p>
        </div>
     </div>
  )
}
