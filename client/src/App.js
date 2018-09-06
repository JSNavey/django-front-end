import React, { Component } from 'react';
import './App.css';

import Login from './components/Login/Login';
import NoteList from './components/NoteList/NoteList';
import Register from './components/Register/Register';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Register />
        <NoteList />
        <CreateNote />
        <EditNote />
      </div>
    );
  }
}

export default App;
