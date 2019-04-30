import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contacts, i) => (
              <tr>
                <td><img src={contacts.pictureUrl} alt="" height="100" width="70"/></td>
                <td>{contacts.name}</td>
                <td>{contacts.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
   
      </div>
    );
  }
}

export default App;
