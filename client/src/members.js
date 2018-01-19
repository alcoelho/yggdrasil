import React, { Component } from 'react';
import './members.css';

// const Members = () => (
class Members extends Component {
	state = {users: []}

	componentDidMount() {
		fetch('/groups/219/users')
		.then(res => res.json())
		.then(users => this.setState({users: users}))
	}

	render () {
		return (
			<div className="members">
				<div className="members-title">Membros</div>
				<div className="member-icons">
					{this.state.users.map(user => 
						<a href={user.web_url}><img className="member-icon" src={user.avatar_url}/></a>
					)}
				</div>
				{/* <div className="member-icons">
					<img className="member-icon" src="https://pm1.narvii.com/6403/61c61e34438f12c351fd23d2191e0defbb7fc705_hq.jpg"/>
					<img className="member-icon" src="https://78.media.tumblr.com/66472eb1568926e46c134f66af731ea3/tumblr_inline_nd1sbdelFY1rfrffw.jpg"/>
					<img className="member-icon" src="https://vignette.wikia.nocookie.net/yugioh/images/3/3e/Yamiyugiddm.png/revision/latest/scale-to-width-down/350?cb=20160612073736"/>
					<img className="member-icon" src="http://www.behindthevoiceactors.com/_img/chars/thumbs/jaden-yuki-yu-gi-oh-gx-3.34_thumb.jpg"/>
					<img className="member-icon" src="http://images4.fanpop.com/image/photos/20800000/Yusei-Fudo-yu-gi-oh-guys-20880730-853-480.jpg"/>
					<img className="member-icon" src="https://i.ytimg.com/vi/qj32vE-9I8E/maxresdefault.jpg"/>
					<img className="member-icon" src="http://wallpoper.com/images/00/36/96/45/yu-gi-oh-yugi_00369645.png"/>
				</div> */}
			</div>
		);
	}
}

export default Members;