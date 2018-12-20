import React, { Component } from 'react';
import TodoItems from './Todoitems';
//import EditItem from './EditItem';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    createTodoText: "",
    createTodoPriority: "",
    todoItems:[],
    createTodoId: 0,
    color: "",
    isEditEnabled: false,
    editItem: "",
    updateTodoPriority: "",
    todoComplete: false
  }

  this.changeHandler = this.changeHandler.bind(this);
  this.clickHandler = this.clickHandler.bind(this);
  this.deleteClick = this.deleteClick.bind(this);
  this.editClick = this.editClick.bind(this);
  this.todoCompleteClick = this.todoCompleteClick.bind(this);

}

  changeHandler(props){
    const name = props.target.name;
    const value = props.target.value;
    this.setState({
      [name]: value
    });
  }

  clickHandler(createTodoText, createTodoPriority, todoItems, createTodoId, color, isEditEnabled, updateTodoPriority, todoComplete){
    createTodoText = this.state.createTodoText;
    createTodoPriority = this.state.createTodoPriority;
    todoItems = this.state.todoItems;
    createTodoId = this.state.createTodoId;
    color = this.state.color;
    isEditEnabled = this.state.isEditEnabled;
    updateTodoPriority = this.state.updateTodoPriority;
    todoComplete = this.state.todoComplete;
    
    if(createTodoPriority === "1" || updateTodoPriority === "1"){
      color = "list-group-item list-group-item-success"
    }
    else if(createTodoPriority === "2" || updateTodoPriority === "2"){
      color = "list-group-item list-group-item-warning"
    }
    else if(createTodoPriority === "3" || updateTodoPriority === "3"){
      color = "list-group-item list-group-item-danger"
    }
    else{
      color = "list-group-item"
    };

    if(isEditEnabled) {
      todoItems.push({
        "createTodoText": this.state.updateTodoText,
        "createTodoPriority": this.state.updateTodoPriority,
        "createTodoId": this.state.editItemId,
        "color": color });

      this.setState({
        createTodoText: "",
        createTodoPriority: "",
        createTodoId: this.state.editItemId+1,
        color: color,
        isEditEnabled: false
        })
    }
    else {
      todoItems.push({
        "createTodoText": createTodoText,
        "createTodoPriority": createTodoPriority,
        "createTodoId": createTodoId,
        "color": color,
        "todoComplete": todoComplete });

        this.setState({
          createTodoText: "",
          createTodoPriority: "",
          createTodoId: this.state.createTodoId+1,
          color: color,
          isEditEnabled: false
          })
    }

    
  }

  deleteClick(id){
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(todoitem => todoitem != id )
    })); //this takes the whole TodoItemArray and returns just the array objects that do not match the filter item I am clicking on!!
  
  }

  editClick(id){
    this.setState(prevState => ({
      editItem: id,
      editItemId: id.createTodoId,
      isEditEnabled: true,
      updateTodoText: id.createTodoText,
      updateTodoPriority: id.createTodoPriority,
      todoItems: prevState.todoItems.filter(todoitem => todoitem != id)
    }));
  }

   todoCompleteClick(id){
     console.log(id);
     console.log("id.todoComplete",id.todoComplete);
     let style = {textDecoration: 'none'};//still want to work on getting strikethrough to work onclick, but moving on now

     if(id.todoComplete){
       id.todoComplete = false;
       style = {textDecoration: 'none'};
     }
     else{
       id.todoComplete = true;
       style = {textDecoration: 'line-through'};
     }

     console.log(id.todoComplete);
     console.log(id.createTodoText);
     console.log(id);

   } 
  

  render() {
    return (
      <div className="container">
        <div className="page-header" id="title">
          <h1>Very Simple ToDo App</h1>
        </div>
      
        <div className="row">

          <div className="col-sm-4">
            <div className="panel panel-default">
              <div className="panel-heading">Add New ToDo Item</div>
                
              <div className="panel-body">
                <div className="form-group">
                  <label htmlFor="createTodoText">I want to...</label>
                  <textarea id="createTodoText" name="createTodoText" onChange={this.changeHandler} value={this.state.createTodoText}
                    className="form-control create-todo-text" type="text" placeholder="Enter description here..."></textarea>
                </div>    

                <div className="form-group">
                  <label htmlFor="createTodoPriority">How much priority?</label>
                  <select className="form-control create-todo-priority"
                    name="createTodoPriority"
                    onChange={this.changeHandler}
                    value={this.state.createTodoPriority}>
                      <option value="Select Priority">Select Priority</option>
                      <option value="1">1 - Low Priority</option>
                      <option value="2">2 - Mid Priority</option>
                      <option value="3">3 - High Priority</option>
                    </select>
                </div> 
              </div>

              <div className="panel-footer">
                <button className="btn btn-primary btn-block create-todo" onClick={this.clickHandler} name="create-todo">Add</button>
              </div>
            </div>
          </div>
       
          <div className="col-sm-8">
            <div className="panel panel-default">
              <div className="panel-heading">View ToDo's</div>
                  <TodoItems
                    delete = {this.deleteClick}
                    data = {this.state.todoItems}
                    edit = {this.editClick}
                    change = {this.changeHandler}
                    click = {this.clickHandler}
                    editStatus = {this.state.isEditEnabled}
                    editItemData = {this.state.editItem}
                    completeClick = {this.todoCompleteClick}/>
            </div> 
          </div> 
        </div>
      </div>
    );
  }
}

export default App;

