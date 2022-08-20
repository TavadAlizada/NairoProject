import React, { useContext } from 'react'
import Title from "../../components/About/Title";
import ActionItems from '../../components/About/ActionItems';
import Awards from '../../components/About/Awards';
import ActionSlider from '../../components/About/ActionSlider';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Logo from "../../../src/assests/img/about-me.jpg";
import { CursorContext } from '../../context/Cursor';


export default function About() {
  const cursorEvent = useContext(CursorContext);
  return (
    <section className="aboutSection" id="about">
    <div className="container">
      <div className="biography">
        <div className="aboutUser">
            <div className="img">
                <div className="imgIn">
                    <img src={Logo} alt=""/>
                </div>
                <div className="imgNav">
                    <a href = "https://www.facebook.com/campaign/landing.php?campaign_id=1557999833&extra_1=s%7Cc%7C294720964991%7Ce%7Cfacebook%27%7C&placement=&creative=294720964991&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1557999833%26adgroupid%3D58741202323%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1000998%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwzeqVBhAoEiwAOrEmzSkVxfc3nfRN2FyREb7uo-t5SKOcHV8bqLL3ijVlZ58-tE8LE0laBRoCdSwQAvD_BwE"
                     onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href ='https://twitter.com/i/flow/login' onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-twitter"></i></a>
                    <a href ="https://www.instagram.com/accounts/login/" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-instagram"></i></a>
                    <a href ="https://tr.linkedin.com/" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-linkedin-in"></i></a>
                    <a href ="https://tr.pinterest.com/" onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}><i className="fab fa-pinterest-p"></i></a>
                </div>
            </div>
            <div className="aboutTitle">
                <h6>UX/UI Designer</h6>
                <h2>Nairobi Gadot</h2>
            </div>
        </div>
         <div className="content">
           <Title content ="Biography"/>
            <div className="text">
                <p>
                    I'm a Freelancer Front-end Developer with over 3 years of experience.
                    I'm from San Francisco. I code and create web elements for amazing people around
                    the world. I like work with new people. New people new Experiences.
                </p>
                <p>
                    I'm a Freelancer Front-end Developer with over 3 years of experience.
                    I'm from San Francisco. I code and create web elements for amazing people around
                    the world. I like work with new people. New people new Experiences.
                </p>
            </div>
           <div className="about">
              <div className="aboutItems">
                  <p><span>Name: </span> Nairobi Gadot </p>
                  <p><span>Birthday: </span> 4th April 1994 </p>
                  <p><span>Age: </span> 26 years </p>
                  <p><span>Address: </span> San Francisco </p>
              </div>
              <div className="aboutItems">
                <p><span>Phone: </span> (+38) 469 2344 2364 </p>
                <p><span>Email: </span> info@domainname.com </p>
                <p><span>Skype: </span> nairob.40 </p>
                <p><span>Freelance: </span> Available </p>
            </div>
           </div>
         </div>
      </div>
      <div className="line"> </div>
      <Title content ="What I do?"/>
      <div className="action">
        <ActionItems title ="Web Design"
         content =" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         icon ="fa-mobile-alt"/>

        <ActionItems title ="Web Development"
         content =" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         icon ="fa-desktop"/>

        <ActionItems title ="Seo Marketing"
         content =" Lorem ipsum dolor sit amet, consectetur adipisicing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         icon ="fa-bullseye"/>
      </div>
      <div className="line"> </div>
      <Title content ="Awards."/>
        <div className="action">
            <Awards title ="Creative Designer" content ="Site of the day"/>
            <Awards title ="Yearly Best Performer" content ="Site of the day"/>
            <Awards title ="Best Learner Award" content ="Site of the day"/>
        </div>
      <div className="line"></div>
        <Title content ="Testimonials."/>
        <Carousel
                emulateTouch ={true}
                swipeable={false}
                draggable={true}
                rewindWithAnimation={true}
                autoPlay={false}
                showDots={true}
                responsive={{
                    desktop: {
                      breakpoint: {
                        max: 4000,
                        min: 1024
                      },
                      items: 2,
                      partialVisibilityGutter: 40
                    },
                    mobile: {
                      breakpoint: {
                        max: 464,
                        min: 0
                      },
                      items: 1,
                      partialVisibilityGutter: 30
                    },
                    tablet: {
                      breakpoint: {
                        max: 1024,
                        min: 464
                      },
                      items: 1,
                      partialVisibilityGutter: 30
                    }
                  }}
                ssr={true}
                infinite={true}
                arrows={false}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={600}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
              <ActionSlider content ="Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s." title ="Nancy Byers"
                text ="CEO at ib-themes" img ="https://nairo.ibthemespro.com/img/testimonial/team-1.jpg" />
              <ActionSlider content ="Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s." title ="Jara Afsari"
                text ="CEO at ib-themes" img=" https://nairo.ibthemespro.com/img/testimonial/team-2.jpg" />
        </Carousel>
    </div>
  </section>
  )
}
