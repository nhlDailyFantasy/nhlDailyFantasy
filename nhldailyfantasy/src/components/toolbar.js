import React, { Component } from 'react';
import './toolbar.css'

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbarStyle">
        <button className="button button--wayra button--border-thick button--text-upper button--size-s"> Teams </button>
        <button className="button button--wayra button--border-thick button--text-upper button--size-s"> Players </button>
        <button className="button button--wayra button--border-thick button--text-upper button--size-s"> Standings </button>
        <button className="button button--wayra button--border-thick button--text-upper button--size-s"> Advanced Metrics </button>
      </div>
    );
  }
}

export default Toolbar;