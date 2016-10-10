import React from 'react';
import Action from "../flux/Action";

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="ListItem">
      	<span className="note">{this.props.note}</span>
      	<div className="action">
      		<span className="action-button update" onClick={()=>{Action.updateToggle(this.props.noteId,this.props.note)}} >&#10000;</span>
      		<span className="action-button done" onClick={()=>{Action.done(this.props.noteId)}} >&#10004;</span>
      	</div>
      </li>
    );
  }
}

ListItem.defaultProps={
	note:React.PropTypes.string.isRequired,
	noteId:React.PropTypes.string.isRequired
};