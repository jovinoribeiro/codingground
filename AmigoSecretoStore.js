import { EventEmitter } from 'events';
import dispatcher from './dispatcher';

import axios from 'axios';

const user = [
  { id : 1, name : "John Doe" },
  { id : 2, name : "Maria Doe" },
  { id : 3, name : "Brad Paint" },
  { id : 4, name : "Xuxa Stev" },
  { id : 5, name : "Pele Pereira" },
  { id : 6, name : "Bob Smith" }
]

const groups = [
  {
    id : 1, title : "Doe Family", date : new Date(),
    members : [
      user[5], user[1]
    ]
  },
  {
    id : 2, title : "Smith Gang Xmas Party", date : new Date(),
    members : [
      user[0], user[3]
    ]
  },
  { id : 3, title : "Coffee Cup Group Holidays", date : new Date(),
    members : [
      user[0], user[5]
    ]
  }
]

class AmigoSecretoStore extends EventEmitter {
  constructor() {
    super();
    this.groups = [];
    this.users = user;
    this.apiUrl = 'http://5a01e2de53a3be0012a3e905.mockapi.io/';
  }

  newGroup(inTitle, inDate) {
    var idx = this.groups.length + 1;
    this.groups.push( { id : idx, title : inTitle,
      date : new Date(2017, 11, 15),
      members : [user[0]] });
    this.emit("change");

    console.log(this.groups);
  }

  getUser(userId) {
    let user = this.users
      .filter( (user) =>
        user.id === userId
      )
    return user;
  }

  loadAllGroups(data) {
    this.groups = data;
    this.emit("change");
  }

  getG() {
    return this.groups;
  }

  getUserGroups(userId) {
    let groups = this.groups
      .filter( (group) =>
        group.members.some( (member) =>
          member.id === userId
        )
    )
    return groups;
  }

  getGroupById(id) {
    const group = this.groups.filter( group => group.id === id);
    return group[0];
  }

  handleActions(action) {
    console.log("Store received an action", action);
    switch(action.type) {
      case "CREATE_GROUP": {
        this.newGroup(action.title, new Date(2017, 11, 20));
        break;
      }

      case "LOAD_GROUP" : {
        this.loadAllGroups(action.groups);
        break;
      }
      default: break;
    }
  }

}

const amigoSecretoStore = new AmigoSecretoStore();
dispatcher.register(amigoSecretoStore.handleActions.bind(amigoSecretoStore));

export default amigoSecretoStore;
