import React, { useContext } from 'react'
import { CursorContext } from '../context/Cursor'

export default function Footer() {
    const cursorEvent = useContext(CursorContext)
  return (
    <footer>
        <div className="container">
            <div className="footer">
                <div className="link">
                    <a href="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-facebook-f"></i></a>
                    <a href="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-twitter"></i></a>
                    <a href="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-instagram"></i></a>
                    <a href="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-linkedin-in"></i></a>
                    <a href="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-pinterest-p"></i></a>
                </div>
                <div className="text">
                    <p onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>© 2022 copyright <span> ib-themes</span> all right reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
