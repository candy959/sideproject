import React, { Component } from 'react';
import './App.css';

import Headline from './Headline.js';
import InputComp from './InputComp.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      places: ['Cafe'],
      colors: ["purple"],
      clothes:["Skirt"]
    }
  }
  
  addPlace = (newPlace) => {
    let newPlaces = this.state.places.concat(newPlace);
    this.setState({
      places: newPlaces  
    })
  }

    showPlaces =()=> {
        let mappedParagraphs = this.state.places.map((place)=><div className="box1"><p>{place}</p></div>)
        
        return mappedParagraphs}

   //this is color
     addColor = (newColor) => {
      let newColors = this.state.colors.concat(newColor);
      this.setState({
      colors: newColors  
      })
    }

     showColors =()=> {
        let mappedParagraphs = this.state.colors.map((color)=><div className="box2"><p>{color}</p></div>)
       
        return mappedParagraphs}
    
        //this is cloth
        addCloth = (newCloth) => {
          let newClothes = this.state.clothes.concat(newClothes);
          this.setState({
            clothes: newClothes  
          })
        }
      
          showClothes =()=> {
              let mappedParagraphs = this.state.clothes.map((cloth)=><div className="box3"><p>{cloth}</p></div>)
              
              return mappedParagraphs}

  render() {
    return (
      <div className="App">
        <Headline text={"Blogger's #OOTD"}></Headline> 
          
        <InputComp placeholder={"Type a place..."} submit={this.addPlace}></InputComp>
        <div className="display">
          {/* {this.state.places.map (place => <div className="box"><p>{place}</p></div>)} */}
          {this.showPlaces()}
        </div>



          <InputComp placeholder={"Type a color..."} submit={this.addColor}></InputComp>
          <div className="display">
          {/* {this.state.colors.map(color => <div className="box2"><p>{color}</p></div>)} */}
           {this.showColors()}
          </div>
          <InputComp placeholder={"Type a cloth..."} submit={this.addCloth}></InputComp>
          <div className="display">
          {/* {this.state.colors.map(color => <div className="box2"><p>{color}</p></div>)} */}
           {this.showClothes()}
           </div>
          </div>
         
    );
    }
}


export default App;


function test(place) {
  return place + ", hello.";
}