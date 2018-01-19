import React, { Component } from 'react';
import './team-info.css';

const DEFAULT_AVATAR_URL = "http://gitlab.globoi.com/uploads/-/system/group/avatar/273/a9d4d9fb8adfcae0f5ee8ae6fd057be1_400x400.jpeg"

// const TeamInfo = () => (
class TeamInfo extends Component {
	state = {teamInfo: []}

	componentDidMount() {
		fetch('/groups/219')
		.then(res => res.json())
		.then(teamInfo => this.setState({teamInfo: teamInfo}))
	}

	render() {
		return (
			<div className="team-info-box">
				{<div className="team-icon">
					<img className="team-icon-image" src={this.state.teamInfo[0] && this.state.teamInfo[0].avatar_url || DEFAULT_AVATAR_URL}/>
				</div>
				}
				{
				<div className="team-info">
					<h1 className="team-name">{this.state.teamInfo[0] && (this.state.teamInfo[0].description || this.state.teamInfo[0].full_name)}</h1>
					<strong className="team-email">{this.state.teamInfo[0] && this.state.teamInfo[0].full_name}@corp.globo.com</strong>
					<div className="team-description">
						Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o 
						século XVI.
					</div>
				</div>
				}
			</div>
	);
	}
}

export default TeamInfo;