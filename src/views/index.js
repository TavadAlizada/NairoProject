import React from "react";
import Home from  "./HomePage/Home";
import About from  "./HomePage/About";
import Resume from  "./HomePage/Resume";
import Portfolio from  "./HomePage/Portfolio";
import Blog from "./HomePage/Blog"
import Contact from "./HomePage/Contact"
import Cursor from "./HomePage/Cursor";

export default function HomePage() {
  return (
    <>
      <Cursor/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </>
  )
}
