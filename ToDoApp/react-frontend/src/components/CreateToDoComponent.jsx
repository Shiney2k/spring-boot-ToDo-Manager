import React, { Component } from 'react'
import ToDoService from '../services/ToDoService';

class CreateToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos_title: '',
            todos_description: '',
            target_date: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.saveToDo = this.saveToDo.bind(this);
    }

    saveToDo = (e) => {
        e.preventDefault();
        let todos = {todos_title: this.state.todos_title, todos_description: this.state.todos_description, target_date: this.state.target_date};
        console.log('todos => ' + JSON.stringify(todos));

            ToDoService.createToDo(todos).then(res =>{
                this.props.history.push('/todos');
            });
    }
    
    changeTitleHandler= (event) => {
        this.setState({todos_title: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({todos_description: event.target.value});
    }

    changeDateHandler= (event) => {
        this.setState({target_date: event.target.value});
    }

    cancel(){
        this.props.history.push('/todos');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className='text-center'>Add New Task To Do</h3>
                                <hr  style={{color: '#000000',backgroundColor: '#000000', height: .5 ,borderColor : '#000000'}}/>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> To Do Task Title : </label>
                                            <input placeholder="Title" name="todos_title" className="form-control" 
                                                value={this.state.todos_title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Task Description : </label>
                                            <input placeholder="Description" name="todos_description" className="form-control" 
                                                value={this.state.todos_description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Target Date : </label>
                                            <input placeholder="YYYY/MM/DD" name="target_date" className="form-control" 
                                                value={this.state.target_date} onChange={this.changeDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveToDo}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateToDoComponent
