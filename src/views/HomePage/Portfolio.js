import React,{useState} from 'react'
import 'animate.css';

export default function Portfolio() {
    const [isActive, setActive] = useState(false)
    const [getState,setState] = useState({
        defaultObjects:1,
        objects:[
            {
                id:1,
                title:"All"
            },
            {
                id:2,
                title:"Branding"
            },
            {
                id:3,
                title:"Photography"
            },
            {
                id:4,
                title:"Fashion"
            },
            {
                id:5,
                title:"Product"
            }
        ],
        pictureOne:[
            [{
                id:1,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-1.jpg",
                category:[1,4,5],
                title:"Bottle Illustration",
                content:"Figma Shoot"
            },
            {
                id:2,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-4.jpg",
                category:[1,3,2],
                title:"E-Learning App",
                content:"Nuna ios App"
            },
            {
                id:3,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-7.jpg",
                category:[1,2,5],
                title:"Visual Design",
                content:"Themeforest Marke"
            }],
            [{
                id:4,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-2.jpg",
                category:[1,4,5],
                title:"Business Card",
                content:"Graphicriver Market"
            },
            {
                id:5,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-5.jpg",
                category:[1,2,3],
                title:"Chatting Application",
                content:"Codecanyon Market"
            },
            {
                id:6,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-8.jpg",
                category:[1,5],
                title:"Web Application",
                content:"Behance Shot"
            }],
            [{
                id:7,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-3.jpg",
                category:[1,4,2],
                title:"Chatting App Design",
                content:"Codecanyon Market"
            },
            {
                id:8,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-6.jpg",
                category:[1,2,5],
                title:"Web Application",
                content:"Behance Shot"
                
            },
            {
                id:9,
                img:"https://nairo.ibthemespro.com/img/portfolio/m-portfolio-9.jpg",
                category:[1,3],
                title:"Web Motion",
                content:"Behance Shot"
            }]
        ]
    })

    const toggleActive =(index)=> {setState ({...getState,defaultObjects:index})}
    const handleClick = (event) => {setActive (current => event)}
  return (
      <section className="portfolio" id="portfolio">
        <div className="container">
            <div className="title">
                <h2>My Portfolio</h2>
            </div>
            <ul>
                
                {getState.objects.map((element,index)=>(
                    <li key={index} onClick={()=>{toggleActive(element.id)}}>
                        <span>{element.title}</span>
                    </li>
                ))}
            </ul>
            <div className="portfolioImg">
             {getState.pictureOne.map((row,index)=>(
               <div className="portrait" key={index}>
                {row.map((item,index)=>(
                    item.category.map((itemsCategory)=>(
                      getState.defaultObjects === itemsCategory ?
                        <div key={index} className="img"  onMouseOver={()=>handleClick(true)} onMouseOut={()=>handleClick(false)}>
                            <div className={`imgContent delay-1 animate__animated ${ isActive ? "animate__fadeInUp " : " " }`}>
                                <h5>
                                  <a href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template">{item.title}</a>
                                </h5>
                                <span>{item.content}</span>
                            </div>
                           {<img src={item.img}/>}
                           <a href="https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template" className='link'>
                              <i className="fas fa-link"></i>
                           </a>
                        </div> :null 
                    ))
                    ))}
                </div>)
            )}
           </div>
       </div>
      </section>
  )
}
