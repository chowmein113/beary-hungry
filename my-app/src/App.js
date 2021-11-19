import React from 'react';
import HomePage from './components/HomePageApp';
import DiningHall from './components/DiningHallApp';
import Restaurant from './components/RestaurantApp';

class ChoosePath extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 0
    };
    this.home = this.home.bind(this);
    this.diningHalls = this.diningHalls.bind(this);
    this.restaurants = this.restaurants.bind(this);
  }

  async home(event) {
    event.preventDefault();
    this.setState({ choice: 0 });
  }

  async diningHalls(event) {
    event.preventDefault();
    this.setState({ choice: 1 });
  }

  async restaurants(event) {
    event.preventDefault();
    this.setState({ choice: 2 });
  }

  render() {
    var content;
    if (this.state.choice === 0) {
      content = <HomePage />
    } else if (this.state.choice === 1) {
      content = <DiningHall />;
    } else if (this.state.choice === 2) {
      content = <Restaurant />;
    }
    return (
      <div>
        <div className="topnav">
          <li style={{ float: 'left' }} onClick={this.home}><a href="index.html">Home</a></li>
          <li style={{ float: 'left' }} onClick={this.diningHalls}><a href="CalDining.html">CalDining</a></li>
          <li style={{ float: 'left' }} onClick={this.restaurants}><a href="AroundBerkeley.html">Around Berkeley</a></li>
          <li style={{ float: 'right' }}><a href="#profile">Profile</a></li>
        </div>
        {content}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChoosePath />
      </header>
    </div>
  );
}

export default App;
