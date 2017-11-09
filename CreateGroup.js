import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AmigoSecretoStore from './AmigoSecretoStore';
import * as AmigoSecretoActions from './AmigoSecretoActions';

class CreateGroup extends Component {
  constructor() {
    super();
    this.state = {
      title : '',
      date : '',
      groups : AmigoSecretoStore.getUserGroups()
    };
  }

  handleTitleChange(event) {
    this.setState( {
        title : event.target.value
    })
  }

  handleDateChange(event) {
    this.setState( {
      date : event.target.value
    })
  }

  onAdd() {
    AmigoSecretoActions.addGroup(this.state.title);
  }

  render() {
    return(
      <div>
        <h1>New Group Form</h1>
        
        <label>Title:
          <input type='text' value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
        </label>
        <label>Date:
          <input type='text' value={this.state.date} onChange={this.handleDateChange.bind(this)}/>
        </label>
        <button className='btn btn-success' onClick={this.onAdd.bind(this)}>Add</button>
        
        <Link to="/dashboard">Dahboard</Link>
      </div>
    );
  }
}

export default CreateGroup;
