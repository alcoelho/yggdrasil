import React from 'react';
import './team-info.css';

const TeamInfo = () => (
	<div className="team-info-box">
				<div className="team-icon">
					<img className="team-icon-image" src="http://gitlab.globoi.com/uploads/-/system/group/avatar/273/a9d4d9fb8adfcae0f5ee8ae6fd057be1_400x400.jpeg"/>
				</div>

				<div className="team-info">
					<h1 className="team-name">Nome do time</h1>
					<strong className="team-email">emaildotime@corp.globo.com</strong>
					<div className="team-description">
						Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o 
						século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de 
						tipos.
						</div>
				</div>
			</div>
)

export default TeamInfo;