import React, { Component } from 'react';
import './Home.css';

class Groups extends Component {
  state = {groups: []}

  componentDidMount() {
    fetch('/groups')
      .then(res => res.json())
      .then(groups => this.setState({ groups }));
  }

  render() {
    return (
      <div className="Groups">
        <h1>Groups</h1>
        {this.state.groups.map(group =>
          <a href={"/groups/" + group.id + "/projects"}><div key={group.id}>{group.name}</div></a>
        )}
      </div>
    );
  }
}

export default Groups