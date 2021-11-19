import React from 'react';
import ReactDOM from 'react-dom';

class HomePageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yelpData: null,
      price: '$',
      rating: '1',
      distance: '',
      cuisine: '',
    };
    this.setPrice = this.setPrice.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.setCuisine = this.setCuisine.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
  }
  setPrice(event) {
    this.setState({ price: event.target.value });
  }
  setRating(event) {
    this.setState({ rating: event.target.value });
  }
  setDistance(event) {
    this.setState({ distance: event.target.value });
  }
  setCuisine(event) {
    this.setState({ cuisine: event.target.value });
  }

  async getRestaurant(event) {
    event.preventDefault();
    let response = await fetch("/restaurant", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state)
    });
    let data = await response.json();
    data = JSON.stringify(data);
    this.setState({ yelpData: data });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.getRestaurant}>
          <label>
            Price:
            <select value={this.state.price} onChange={this.setPrice}>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </label>
          <label>
            Rating:
            <select value={this.state.rating} onChange={this.setRating}>
              <option value="1">1 star</option>
              <option value="2">2 star</option>
              <option value="3">3 star</option>
              <option value="4">4 star</option>
              <option value="5">5 star</option>
            </select>
          </label>
          <label>
            Distance:
            <textarea value={this.state.distance} onChange={this.setDistance} />
          </label>
          <label>
            What kind of food?:
            <textarea value={this.state.cuisine} onChange={this.setCuisine} />
          </label>
          <input type="submit" value="Get Suggestion" />
        </form>
        <p id="suggestion">Result: {this.state.yelpData}</p>
      </div>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default HomePageApp;