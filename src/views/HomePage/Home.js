import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import Logo from "../../assests/img/home-banner.png";
import { CursorContext } from '../../context/Cursor';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Home(props) {

  const cursorEvent = useContext(CursorContext);
  
  return (
    <section className="home" id="home">
        <div className="homeUp">
            <div className="homeUpInfo">
               <Link to="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)} >+04 6545-9535-6515</Link>
               <Link to=""  onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)} > nairobi-designer@domain.com</Link>
            </div>
            <div className="homeUpLang">
               <ul>
                    <li className="active">
                        <Link to="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>EN</Link>
                    </li>
                    <li>
                        <Link to="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>FR</Link>
                    </li>
               </ul>
            </div>
        </div>
        <div className="container">
          <div className="homeBox">
            <div className="boxType">
                <h6>Hello, My name is</h6>
                <h1>Nairobi Gadot</h1>
                <div className="homeTitle">
                      <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        preventMovementUntilSwipeScrollTolerance={false}
                        showThumbs={false}
                        showIndicators={false}
                        axis={'vertical'}
                        width={"30%"}
                        interval={2000}
                        emulateTouch={false}
                        showArrows={false}
                        showStatus={false}
                      >
                          <div className='slideAction'>
                              <h3>UI/UX Designer</h3>
                          </div>
                          <div className='slideAction'>
                              <h3>App Developer</h3>
                          </div>
                          <div className='slideAction'>
                              <h3>Full-Stack Developer</h3>
                          </div>
                      </Carousel>
                </div>
                <p>
                    I design and develop services for customers of all sizes, 
                    specializing in creating stylish, modern websites, web services
                    and online stores.
                </p>
                <div className="downloadButton">
                    <Link to="" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}> Download CV </Link>
                </div>
              </div>
              <div className="homeImg">
                 <img src={Logo}/>
              </div>
          </div>
        </div>
    </section>
  )
}
