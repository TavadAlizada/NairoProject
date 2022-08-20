import React, { useEffect, useRef, useContext } from 'react';
import { CursorContext } from "../../context/Cursor";

export default function Cursor() {

    const cursorEvent = useContext(CursorContext);
    const delay = 1;
    const cursorVisible = useRef(true);
    const cursorEnlarge = useRef(false);
    const cursor = useRef(null);
    const cursorBack = useRef(null);
    const endX = useRef(window.innerWidth/2);
    const endY = useRef(window.innerHeight/2);
    const _x = useRef(0);
    const _y = useRef(0);
    const requestRef = useRef(null);

    useEffect (()=>{

        document.addEventListener('mousemove', mouseMoveEvent) 
        animateCursorBack(); 

    },[])

    useEffect (()=>{
      cursorEnlarge.current=cursorEvent.cursor;
      toggleCursorSize(); 
    },[cursorEvent.cursor])

    const toggleCursorVisibility = ()=>{
        if(cursorVisible.current) {
          cursor.current.style.opacity = 1;
          cursorBack.current.style.opacity = 1;
        }else {
          cursor.current.style.opacity = 0;
          cursorBack.current.style.opacity = 0;
        }
    }
    const toggleCursorSize = () =>{
        if(cursorEvent.cursor) {
          cursor.current.style.transform = `translate(-50% , -50%) scale(0.7)`
          cursorBack.current.style.transform = `translate(-50% , -50%) scale(1.5)`
        }else {
          cursor.current.style.transform = `translate(-50% , -50%) scale(1)`
          cursorBack.current.style.transform = `translate(-50% , -50%) scale(1)`
        }
    }
    const mouseEnterEvent = () =>{
      cursorVisible.current= true;
      toggleCursorVisibility();
  }
    const mouseLeaveEvent = () =>{
      cursorVisible.current= false;
      toggleCursorVisibility();
  }
    const mouseOverEvent = () =>{
      cursorEnlarge.current = true;
      toggleCursorSize();
    }
    const mouseOutEvent = () =>{
      cursorEnlarge.current = false;
      toggleCursorSize();
    }
    const mouseMoveEvent = e =>{
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;

      cursor.current.style.top = endY.current + 'px';
      cursor.current.style.left = endX.current + 'px'
      
    }
    const animateCursorBack = () =>{
      _x.current += (endX.current - _x.current / delay)
      _y.current += (endY.current - _y.current /  delay)
      
      cursorBack.current.style.top = _y.current + 'px';
      cursorBack.current.style.left =_x.current + 'px';

      requestRef.current = requestAnimationFrame(animateCursorBack)
    }


  return (
    <>
        <div ref={cursor} className={cursorEvent.cursor ? "cursor big-cursor" : "cursor"}></div>
        <div ref={cursorBack} className={cursorEvent.cursorBack ? "cursorBack big-back-cursor" : "cursorBack"}></div>
    </>
  )
}
