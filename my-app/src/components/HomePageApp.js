import React from 'react'
import styles from '../styles/HomePageApp.css';
import logo from '../assets/HomePageApp/logo.png';
import paw from '../assets/HomePageApp/Bear paw.png';
import background from '../assets/HomePageApp/background.png'

class HomePageApp extends React.Component {
  render() {
    return (
      <div>
        <title>Beary Hungry</title>
        <style dangerouslySetInnerHTML={{ __html: "\n      .img-container {\n        text-align: center;\n      }\n    " }} />
        <div><input type="text" placeholder="Search me.." id="myInput" onkeyup="filterFunction()" /></div>
        <div className="img-container"> {/* Block parent element */}
          <img src={logo} alt="We are all Beary Hungry" width={350} height={250} />
          <link rel="stylesheet" href="style.css" />
          <div className="dropdown">
            <button onclick="myFunction()" className="dropbtn">What's for dinner?</button>
            <div id="myDropdown" className="dropdown-content">
              <div>
                <a href="#about"><img src={paw} width={75} height={75} />Home</a>
                <a href="#Cal Dining">Cal Dining</a>
                <a href="#Restaurants">Restaurants</a>
                <a href="#Contact">Contact<img src={paw} width={75} height={75} /></a>
              </div>
            </div>
          </div>
          {/* Control buttons */}
          <div id="myBtnContainer">
            <button className="btn" onclick="filterSelection('all')"> Show all</button>
            <button className="btn" onclick="filterSelection('boba')"> Boba</button>
            <button className="btn" onclick="filterSelection('mexican')"> Mexican</button>
            <button className="btn" onclick="filterSelection('american')"> American</button>
            <button className="btn" onclick="filterSelection('asian')"> Asian</button>
          </div>
          {/* The filterable elements. Note that some have multiple class names (this can be used if they belong to multiple categories) */}
          <div className="container">
            <div className="filterDiv boba">Fencha</div>
            <div className="filterDiv asian">Thai Basil</div>
            <div className="filterDiv boba">Yifang</div>
            <div className="filterDiv asian">Great China</div>
            <div className="filterDiv boba">Sweet Heart</div>
            <div className="filterDiv asian">Steve's KBBQ</div>
            <div className="filterDiv mexican">Tacos n Co</div>
            <div className="filterDiv mexican">La Burrita</div>
            <div className="filterDiv american">Super Duper</div>
            <div className="filterDiv american">Bongo Burger</div>
            <div className="filterDiv american">Gather</div>
            <div className="filterDiv american">Super Duper</div>
            <div className="filterDiv mexican">La Vals</div>
          </div>
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
