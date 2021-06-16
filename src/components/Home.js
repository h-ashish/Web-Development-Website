import React from 'react';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Products from './Products';
import WorkProcess from './WorkProcess';
import Services from './Services';
import Testimonials from './Testimonials';
import Contactus from './Contactus';
import Footer from "./Footer";
import {Link as ScrollLink} from 'react-scroll';
export default function Home(){
	return (
		<>
		<div className='home-container'>  
	      <div className='small-container'>
	        <h1>We Design and Develop</h1>
	      	<p>We are a new design studio based in USA. We have over 20 years of combined
	      	experience, and know a thing or two about designing websites and mobile apps</p>
	      	<button><ScrollLink
                to = 'contact'
                smooth={true} 
                duration={1000}>
                Contact us
              </ScrollLink></button>
	      </div>
	    </div>
	    <About/>
	    <Skills/>
	    <Work/>
	    <Products/>
	    <WorkProcess/>
	    <Services/>
	    <Testimonials/>
	    <Contactus/>
	    <Footer/>
	    </>
		)
}