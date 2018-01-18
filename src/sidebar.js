import React from 'react';
import './sidebar.css';
import TeamInfo from './team-info.js';
import Members from './members.js';

const Sidebar = () => (
		<section className="sidebar">
			<TeamInfo />
			<Members />
		</section>
)

export default Sidebar;