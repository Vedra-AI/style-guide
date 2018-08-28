import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../logo.svg';
import '../App.css';
import SidebarLinks from './SidebarLinks';
import { updateSidebar } from '../actions/sidebar-actions';

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
    this.onUpdateSidebar = this.onUpdateSidebar.bind(this);
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

  onUpdateSidebar() {
    this.props.onUpdateSidebar("Buttons");
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
        <div onClick={this.onUpdateSidebar}>Update Sidebar</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators({
      onUpdateSidebar: updateSidebar
  }, dispatch);
};

const mapStateToProps = (state, props) => {
  return {
    link: state.link,
  }
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   return {};
// }

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
