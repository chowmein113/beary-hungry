import React from 'react'
import styles from '../styles/HomePageApp.css';
import logo from '../assets/HomePageApp/logo.png';
import paw from '../assets/HomePageApp/Bear paw.png';
import background from '../assets/HomePageApp/background.png'
import RestaurantApp from './RestaurantApp';
import DiningHallApp from './DiningHallApp';

class HomePageApp extends React.Component {
  render() {
    return (
      <div>
        <title>Beary Hungry</title>
        <style dangerouslySetInnerHTML={{ __html: "\n      .img-container {\n        text-align: center;\n      }\n    " }} />
        <div className="img-container"> {/* Block parent element */}
          <img src={logo} alt="We are all Beary Hungry" width={350} height={250} />
          <link rel="stylesheet" href="style.css" />
          <div className="dropdown">
            <div><input type="text" placeholder="Search me.." id="myInput" onkeyup="filterFunction()" /></div>

          </div>
          {/* Control buttons */}
          <div id="myBtnContainer">
            <button className="btn"><a href="/dining">Dining</a></button>
            <button className="btn"><a href="/restaurants">Boba</a></button>
            <button className="btn"><a href="/restaurants">Mexican</a></button>
            <button className="btn"><a href="/restaurants">American</a></button>
            <button className="btn"><a href="/restaurants">Asian</a></button>
          </div>
          {/* The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) */}
          <style dangerouslySetInnerHTML={{ __html: "\nbody {\n  background-image: {background};\n}\n" }} />
          {/*<img src="Untitled.png" />*/}
        </div></div>
    );
  }
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export default HomePageApp;
