import React from 'react';
import Action from "../flux/Action";
import Store from "../flux/Store";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    let initState=Store.getUpdate();
    let note=Store.getUpdateNote();
    this.state={
    	update:initState,
    	id:-1,
    	note
    };
    
    Store.addListener("update-toggle-event",()=>{
    	let newState=Store.getUpdate();
    	let newId=Store.getUpdateId();
    	let newNote=Store.getUpdateNote();
    	this.setState({
    		id:newId,
    		update:newState,
    		note:newNote
    	});
    });
  }

  updateToggler(){Action.updateToggle(-1);}

  modalToggler(){Action.toggleModal();}

  todoUpdater(){Action.updateTodo(this.state.id,this.refs.todoInput.value);}

  todoAdder(){Action.addTodo(this.refs.todoInput.value);}

  render() {
    return (
      <div className="Form">
      	<h1>{this.state.update ? "Update":"Add Todo"}</h1>

      	<div className="Form-input">
      		<input placeholder="Write Todo" id="todoInput" type="text" onChange={()=>{this.setState({note:this.refs.todoInput.value})}} value={this.state.note} ref="todoInput"/>
      	</div>
      	<div className="Form-buttonPanel">
      		<span className="Button cancel-button" onClick={this.state.update ? this.updateToggler.bind(this) : this.modalToggler.bind(this) }>Cancel</span>
      		<span className="Button positive-button" onClick={this.state.update ? this.todoUpdater.bind(this) : this.todoAdder.bind(this) }>Ok</span>
      	</div>
      </div>
    );
  }
}
