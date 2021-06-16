import React from 'react';

export default function Work(){
	return(
		<div className="work-container" id="work"> 

			<div className="work-small-container" >
			<i className = 'fas fa-briefcase' /> 
			<div className="p-container">
				<p> <strong> 548 </strong> </p>
				<p>projects completed</p>
				</div> 
			</div>

			<div className="work-small-container" >
			<i className = 'far fa-clock' /> 
			<div className="p-container">
				<p> <strong> 1465 </strong> </p> 
				<p>Working Hours</p>
			</div>
			</div>

			<div className="work-small-container" >
			<i className = 'far fa-star' />
			<div className="p-container"> 
				<p> <strong> 612 </strong> </p> 
				<p>Positive Feedbacks</p>
			</div>
			</div>

			<div className="work-small-container" >
			<i className = 'far fa-heart' /> 
			<div className="p-container">
				<p> <strong> 735 </strong> </p> 
				<p>Happy clients</p>
			</div>
			</div>
		</div>
		)
}