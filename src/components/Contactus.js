import React from 'react';
export default function Contactus(){
	return(
		<>
		<div className="contactus-container" id="contact">
			<div className="form-container">
				<div className="contact-info">
					<h1>Contact Info</h1>
					<p> To give beginning divide, cattle. Give moving won't,
					there be the abundantly she'd brought air upon. Light hath
					subdue. Life days creature upon first heaven gathering day. </p>

					<p><strong>Address: </strong> 10111 Santa Monica Boulevard, LA</p>
					<p><strong>Phone: </strong>+44 987 654 3210</p>
					<p><strong>Email: </strong>info@Example.com</p>
					<p><strong>Fax: </strong>+44 987 654 3210</p>
				</div>

				<div className="form">
					<div className="name-email-details">
						<input type="text" id="name" placeholder="Your Name"/>
						<input type="email" id="email" placeholder="Your Email"/><br/>
					</div>

						<input type="text" placeholder='Your Title' /><br/>
						<textarea placeholder="Your comment" rows="8" cols="22"></textarea> <br/>
						<button> Send Message</button>
				</div>
			</div>

			<div className="map"> 
			<iframe 
			// eslint-disable-next-line
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3199768284094!2d-74.01065998517619!3d40.71097204561642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a18445bd4dd%3A0xde341d33b32f4160!2sTechnosip%20-%20Web%20%26%20Mobile%20Application%20Development%20Company!5e0!3m2!1sen!2sin!4v1623080404919!5m2!1sen!2sin" 
			align="middle"
			width="100%" 
			height="450" 
			style={{border:0}} 
			allowFullScreen="" 
			loading="lazy"></iframe>

			</div>

		</div>

		</>
		)
}