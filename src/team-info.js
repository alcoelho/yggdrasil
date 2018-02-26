import React from 'react';
import './team-info.css';

const TeamInfo = ({props}) => (
	<div className="team-info-box">
				<div className="team-icon">
					<img className="team-icon-image" src="http://gitlab.globoi.com/uploads/-/system/group/avatar/273/a9d4d9fb8adfcae0f5ee8ae6fd057be1_400x400.jpeg"/>
				</div>

				<div className="team-info">
					<h1 className="team-name">{props.teamName}</h1>
					<strong className="team-email">{props.teamEmail}</strong>
					<div className="team-description">{props.teamDescription}</div>
				</div>
			</div>
)

export default TeamInfo;