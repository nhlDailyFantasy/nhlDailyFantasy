import React from 'react';
import { Layout, useLayoutNavigation } from 'react-md';
import './App.css';
import './App.scss';

const navItems = {};

function App() {
  return (
    <Layout
      {...useLayoutNavigation(navItems, window.location.pathname)}
      appBarTitle="react-md App"
      navHeaderTitle="My App"
    >
      <div className="App">
        <div>Team</div>
        <div>Player</div>
        <div>Standings</div>
        <div>Daily</div>
      </div>
    </Layout>
  );
}

export default App;
