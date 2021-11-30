import React from 'react'
import styles from '../styles/HomePageApp.css';
import logo from '../assets/HomePageApp/logo.png';
import paw from '../assets/HomePageApp/Bear paw.png';
import boba from '../assets/HomePageApp/boba.png';
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
            <div><input type="text" placeholder="What's for dinner?" id="myInput" onkeyup="filterFunction()" /></div>

          </div>
          {/* Control buttons */}
          <div id="myBtnContainer">
            <button className="btn"><a href="/dining">Dining</a></button>
            <button className="btn"><a href="/restaurants">Boba</a></button>
            <button className="btn"><a href="/restaurants">Mexican</a></button>
            <button className="btn"><a href="/restaurants">American</a></button>
            <button className="btn"><a href="/restaurants">Asian</a></button>
            {/*<div class="all_work">
              <div class="work">
                <div class="work-pic work-small" id="oracle-img">
                    <div class="opaque">
                      <div class = "text_overlay"> Some text here
                      </div>
                    </div>
                </div>
                <div class="work-text">
                  
                  <button className="btn" onclick="filterSelection('boba')"> Boba</button>
                </div>
              </div>
            </div>
            <div class="work">
               <div class="work-pic work-small" id="oracle-img">
                   <div class="opaque">
                     <div class = "text_overlay"> Defined requirements (PRD) and designed high fidelity prototypes for new features with direct customer
                       feedback and Product Management Cloud Strategy team
                       <ul>
                         <li><a href="https://medium.com/@tiffchung/my-product-management-internship-oracle-f763e30f848c?source=friends_link&sk=945ebc43834cbd648025c2c1eed9014f">Medium - Experience Recap!</a></li>
                          <li><a href="https://www.oracle.com/applications/supply-chain-management/product-lifecycle-management/">Product</a></li>
                        </ul>
                     </div>
                   </div>
               </div>
              <div class="work-text">
                <p class="h4 work-title">Oracle</p>
                <p class="h5 work-description">Product Management Intern Su'20</p>
              </div>
            </div> */}
             {/*   <div class="work-text">
                  <button className="btn" onclick="filterSelection('all')"> Show all</button>
                </div>
              </div>
              <div class="work">
                <button className="btn" onclick="filterSelection('boba')"> Boba</button>
              </div>
              <div class="work">
                <button className="btn" onclick="filterSelection('mexican')"> Mexican</button>
              </div>
              <div class="work">
                <button className="btn" onclick="filterSelection('american')"> American</button>
                <button className="btn" onclick="filterSelection('asian')"> Asian</button>
              </div>
              <div class="work">
                <button className="btn" onclick="filterSelection('asian')"> Asian</button>
              </div>
            </div>
          */}
            <div class="work">
              <div class="card-img card-smol" id="boba-img">
                <div class="opaque"></div>
              </div>
              <button className="btn" onclick="filterSelection('boba')"> Boba</button>
            </div>
            <div class="work">
              <div class="card-img card-smol" id="asian-img">
                <div class="opaque"></div>
              </div>
              <button className="btn" onclick="filterSelection('asian')"> Asian Food</button>
            </div>
            <div class="work">
              <div class="card-img card-smol" id="american-img">
                <div class="opaque"></div>
              </div>
              <button className="btn" onclick="filterSelection('american')"> American Food</button>
            </div>
            <div class="work">
              <div class="card-img card-smol" id="mexican-img">
                <div class="opaque"></div>
              </div>
              <button className="btn" onclick="filterSelection('mexican')"> Mexican Food</button>
            </div>
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
