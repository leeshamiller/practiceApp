import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "",
      comments: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  };

  handleChange(e) {
    this.setState({
      string: e.target.value
    })
  }

  addComment(){
    var newComment = this.state.comments;
    newComment.push(this.state.string);  
    this.setState({
      comments: newComment
    })
  }

  render() {
    var comments = this.state.comments.map(obj => {
      return(<div>{obj}</div>)
    })
    return (
      <div>
        <button onClick={this.addComment}>submit</button>
        <input onChange={this.handleChange}/>
        <div>
         {this.state.string}
        </div>
        {comments}
      </div>
    );
  }
}

export default App;
