import React from 'react';
import Header from "./Header";
import Modal from "./Modal";
import Form from "./Form";
import List from "./List";

export default class Todo extends React.Component {
  render() {
    return (
      <div className="Todo" style={{width:100+"%",height:100+"%"}}>
      	<Header />
      	<Modal>
      		<Form />
      	</Modal>

      	<div className="List-Holder">
      		<List />
      	</div>
      </div>
    );
  }
}
