import React from 'react';
import ListItem from "./ListItem";
import Store from "../flux/Store";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
          <ReactCSSTransitionGroup 
            transitionName="heading"
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
          <h1>TODOs</h1>
          </ReactCSSTransitionGroup>
          <ul>
          <ReactCSSTransitionGroup 
            transitionName="chooran"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}
          >
            {this.state.notes.map((item,ind)=>{
                return  item == null ? "" : <ListItem note={item.note} key={ind} noteId={item.id}/>
            })}
        </ReactCSSTransitionGroup>
          </ul>
      </div>
    );
  }
}
