import React from 'react';
import TeamInfo from './team-info.js';
import Members from './members.js';
import Skills from './skills.js';
import './sidebar.css';

const Sidebar = () => (
		<section className="sidebar">
			<TeamInfo />
			<Members />
			<Skills />
		</section>
)

export default Sidebar;