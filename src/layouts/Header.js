import React, {useContext, useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import 'tippy.js/animations/scale.css';
import Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import { CursorContext } from '../context/Cursor';


export default function Header() {

const cursorEvent = useContext(CursorContext);

    const [appState, changeState] = useState({
        activeObject : 0 ,
        objects : [
            {
                id:1,
                content:"Home",
                name :"fas fa-home",
                link:'home'
            },
            {
                id:2,
                content:"About",
                name :"far fa-user",
                link:'about'
            },
            {
                id:3,
                content:"Resume",
                name :"far fa-list-alt",
                link:'resume'
            },
            {
                id:4,
                content:"Work",
                name :"fas fa-suitcase",
                link:'portfolio'
            },
            {
                id:5,
                content:"Blog",
                name :"fas fa-blog",
                link:'blog'
            },
            {
                id:6,
                content:"Contact",
                name :"fas fa-phone-alt",
                link:'contact'
            }
        ]
    })
    const toggleActive = (index)=>{changeState({ ...appState, activeObject: index })}
  return (
     <header>
        <div className="logo">
           <a href ="">N</a>
        </div>
        <ul className="nav" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>
            {appState.objects.map((element, index)=>(
                 <li key={index} >        
                        <Link to={element.link} spy={true} smooth={true} offset={0} duration={500} onChange={()=>{toggleActive(element.id)}} className={(element.id === appState.activeObject ? "active" : "")}>
                          <Tippy animation="scale" content = {<span>{element.content}</span>}>
                             <i className={element.name}></i>
                          </Tippy>
                        </Link>
                </li>
            ))}
        </ul>
    </header>
  )
}
