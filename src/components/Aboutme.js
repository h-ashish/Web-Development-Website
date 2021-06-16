import React from 'react';
import Work from './Work';
import Footer from './Footer';
export default function Aboutme(){
	return(
		<div className="aboutme-container">
			<div className="aboutme-img">
				<h1> Amelia Woods </h1>
				<p> I am a Graphic and Web Designer based in New York, specializing in
				 User Interface Design and Development.</p>
			</div>
			<Work/>

			<div className="desc-container">

				<div className="img-container">
				</div>
				<div className="desc-small-container">
				<h1>About Me</h1>
				<p> Given let waters air sea had you'll, may seed abundantly fish.
				Were, you'll earth forth winged above brought. Own darkness they're 
				him can't fourth sea place have.</p>

				<p> So the above May starts cattle fruitful face shell. Tree it, winged.
				Every signs male function place sea. </p>
				</div>
			</div>

			<div className="need-container">
				<h1> Need a Project? </h1>
				<p> Let us know what you're looking for in an agency. We'll take a look and see
			if this could be the start of something beautiful.</p>
				<button> Send Message</button>
			</div>

			<Footer/>
		</div>
		)
}