import React, { Component } from 'react';
import './App.css';
import jsonContacts from './contacts'


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      contacts: jsonContacts.slice(0,5)

    }
    this.AddContact = this.AddContact.bind(this)
    this.SortContact = this.SortContact.bind(this)
    this.SortPopularity = this.SortPopularity.bind(this)

  }
    AddContact() {
      let randomIndex = Math.floor(Math.random() * jsonContacts.length)
      let randomContact = jsonContacts[randomIndex]
    
      this.setState ({
        contacts: [...this.state.contacts, randomContact]
      })
    }
    SortContact() {
      let newContacts = [...this.state.contacts].sort((a,b )=> {
        if(a.name < b.name) return -1
        else return 1
      })
      this.setState ({
        contacts: newContacts
      })
  }
  SortPopularity() {
    let sortedContact = [...this.state.contacts].sort((a,b) => {
      if(a.popularity < b.popularity) return -1
      else return 1
    })

    this.setState ({
      contacts: sortedContact
    })
}



  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick = {this.AddContact}> Add Random Contact</button>
      <button onClick = {this.SortContact}>Sort by name</button>
      <button onClick = {this.SortPopularity}> Sort by popularity</button>


      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contacts.map((contact,i) => (
              <tr>
                <td><img src={contact.pictureUrl} alt="" height="60" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
   
      </div>
    );
  }
}

export default App;
