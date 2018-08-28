import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Typography from './pages/design/Typography';
import Buttons from './pages/design/Buttons';
import Overview from './pages/Overview';
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Vedra AI',
      text: 'Welcome'
    }
  }
  render() {
    return (
      <Router>
        <div id="app" className="columns is-multiline is-mobile">
            <Sidebar />
            <div className='main column is-10'>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/typography" component={Typography}/>
                <Route path="/overview" component={Overview}/>
                <Route path="/buttons" component={Buttons}/>
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
