import React from 'react';
import {Link as ScrollLink} from 'react-scroll';

export default function Footer(){
	return (
		<div className="footer-container">
			<div className="company-info">
				<h5> Piroll Design, Inc. </h5>
				<p>© 2017 Piroll. All rights reserved</p>
				<p>Designed by robiruk</p>
			</div>

			<div className="email-number">
				<p> hello@pirolltheme.com</p>
				<p> +44 987 654 3210</p>
			</div>

			<div className="links-1">
				<p> <ScrollLink 
				to="work" 
				smooth={true} 
              	duration={1000}>
              	Projects </ScrollLink>
              	</p>

				<p><ScrollLink 
				to="about" 
				smooth={true} 
              	duration={1000}>
              	About </ScrollLink>
              	</p>

				<p> <ScrollLink 
				to="services" 
				smooth={true} 
              	duration={1000}>
              	Services </ScrollLink>
              	</p>

				<p> Career</p>
			</div>

			<div className="links-2">
				<p>News</p>
				<p> Events</p>
				<p><ScrollLink 
				to="contact" 
				smooth={true} 
              	duration={1000}>
              	Contact </ScrollLink></p>
				<p> Legal</p>
			</div>

			<div className="social-media">
				<i className='fab fa-facebook-f' /><br/>
				<i className='fab fa-twitter' /><br/>
				<i className='fab fa-instagram' /><br/>
				<i className='fab fa-linkedin' /><br/>
			</div>
		</div>
		)
}