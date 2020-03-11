import React, { Component } from 'react';
import getData from '../../services/getData';
import './App.scss';


export default class App extends Component {
  getData = new getData();
  state = {
    canvas: [],
    line: [],
    rectangle: [],
    bucketFill: []
  }

  componentDidMount() {
    this.getData.load()
      .then(({c, l, r, b}) => {
        this.setState({
          canvas: c.length <= 1 ? c.flat() : c,
          line: l.length <= 1 ? l.flat() : l,
          rectangle: r.length <= 1 ? r.flat() : r,
          bucketFill: b.length <= 1 ? b.flat() : b
        })
      })
  }

  render() {
    return (
      <div className="container">
        canvas
      </div>
    );
  }
}
