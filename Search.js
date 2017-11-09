import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AmigoSecretoStore from './AmigoSecretoStore';
import * as AmigoSecretoActions from './AmigoSecretoActions';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      groups : [] //AmigoSecretoActions.loadGroups()
    }
  }

  componentWillMount() {
     var mg = AmigoSecretoActions.loadGroups();
     console.log('mounting..');
  }

  componentDidMount() {
   

    AmigoSecretoStore.on("change", () => {
      console.log('there was a change');
       this.setState( {
         groups : AmigoSecretoStore.getG()
       } )
     });
     console.log(this.state.groups);
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <input placeholder='Organizer name...' />
        <h3>Here are some groups you may like...</h3>
        <ul>
          {
            this.state.groups.map(
              (item, index) =>
              <li key={item.id}>
                Group Name: {item.title} <br />
                {/*Gift Giving Date: {item.date.getMonth() + 1}/{item.date.getDate()}/{item.date.getFullYear()}*/}
                &nbsp;
                <Link to={`/groupDetail/${item.id}`}>Details</Link>
              </li>
            )
          }
        </ul>
        <Link to="/dashboard">Dahboard</Link>
      </div>
    );
  }
}

export default Search;
