import React from 'react';
import './contact.css';

const Contact = () => (
	<section className="contact">
		<div className="contact-title">Contato</div>
		<ul className="contact-options">
			<li className="contact-item">
				<img className="contact-icon" src="http://www.freeiconspng.com/uploads/github-logo-icon-30.png"/>
					<a href="http://www.google.com">GitHub</a>
			</li>
			<li className="contact-item">
				<img className="contact-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/2000px-GitLab_Logo.svg.png"/>
				<a href="http://www.google.com">GitLab</a>
			</li>
			<li className="contact-item">
				<img className="contact-icon" src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"/>
				<a href="http://www.google.com">GitHub</a>
			</li>
		</ul>
	</section>
);

export default Contact;