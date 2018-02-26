import React from 'react';
import TeamInfo from './team-info.js';
import Members from './members.js';
import Skills from './skills.js';
import Contact from './contact.js';
import './sidebar.css';

const teamProps = {teamName: "Wildcats"}

const Sidebar = ({teamProps}) => (
		<section className="sidebar">
			<TeamInfo props={teamProps}/>
			<Members />
			<Skills />
			<Contact />
		</section>
)

export default Sidebar;