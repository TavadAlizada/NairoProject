import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CursorContext } from '../../context/Cursor'
import "../../App.css"
import { BlogModalProvider } from '../../context/BlogModalContext';

export default function ContentItems(props) {
  const cursorEvent = useContext(CursorContext);
  const BlogModalContext = useContext(BlogModalProvider);

  return (
    <>
      <div className="contentItem">
          <div className="img" onClick={()=>BlogModalContext.handleClickOpen(props)}>
              <img src={props.img} alt="" />
          </div>
          <div className="text">
              <span>{props.title}</span>
              <h6 className='hover-underline-animation'>
                  <Link className='hover-underline-animation' to ="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>{props.text}</Link>
              </h6>
          </div>
        </div>
    </>
  )
}
