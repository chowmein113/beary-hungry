import { logDOM } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/RestaurantApp.css';
import logo from './restaurantlogo.png';
 
 
// Navbar
 
class Navbar extends React.Component {
 render() {
   return (
     <div className="topnav">
       <a className="active" href="#home">Beary Hungry</a>
       <a href="#about">About</a>
       <a href="#contact">Dining Hall</a>
     </div>
   );
 }
}
 
// Header
 
function Header(props) {
 return (
   <div className="main_header">Restaurants</div>
 )
}
 
// logo
 
function Logo(props) {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
 }

 
// Search Bar
 
class SearchBar extends React.Component {
 render() {
   return (
     <div className="search_bar">
       <input className="search_bar" type="text" placeholder="Search..." />
     </div>
   )
 }
}
 
// Filters
 
function Filter(props) {
 var filterElements = ``;
 for (let category of props.categories) {
   filterElements += `<div> ${category} </div>`;
 }
 
 return (
   <div className="filter" >
     <div className="filter_header">{props.name}</div>
     <div className="filter_content" dangerouslySetInnerHTML={{ __html: filterElements }}></div>
   </div>
 );
 
}
 
class Filters extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     names: ["Cusine", "Price", "Dietry Restrictions"],
     types: [["Chinese", "Mexican", "Korean", "Thai", "Western", "Others"], ["< $10", "$10 - $20", "$20 - $30", "> $30"], ["Vegetarian", "Vegan", "Halal", "Pescatarian"]]
   }
 }
 
 renderFilter(i) {
   return (
     <Filter
       name={this.state.names[i]}
       categories={this.state.types[i]}
     />
   )
 
 }
 
 render() {
   return (
     <div className="filters">
       <div className="filter">{this.renderFilter(0)}</div>
       <div className="filter">{this.renderFilter(1)}</div>
       <div className="filter">{this.renderFilter(2)}</div>
     </div>
   )
 }
}
 
// Google Maps
 
function Map(props) {
 return (
   <div className="google_maps">
     <iframe src="https://www.google.com/maps/d/embed?mid=1S7GWm4wVD9JoPNyBMCcbDVPm_tagJyns&hl=en" width="500" height="350"></iframe>
   </div>
 );
}
 
// RestaurantGrid, Restaurant
 
function Restaurant(props) {
 const url = `../public/assets/${props.id}.jpg`;
 return (
   <div className="grid_item">
     <div className="res_img">
       <img src={url} alt="Updating" width="100%" height="100%" />
     </div>
     <div className="res_info">
       <div className="res_ess_info">
         <div className="name">{props.name}</div>
         <div className="rating">{props.rating}</div>
       </div>
       <div className="res_description">{props.description}</div>
     </div>
   </div>
 );
}
 
class RestaurantGrid extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     names: ["Chinese Express", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"],
     ratings: [4, 1, 1, 1, 1, 1, 1, 1],
     descriptions: ["Very Good. Will come again.", "Bad", "Bad", "Bad", "Bad", "Bad", "Bad", "Bad"],
     ids: ['0', '0', '0', '0', '0', '0', '0', '0'],
   }
 }
 
 renderRestaurant(i) {
   return (
     <Restaurant
       name={this.state.names[i]}
       rating={this.state.ratings[i]}
       description={this.state.descriptions[i]}
       id={this.state.ids[i]}
     />
   );
 }
 
 render() {
   return (
     <div className="grid">
       <div className="grid__item">{this.renderRestaurant(0)}</div>
       <div className="grid__item">{this.renderRestaurant(1)}</div>
       <div className="grid__item">{this.renderRestaurant(2)}</div>
       <div className="grid__item">{this.renderRestaurant(3)}</div>
       <div className="grid__item">{this.renderRestaurant(4)}</div>
       <div className="grid__item">{this.renderRestaurant(5)}</div>
       <div className="grid__item">{this.renderRestaurant(6)}</div>
       <div className="grid__item">{this.renderRestaurant(7)}</div>
     </div>
   );
 }
}
 
 
// RestaurantPage
 
class RestaurantPage extends React.Component {
 render() {
   return (
     <>
       <Header />
       <SearchBar />
       <div className='rowC'>
         <Filters />
         <Logo />
         <Map />
       </div>
       <RestaurantGrid />
     </>
   )
 }
}
 
function RestaurantApp() {
 return (
   <RestaurantPage />
 );
}
 
export default RestaurantApp;
