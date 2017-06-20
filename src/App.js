import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import TopTen from './TopTen.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  };

  componentWillMount() {
    axios.get('https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=71cae6de14c445ca9594ad4a393ace10')
      .then((res) => {
        console.log(res.data.articles)
        this.setState({results: res.data.articles});
      })
      .catch(err => {
        console.log(err);
      }
    );
    axios.post('https://posttestserver.com/post.php', 'hello there, this is Maggie')
      .then(res => {
        console.log(res);
        this.setState({apiResult: res.data})
      })
      .catch(err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hacker News</h2>
          <h4>Latest Headlines</h4>
        </div>
        <TopTen res={this.state.results}/>
        <p>{this.state.apiResult}</p>
      </div>
    );
  }
}

export default App;
