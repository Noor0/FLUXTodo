import React from 'react';
import ListItem from "./ListItem";
import Store from "../flux/Store";

export default class List extends React.Component {

  constructor(props) {
    super(props);
    let bobo=Store.getNotes();
    this.state={
      notes:bobo
    }
    Store.addListener("change",()=>{bobo=Store.getNotes();this.setState({notes:bobo});})
  }

  render() {
    return (
      <div className="List">
      <h1>TODOs</h1>
        <ul>
          {this.state.notes.map((item,ind)=>{
              return  item == null ? "" : <ListItem note={item.note} key={ind} noteId={item.id}/>
          })}
        </ul>
      </div>
    );
  }
}
