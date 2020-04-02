import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {

  const handleGrease = (e) =>{
    props.greaseFilter(e.target.value)
  }

  const handleFilter = (e) =>{
    props.toFilter(e.target.value)
  }
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
        <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
        <span className="normalText">A React App for County Fair Hog Fans</span>
        </div>
      <div>
        <div onChange={handleFilter}>
          <select>
          <option value="none"></option>
          <option value="name">Name</option>
          <option value= "weight">Weight</option>
          </select>
        </div>
        <div onChange={handleGrease}>
          <input type="radio" name="greasy" value="all"/>
          <label>All hogs</label>

          <input type="radio" name="greasy" value="greased"/>
          <label>Greased hogs</label>

          <input type="radio" name="greasy"value="ungreased"/>
          <label>ungreased hogs</label>
        </div>
      </div>
    </div>
  )};

export default Nav;
