import dispatcher from './dispatcher';

import axios from 'axios';

var apiUrl = 'http://5a01e2de53a3be0012a3e905.mockapi.io/';

export function addGroup(title) {
  console.log('dispatching...');
  dispatcher.dispatch( {
    type : "CREATE_GROUP",
    title : title
  });
}

export function loadGroups() {
  console.log('loading groups..');
  axios.get( apiUrl + '/groups' )
      .then( (res) => {
        dispatcher.dispatch( {
          type : "LOAD_GROUP",
          groups : res.data
        });              
      });   
}
