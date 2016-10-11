import React from 'react';
import classNames from "classnames";
import Store from "../flux/Store";

export default class Modal extends React.Component {
  
  constructor(props) {
    
    super(props);
    
    this.state={
    	activate:false
    };

    Store.addListener("modal-toggle-event",()=>{
      let storedState = Store.getModalState();
      this.setState({activate:storedState});
    });

  }

  render() {
    return (
      <div className={classNames({
      	"Modal":true,
      	"Modal-activate":this.state.activate
      })
  	}>
      {this.props.children}
      </div>
    );
  }
}
