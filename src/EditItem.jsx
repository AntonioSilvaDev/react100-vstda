import React, { Component } from 'react';


class EditItem extends Component{
    constructor(props){
        super(props);
    }

    click(id){
        this.props.click(id);
        //console.log(this.props.editItemData.createTodoText.value);
    }

    change(id){
        this.props.change(id);
    }

    render(){
        let editStatus = this.props.editStatus;
        if( editStatus ){
            return(
                <div className="panel-body bg-success">
                    <div className="form-group">
                    <label htmlFor="updateTodoText">Description</label>
                    <textarea className="form-control update-todo-text"
                        name="updateTodoText"
                        key={this.props.editItemData.createTodoId}
                        defaultValue={this.props.editItemData.createTodoText}
                        onChange={this.change.bind(this)}
                        type="text">
                    </textarea>
                    </div>    

                    <div className="form-group">
                    <label htmlFor="updateTodoPriority">How much priority?</label>
                    <select 
                        className="form-control update-todo-priority"
                        name="updateTodoPriority"
                        defaultValue={this.props.editItemData.createTodoPriority}
                        onChange={this.change.bind(this)}>
                            <option value="1">1 - Low Priority</option>
                            <option value="2">2 - Mid Priority</option>
                            <option value="3">3 - High Priority</option>
                        </select>
                    </div> 
                    <button className="btn btn-primary btn-block update-todo" onClick={this.click.bind(this)} name="update-todo">Save</button>
                </div>
                )
            } else {
                return null;
            }
        }
    }

export default EditItem;