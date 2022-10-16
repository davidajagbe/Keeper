import React from "react";
import SettingsIcon from '@material-ui/icons/Settings';



  // let searchForm = document.body('.search-form');

  // document.querySelector('#search-btn').onClick = () =>{
  //   searchForm.classList.toggle('active');

  // }
  // window.onscroll = () =>{
  //   searchForm.classList.remove('active');
  // }

function Header() {

  var searchForm = document.body;

  function searchBox(){
    searchForm.classList.toggle('active')
  }

  return (
    <header>
      <h1>Keeper</h1>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn"></div>
        <div className="fas fa-search" id="search-btn" onClick={searchBox()}></div>
        <SettingsIcon className= "settings"/>
        <div className="fas fa-user" id="login-btn"></div>
      </div>
      <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" className="fas fa-search"></label>
      </form>
    </header>
  );
}

export default Header;
