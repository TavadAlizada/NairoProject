import React from 'react'
import ResumeItems from '../../components/Resume/ResumeItems'
import Evaluation from '../../components/Resume/Evaluation'
import Item from '../../components/Resume/Item'

export default function Resume() {
  return (
      <section className="resume" id="resume">
        <div className="container">
            <div className="title">
                <h2>Experience.</h2>
            </div>
            <div className="resumeBox">
                <ResumeItems name ="Sr. Front-end Engineer" work ="Google | Remote"
                 time ="Feb 2021 - Present" workTime =" Full Time" title ="Google LLC"
                 text="Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                 aute irure dolor."/>
                 
                   <ResumeItems name ="Visual Designer" work ="Ridian | Remote"
                 time ="Mar 2020 - Present" workTime =" Full Time" title ="Ridian IT"
                 text="Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                 aute irure dolor."/>

                   <ResumeItems name ="Animation Artist" work ="IbThemes | Remote"
                 time ="Jan 2019 - Present" workTime =" Full Time" title ="IB Themes"
                 text="Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                 nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                 aute irure dolor."/>
            </div>
            <div className="line"></div>
            <div className="title">
                <h2>Education & Skills</h2>
            </div>
            <div className="evaluation">
                <div className="evaluationLeft">
                    <Evaluation year = "2018-2020" work = "Ph.D in Horriblensess"
                    study = "University Of Evil Doing"/>
                     <Evaluation year = "2013-2016" work = "Bsc. in Computer Science"
                    study = "World University"/>
                     <Evaluation year = "2010-2012" work = "Graphic Artist Training"
                    study = "Graphic Master Institute"/>
                </div>
                <div className="evaluationRight">
                    <Item title = "92%" text = "HTML5" />
                    <Item title = "85%" text = "React JS" />
                    <Item title = "90%" text = "Vue JS" />
                    <Item title = "88%" text = "Ui/Ux" />
                </div>
            </div>
        </div>
      </section>
  )
}
