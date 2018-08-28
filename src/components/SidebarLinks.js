import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSidebar } from '../actions/sidebar-actions';

class SidebarLinks extends Component {
  constructor() {
    super();
    this.state = {
      currentPath: ''
    };
    this.findCurrentPath = this.findCurrentPath.bind(this);
  }

  highlightItem(id) {
    let prevActive = document.getElementsByClassName("is-active");
    for(let i = 0; i < prevActive.length; i++) {
      prevActive[i].classList.remove("is-active");
    }
    let currentActive = document.getElementById(id);
    currentActive.classList.add("is-active");
    this.props.onUpdateSidebar(id);
  }

  toggle(name) {
    this.props.toggle(name);
  }

  findCurrentPath() {
    if (typeof window !== 'undefined') {
      let path = window.location.pathname;
      path = path.split("/");
      path = path[1];
      this.props.items.forEach((el) => {
        if(el.path === path) {
          this.setState((prevState) => ({currentPath : path}));
          this.props.current(this.props.name);
        }
      });
    }
  }

  componentDidMount() {
    this.findCurrentPath();
  }

  render() {
    const {currentPath} = this.state;
    let items;
    if(this.props.items && this.props.show) {
      items = this.props.items.map((item, index) =>
        <li id={item.path} onClick={this.highlightItem.bind(this, item.path)} key={item.name} className={currentPath === item.path ? 'is-active' : ''}>
          <Link to={'/' + item.path}>{item.name}</Link>
        </li>
      )
    }

    return (
      <span>
        <p className="menu-label" onClick={this.toggle.bind(this, this.props.name)}>{this.props.name}</p>
        <ul className="menu-list">
          {items}
        </ul>
      </span>
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
export default connect(mapStateToProps, mapDispatchToProps)(SidebarLinks);
