// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="letters-caluculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="inputText">
                Enter the Phrase
              </label>
              <input
                id="inputText"
                className="letters-input"
                placeholder="Enter the phrase"
                type="text"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <p className="letters-count">
              {' '}
              No.of letters: {searchInput.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="letters-calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
