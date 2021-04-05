import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Screens.css";

class HomeScreen extends Component {
  render() {
    return <div className="home-screen">
      <h3>Hi Guest!<br></br> What would you like to do today?</h3>
      <div className="option-browse">
        <Link to={'/browse'}>Browse Data</Link>
      </div>
      <div className="option-upload">
        <Link to={'/upload'}>Upload file</Link>
      </div>
    </div>
  }
}

export default HomeScreen;