import {EventEmitter} from "fbemitter";
import dispatcher from "./Dispatcher";

const emitter=new EventEmitter();
var data,activate,update,selectedTodoId,noteToSet;

const Store={
	init(){
		data = JSON.parse(localStorage.getItem("todoData"));
		if(!data){
			localStorage.setItem("todoData",JSON.stringify({}));
			data = JSON.parse(localStorage.getItem("todoData"));
			data.todos=[];
		}
		
		activate=false;
		update=false;
		selectedTodoId=-1;
		noteToSet="";

		dispatcher.register( action => {
			switch(action.type){
				case "modal-toggle":
					this.toggle();
					emitter.emit("modal-toggle-event");
					break;
				
				case "create":
					this.addTodo(action.data);
					emitter.emit("change");
					break;

				case "done":
					this.delete(action.data);
					emitter.emit("change");
					break;

				case "update":
					this.updatingTodo(action.data.todoId,action.data.note);
					this.toggle();
					update = !update;
					emitter.emit("update-toggle-event");
					emitter.emit("modal-toggle-event");
					emitter.emit("change");
					break;

				case "update-toggle":
					selectedTodoId=action.data;
					update = !update;
					noteToSet=action.note;
					this.toggle();
					emitter.emit("update-toggle-event");
					emitter.emit("modal-toggle-event");
					break;
			}
		});
	},

	addListener(ty,fn){
		emitter.addListener(ty,fn);
	},

	getModalState(){
		return activate;
	},

	toggle(){
		activate = !activate ;
	},

	addTodo(dataToAdd){
		let obj={
			id:data.todos.length,
			note:dataToAdd	
		};
		data.todos.push(obj);
		localStorage.setItem("todoData",JSON.stringify(data));
	},

	getNotes(){
		return data.todos;
	},

	delete(id){
		for (var i = 0; i < data.todos.length; i++) {
			if(data.todos[i].id == id){ 
				data.todos.splice(i,1);
				localStorage.setItem("todoData",JSON.stringify(data));
			}
		}
	},

	updatingTodo(id,note){
		data.todos.forEach( (item)=>{
			if(item.id == id){
				item.note=note;
				localStorage.setItem("todoData",JSON.stringify(data));
				return;
			}
		} );
	},

	getUpdate(){
		return update;
	},

	getUpdateId(){
		return selectedTodoId;
	},

	getUpdateNote(){
		return noteToSet;
	}

};

export default Store