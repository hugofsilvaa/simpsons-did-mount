import axios from 'axios';
import { Component } from 'react';
import './App.css';
import Title from './components/Title'
import QuoteList from './components/QuoteList'


const initialQuote = [
  {
    quote: "I live in a single room above a bowling alley...and below another bowling alley.",
    character: "Frank Grimes",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
    characterDirection: "Left"
  }
];

const title = 'Simpsons Quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: initialQuote
    }

    this.getData = this.getData.bind(this)
  }

  getData = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        this.setState({ quotes: data })
      })
  }


  render() {
    return (
      <div className="App">
        <Title title={title} />
        <QuoteList quotes={this.state.quotes} />
        <button onClick={this.getData}>New Quote</button>
      </div>
    );
  }
}

export default App;
