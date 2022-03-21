import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Add_user from './Components/Add_user';
import User_list from './Components/User_list';


export class App extends Component {

  state={
    users:[
      {
        id : 1,
        name:" N'Gatia_Eric ",
        image : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Mangekyou_Sharingan_Madara_%28Eternal%29.svg'
      },
  
    ]
  }

  onDeleteClick = (id) =>{
    let newUser = [...this.state.users];

    let index = newUser.findIndex((user) => user.id === id);

    newUser.splice(index, 1);

    this.setState({users:newUser})
  }




  handleAdd = (user) =>{
    let newUser = [...this.state.users];
    newUser.push(user);

    this.setState({users:newUser});
  }


  render() {
    return (
      <div className='App'>
        <Add_user addUser={this.handleAdd} />
        <User_list users={this.state.users} onDeleteClick = {this.onDeleteClick} />
      </div>
    )
  }
}

export default App