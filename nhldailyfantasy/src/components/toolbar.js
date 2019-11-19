import React, { Component } from 'react';
import './toolbar.css'
import { Link } from 'react-router-dom';

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbarStyle">
        <Link to="/dashboard" className="button button--wayra button--border-thick button--text-upper button--size-s"> Home </Link>
        <Link to="/teams" className="button button--wayra button--border-thick button--text-upper button--size-s"> Teams </Link>
        <Link to="/players" className="button button--wayra button--border-thick button--text-upper button--size-s"> Players </Link>
        <Link to="/standings" className="button button--wayra button--border-thick button--text-upper button--size-s"> Standings </Link>
        <Link to="/metrics" className="button button--wayra button--border-thick button--text-upper button--size-s"> Advanced Metrics </Link>
      </div>
    );
  }
}

export default Toolbar;