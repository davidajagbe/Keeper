import React from "react";


  // let searchForm = document.body('.search-form');

  // document.querySelector('#search-btn').onClick = () =>{
  //   searchForm.classList.toggle('active');

  // }
  // window.onscroll = () =>{
  //   searchForm.classList.remove('active');
  // }

function Header() {


  // function searchBox(){
  //   searchForm.classList.toggle('active')
  // }

  return (
    <header>
      <h1>Keeper</h1>
      <div class="icons">
        <div class="fas fa-bars" id="menu-btn"></div>
        <div class="fas fa-search" id="search-btn" ></div>
        <div class="fas fa-car" id="cart-btn"></div>
        <div class="fas fa-user" id="login-btn"></div>
      </div>
      <form action="" className="search-form">
        <input type="search" id="search-box" placeholder="search here..."/>
        <label for="search-box" className="fas fa-search"></label>
      </form>
    </header>
  );
}

export default Header;
