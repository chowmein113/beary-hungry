import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/DiningHallApp.css';

// Header

function Header(props) {
  return (
    <div className="main_header">Dining Hall Page</div>
  )
}

// Search Bar

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search_bar">
        <input className="search_bar" type="text" placeholder="Search.." />
      </div>
    )
  }
}

// Dining Hall Page

class DiningHallPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuData: null
    };
    this.getMenus = this.getMenus.bind(this);
  }

  async getMenus(event) {
    event.preventDefault();
    let response = await fetch("http://127.0.0.1:5500/dining_hall", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    });
    let data = await response.json();
    data = JSON.stringify(data);
    // data = JSON.parse(data);
    this.setState({menuData: data});
  }

  render() {
    return (
      <>
        <Header />
        <SearchBar />
        <div className="frontEnd">
        <button type = "button" className= "front" onClick={this.getMenus}>
          Load Menu
        </button>
          <p id="menu">{this.state.menuData}</p>
      </div>
        
      </>
    )
  }
}

function DiningHallApp() {
  return (
    <DiningHallPage />
  );
}

export default DiningHallApp;
