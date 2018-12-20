import React, { Component } from 'react';
import EditItem from './EditItem';

class TodoItems extends Component {
    constructor(props){
        super(props);
    }

    delete(id){
        this.props.delete(id);
    }

    edit(id){
        this.props.edit(id);
    }

    completeClick(id){
        this.props.completeClick(id);
    }

render(){

        let arrayLength = this.props.data.length;
        if(arrayLength == 0 && this.props.editStatus == false){
        return(
                <div className="list-group-item list-group-item-info">
                    <h5>Welcome to a Very Simple ToDo App</h5>
                    Get started now by adding a new todo item on the left
                </div>
            )
        } else {
            return(
                <div className="panel panel-default">
                    <EditItem 
                        data = {this.props.data}
                        edit = {this.props.edit}
                        change = {this.props.change}
                        click = {this.props.click}
                        editStatus = {this.props.editStatus}
                        editItemData = {this.props.editItemData} />

                    {this.props.data.map(todoItem => 
                        <ul className= "list-group" key={todoItem.createTodoId}>
                            <li className={todoItem.color}><input type="checkbox" onClick={this.completeClick.bind(this, todoItem)}></input>{todoItem.createTodoText}
                                <a className="delete-todo pull-right btn-icons btn-default glyphicon glyphicon-trash"
                                    onClick={this.delete.bind(this, todoItem)}></a> 
                                <a className="edit-todo pull-right btn-icons btn-default glyphicon glyphicon-edit"
                                    onClick={this.edit.bind(this, todoItem)}></a>
                            </li>
                        </ul>)}
                </div>
            )
        }
    }
}

export default TodoItems;
