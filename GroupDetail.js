import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AmigoSecretoStore from './AmigoSecretoStore';

class GroupDetail extends Component {
  constructor(props) {
    super(props);
    console.log("creting details");
    this.state = {
      group : AmigoSecretoStore.getGroupById(parseInt(this.props.match.params.number))
    }
    console.log(JSON.stringify(this.state.group));
  }
  render() {
    return (
      <div>
        <h3>Group Details - {this.props.match.params.number}</h3>
        <div>
          Name: {this.state.group.title}
        </div>
        <div>
          <h3>Members</h3>
          <ul>
            {
              this.state.group.members.map(
                (member) =>
                <li key={member.id}>{member.name}</li>
              )
            }
          </ul>
          <a href="" className='btn btn-primary'>Join</a>
          <Link to="/dashboard">Dahboard</Link>
        </div>
      </div>
    );
  }
}

export default GroupDetail;
