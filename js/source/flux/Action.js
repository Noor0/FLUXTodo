import dispatcher from "./Dispatcher";

const Action={
	

	toggleModal(){
		dispatcher.dispatch({
			type:"modal-toggle"
		});
	},
	
	addTodo(dataToAdd){
		dispatcher.dispatch( {
			type:"create",
			data:dataToAdd
		} );
		this.toggleModal();
	},

	done(id){
		dispatcher.dispatch({
			type:"done",
			data:id
		});
	},

	updateTodo(id,note){
		dispatcher.dispatch({
			type:"update",
			data:{
				todoId:id,
				note
			}
		});
	},

	updateToggle(id,note){
		dispatcher.dispatch({
			type:"update-toggle",
			data:id,
			note
		});	
	}

}

export default Action