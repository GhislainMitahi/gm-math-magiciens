import React, { Component } from 'react';

class Calculator extends Component {
  Constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <section>
          <div className="row">
            <div className="grid-item item2" />

            <button type="button" className="grid-item">AC </button>
            <button type="button" className="grid-item"> +/- </button>
            <button type="button" className="grid-item"> % </button>
            <button type="button" className="grid-item orange"> ÷ </button>
            <button type="button" className="grid-item"> 7 </button>
            <button type="button" className="grid-item"> 8 </button>
            <button type="button" className="grid-item"> 9 </button>
            <button type="button" className="grid-item orange"> x </button>
            <button type="button" className="grid-item"> 4 </button>
            <button type="button" className="grid-item"> 5 </button>
            <button type="button" className="grid-item"> 6 </button>
            <button type="button" className="grid-item orange"> - </button>
            <button type="button" className="grid-item"> 1 </button>
            <button type="button" className="grid-item"> 2 </button>
            <button type="button" className="grid-item"> 3 </button>
            <button type="button" className="grid-item orange"> + </button>
            <button type="button" className="grid-item item1"> 0 </button>
            <button type="button" className="grid-item"> . </button>
            <button type="button" className="grid-item orange"> = </button>
          </div>
        </section>
      </main>
    );
  }
}

export default Calculator;
