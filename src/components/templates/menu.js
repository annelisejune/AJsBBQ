import React from "react";

export default class Menu extends React.Component {
  constructor() {
    super();

    this.state = {
      total: 0,
      order: ''
    }
  }

  addOmelette = () => {
    this.setState({
    total: this.state.total + 13, order: this.state.order + ' The Best Omelette in the Galaxy //'
    })
  }

  addFrench = () => {
    this.setState({
      total: this.state.total + 14, order: this.state.order + ' Classic French Toast //'
    })
  }

  addPancake = () => {
    this.setState({
      total: this.state.total + 13, order: this.state.order + ' Almost Like Cookies ChocoChip Pancakes //'
    })
  }

  addUltimate = () => {
    this.setState({
      total: this.state.total + 17, order: this.state.order + ' The Ultimate Bfast //'
    })
  }

  render() {
    return(
      <div className="breakfast-container">
        <div className="page-content">
          <div className="button-wrapper">
            <div className="header">
              <h1>Breakfast</h1>
            </div>

            <button onClick={() => this.addOmelette()}>
              The Best Omelette in the Galaxy - $13 
            </button>
            <div className="food-description">
              <p>Made with four eggs, mushrooms, bellpeppers, 
                <br></br>
                monterey jack cheese, ham, and spinach. 
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addFrench()}>
              Classic French Toast - $14
            </button>
            <div className="food-description">
              <p>Four slices of french toast battered daily in our 
                <br></br>
                heavy cream batter. Served with strawberries and whipped cream.
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addPancake()}>
              Almost Like Cookies ChocoChip Pancakes - $13
            </button>
            <div className="food-description">
              <p>Pancake batter homemade daily here. 
                <br></br>
                Topped with mixed berries and whipped cream. 
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addUltimate()}>
              The Ultimate Bfast - $17
            </button>
            <div className="food-description">
              <p>A slice of french toast, a chocochip pancake, 
                <br></br>
                and a single serving omelette!
                <br></br>
                Comes with a side of hashbrowns and a side fruit bowl!
              </p>
            </div>



            <div className="header">
              <h1>Lunch & Dinner</h1>
            </div>

            <button onClick={() => this.addOmelette()}>
              The Best Omelette in the Galaxy - $13 
            </button>
            <div className="food-description">
              <p>Made with four eggs, mushrooms, bellpeppers, 
                <br></br>
                monterey jack cheese, ham, and spinach. 
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addFrench()}>
              Classic French Toast - $14
            </button>
            <div className="food-description">
              <p>Four slices of french toast battered daily in our 
                <br></br>
                heavy cream batter. Served with strawberries and whipped cream.
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addPancake()}>
              Almost Like Cookies ChocoChip Pancakes - $13
            </button>
            <div className="food-description">
              <p>Pancake batter homemade daily here. 
                <br></br>
                Topped with mixed berries and whipped cream. 
                <br></br>
                Comes with a side of hash browns
              </p>
            </div>

            <button onClick={() => this.addUltimate()}>
              The Ultimate Bfast - $17
            </button>
            <div className="food-description">
              <p>A slice of french toast, a chocochip pancake, 
                <br></br>
                and a single serving omelette!
                <br></br>
                Comes with a side of hashbrowns and a side fruit bowl!
              </p>
            </div>
          </div>

          <div className="order-total-wrapper">
            <div className="order-total order">
              <h2>ORDER</h2>
              <p>{this.state.order}</p>
            </div>

            <div className="order-total total">
              <h2>TOTAL</h2>
              <p>{this.state.total}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}