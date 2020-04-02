import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";
import HogContainer from "./HogContainer";

const duplhog = [...hogs]

class App extends Component {

  state = {
    info: hogs
  }


  toFilter = (value) =>{
    if(value === "name"){
      this.setState({
        info: hogs.sort(function(a,b){
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if(nameA < nameB){
            return -1;
          }if(nameA > nameB){
            return 1;
          }
          return 0;
        })
      })
    }else if (value === "weight"){
      this.setState({
        info: hogs.sort(function(a,b){
          var weightA = a.weight;
          var weightB = b.weight;
            return weightA - weightB;
        })
      })
    }else{
      this.setState({
        info:duplhog
      })
    }
  }

  greaseFilter = (value) =>{
      if(value === "greased"){
        this.setState({
          info: hogs.filter(pig => pig.greased === true)
          })
      }else if(value === "ungreased"){
        this.setState({
          info: hogs.filter(pig => pig.greased === false)
          })
      }else{
        this.setState({
          info:duplhog
        })
      }
    }
  

  
  render() {
    return (
      <div className="App">
        <Nav greaseFilter={this.greaseFilter} toFilter={this.toFilter}/>
        <HelloWorld />
        <HogContainer hogs={this.state.info}/>
      </div>
    );
  }
}

export default App;
