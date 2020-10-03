import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import nachospic from './nachospic.png';


class Dish extends Component {
  render() {
    console.log("=>inside dish" , this.props.dish.dname)
    return (
      <div class="card" style={{width: 400 }}>
        <img class="card-img-top" src={nachospic} alt="dish"></img>
        <div class="card-body">
          <h4 class="card-title">{this.props.dish.dname}</h4>
          <p class="card-text">{this.props.dish.ddescription}</p>
          <p class="card-text">Category: {this.props.dish.dcategory}</p>
          <p class="card-text">Ingredients: {this.props.dish.dingredients}</p>
          <p class="card-text"><h4>Price: {this.props.dish.dprice}$</h4></p>
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    )
  }

}

export default Dish;