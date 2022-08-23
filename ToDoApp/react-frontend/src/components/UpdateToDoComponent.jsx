import React, { Component } from 'react'
import ToDoService from '../services/ToDoService';

class UpdateToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos_id: this.props.match.params.todos_id,
            todos_title: '',
            todos_description: '',
            target_date: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
    }

    componentDidMount(){
        ToDoService.getToDoById(this.state.todos_id).then( (res) =>{
            let todos = res.data;
            this.setState({todos_title: todos.todos_title,
                todos_description: todos.todos_description,
                target_date : todos.target_date
            });
        });
    }

    updateToDo = (e) => {
        e.preventDefault();
        let todos = {todos_title: this.state.todos_title, todos_description: this.state.todos_description, target_date: this.state.target_date};
        console.log('todos => ' + JSON.stringify(todos));
        console.log('todos_id => ' + JSON.stringify(this.state.todos_id));
        ToDoService.updateToDo(todos, this.state.todos_id).then( res => {
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
                                <h3 className="text-center">Update Task To Do</h3>
                                <hr  style={{color: '#000000',backgroundColor: '#000000', height: .5 ,borderColor : '#000000'}}/>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Task Title: </label>
                                            <input placeholder="Task Title" name="todos_title" className="form-control" 
                                                value={this.state.todos_title} onChange={this.changeTitleHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Task Description: </label>
                                            <input placeholder="Description" name="todos_description" className="form-control" 
                                                value={this.state.todos_description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Target Date: </label>
                                            <input placeholder="YYYY/MM/DD" name="target_date" className="form-control" 
                                                value={this.state.target_date} onChange={this.changeDateHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateToDo}>Save</button>
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

export default UpdateToDoComponent