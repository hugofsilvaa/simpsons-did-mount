import axios from 'axios';
import { Component } from 'react';
import './App.css';
import Title from './components/Title'
import QuoteList from './components/QuoteList'


const title = 'Simpsons Quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: null
    }

    this.getData = this.getData.bind(this)
  }

  getData = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(res => res.data)
      .then(data => {
        console.log(data)
        this.setState({ quotes: data });
      })
  }

  componentDidMount() {
    this.getData()
  }


  render() {
    const quotes = this.state.quotes;
    return (
      <div className="App" >
        <Title title={title} />
        { quotes ? (
          <QuoteList quotes={quotes} />
        ) : (
            <span class='loading'>Loading.......</span>
          )}
        <button onClick={this.getData}>New Quote</button>
      </div >
    );
  }
}

export default App;
