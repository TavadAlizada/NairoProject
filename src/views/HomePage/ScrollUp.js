import React from 'react'
import { useState,useEffect } from 'react';
import "../../App.css";

export default function ScrollUp() {
    const [scrollUp,setScrollUp] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 300){
                setScrollUp(true);
                console.log("100")
                // document.querySelector(".scrollUp"
            }else{
                setScrollUp(false);
                console.log("0")
            }
        })
    },[])
    const scroll = () => {
        window.scrollTo ({
            top:0,
            behavior:"smooth"
        })
      
    }
  return (
    <>
        {scrollUp && (
            <button className='scrollUp' onClick={scroll}>
                <i className ="fas fa-arrow-up"></i>
            </button>
        )}
    </>
    
  )
}
