import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AmigoSecretoStore from './AmigoSecretoStore';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups : AmigoSecretoStore.getUserGroups(this.props.user[0].id)
    }
  }

  componentWillMount() {
    // AmigoSecretoStore.on("change", () => {
    //   this.setState( {
    //     groups : AmigoSecretoStore.getUserGroups(this.props.user[0].id)
    //   } )
    // });
    // console.log(this.state.groups);
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-sm-6'>
            <h3>Dashboard</h3>
          </div>
          <div className='col-sm-6'>
            <h3 className='pull-right'>Hello, {this.props.user[0].name}</h3>
          </div>
        </div>
        <ul>
          {
            this.state.groups.map(
              (item, index) =>
              <li key={item.id}>
                {item.title} <br />
                Date: {item.date.getMonth() + 1}/{item.date.getDate()}/{item.date.getFullYear()}
                &nbsp; <Link to={`/groupDetail/${item.id}`}>Details</Link>
              </li>
            )
          }
        </ul>
        <Link to="/createGroup"><button>Create New Group</button></Link>
        <Link to="/search"><button>Search for Groups</button></Link>
      </div>
    )
  }
}

export default Dashboard;
