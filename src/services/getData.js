export default class getData {
  load() {
    return fetch('http://localhost:3000/')
      .then((res) => res.json()) // try to load data from node.js server
      .catch((err) => { // load static data if an error
        console.error('Please, run server', err);
      })
  }
}