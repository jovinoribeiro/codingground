import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Dashboard from './Dashboard';
import AmigoSecretoStore from './AmigoSecretoStore';
import GroupDetail from './GroupDetail';
import CreateGroup from './CreateGroup';
import Search from './Search';

class AmigoSecretoApp extends Component {
  constructor() {
    super();
    this.state = {
      user : AmigoSecretoStore.getUser(1)
    }
  }

  render() {
    return (
      <section>
        <Header />
        <Switch>
          <Route  path='/dashboard' render={(props) => <Dashboard {...props} user={this.state.user} />}/>
          <Route path='/groupDetail/:number' component={GroupDetail}/>
          <Route path='/createGroup' component={CreateGroup}/>
          <Route path='/search' component={Search}/>
        </Switch>
        <Footer />
      </section>
    );
  }
}

export default AmigoSecretoApp;
