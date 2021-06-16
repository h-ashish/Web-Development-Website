import React from 'react';

export default function Skills(){
	return(
		<div className="skills-container"> 
			<div className="skills-small-container">
			<h1> Professional Skills</h1>

			<label htmlFor="progress-bar"> UI/UX DESIGN   75% </label> <br/>
			<progress max="100" value="75" className="progress-bar"> </progress> <br/>

			<label htmlFor="progress-bar"> WEB DEVELOPMENT   90% </label> <br/>
			<progress max="100" value="90" className="progress-bar"> </progress> <br/>

			<label htmlFor="progress-bar"> MARKETING   65% </label> <br/>
			<progress max="100" value="65" className="progress-bar"> </progress>

			</div>
		</div>
		)
}