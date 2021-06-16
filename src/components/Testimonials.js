import React from 'react';
import Companies from './Companies';
export default function Testimonials(){

	return(
		<>
		<div className="testimonials-container" id="testimonials">
			<div className="testimonial-slider">
			  <ul className="slider">
			    <li>
			      <div className="testimonial-slider-content">
			        <q>Outstanding job and exceeded all expectations. It was a pleasure to work 
					with them on a sizable first project and am looking forward to start the next one asap.</q>
			        <p className="source">- Micheal Scott</p>
			      </div>
			    </li>
			    <li>
			      <div className="testimonial-slider-content">
			        <q>Amazing job done by the team. It was a pleasure to work 
					with them on a sizable first project and am looking forward to start the next one asap.</q>
			        <p className="source">- Eren Yeager</p>
			      </div>
			    </li>
			    <li>
			      <div className="testimonial-slider-content">
			        <q>Extraordinary performance by the employees with amazing dedication. It was a pleasure to work 
					with them on a sizable first project and am looking forward to start the next one asap.</q>
			        <p className="source">- Levi Ackerman</p>
			      </div>
			    </li>
			  </ul>
			</div>
		</div>

		   
		<Companies/>
		</>
		)
}