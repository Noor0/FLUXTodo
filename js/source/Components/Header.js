import React from 'react';
import Action from "../flux/Action";
import Store from "../flux/Store"

export default class Header extends React.Component {
  render() {
    return (
      <header className="Header">
      	<span className="logo">FLUXTodo</span>
      	<span className="Button" onClick={()=>{Action.toggleModal()}}>Add a todo</span>
      </header>
    );
  }
}
