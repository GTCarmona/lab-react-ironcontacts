import React, { Component } from 'react';
import './App.css';
import jsonContacts from './contacts';
import {Table, Button, Container} from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state ={
      contacts: jsonContacts.slice(0,5)

    }
    this.AddContact = this.AddContact.bind(this)
    this.SortContact = this.SortContact.bind(this)
    this.sortPopularity = this.sortPopularity.bind(this)


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

  sortPopularity() {
    let sortedContact = [...this.state.contacts].sort((a,b) => {
      if(a.popularity < b.popularity) return -1
      else return 1
    })

    this.setState ({
      contacts: sortedContact
    })
}

    deleteContact(indexToRemove) {
      let newContacts = [...this.state.contacts]
      newContacts.splice(indexToRemove, 1)
      this.setState({
        contacts: newContacts
      })

}


  render() {
    return (
      <Container className="App">
      <h1>IronContacts</h1>
      <Button className="mr-4 my-3" onClick = {this.AddContact}> Add Random Contact</Button>
      <Button className="mr-4 my-3" onClick = {this.SortContact}>Sort by name</Button>
      <Button className="mr-4 my-3" onClick = {this.sortPopularity}> Sort by popularity</Button>


      <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead> 
          <tbody>
          {this.state.contacts.map((contact,i) => (
              <tr key={contact.name}>
                <td><img src={contact.pictureUrl} alt="" height="60" /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><Button onClick={() => this.deleteContact(i)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      
   
      </Container>
    );
  }
}

export default App;
