import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import SidebarLinks from './SidebarLinks';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      designItems: [{ name:'Typography', path:'typography' },
                    { name:'Layout', path:'layout' },
                    { name:'Buttons', path:'buttons' }],
      componentItems: [{ name:'Lists', path:'lists' }],
      overviewItems: [{ name:'Overview', path:'overview' }],
      design: false,
      components: false,
      overview: false
    };
    this.toggle = this.toggle.bind(this);
  }

  setAllStates() {
    this.setState((prevState) => ({ design: false }));
    this.setState((prevState) => ({ components: false }));
    this.setState((prevState) => ({ overview: false }));
  }

  toggle(name) {
    this.setAllStates();
    let obj = {};
    obj[name] = true;
    this.setState((prevState) => (obj));
  }

  currentPath(name) {
    this.toggle(name);
  }

  render() {
    const {design} = this.state;
    const {components} = this.state;
    const {overview} = this.state;
    return (
      <div className="sidebar column is-2">
        <a href="http://vedra.io/" className="app-logo">
          <img src={logo} className="" alt="logo" />
          <p>Style Guide</p>
        </a>
        <aside className="menu">
          <SidebarLinks items={this.state.overviewItems} name="overview" toggle={this.toggle} show={overview} current={this.currentPath} />
          <SidebarLinks items={this.state.designItems} name="design" toggle={this.toggle} show={design} current={this.currentPath} />
          <SidebarLinks items={this.state.componentItems} name="components" toggle={this.toggle} show={components} current={this.currentPath} />
        </aside>
      </div>
    );
  }
}

export default Sidebar;
