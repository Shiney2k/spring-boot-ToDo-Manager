import React, { Component } from 'react'
import ToDoService from '../services/ToDoService'

class ListToDosComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                todos: []
        }
        this.addToDo = this.addToDo.bind(this);
        this.editToDo = this.editToDo.bind(this);
        this.deleteToDo = this.deleteToDo.bind(this);
    }

    deleteToDo(todos_id){
        ToDoService.deleteToDo(todos_id).then( res => {
            this.setState({todos: this.state.todos.filter(todos => todos.todos_id !== todos_id)});
        });
    }
    viewToDo(todos_id){
        this.props.history.push(`/view-todo/${todos_id}`);
    }
    editToDo(todos_id){
        this.props.history.push(`/update-todo/${todos_id}`);
    }

    componentDidMount(){
        ToDoService.getToDos().then((res) => {
            this.setState({ todos: res.data});
        });
    }

    addToDo(){
        this.props.history.push('/add-todo');
    }

    render() {
        return (
            <div>
                <div class="alert alert-secondary text center" role="alert">
                    
                <h4 className="text-center">To-Do List</h4>
                 </div>
                
                 <hr  style={{color: '#000000',backgroundColor: '#000000', height: .5 ,borderColor : '#000000'}}/>
                <div className = "row">
                    <button className="btn btn-outline-warning my-2 my-sm-0" onClick={this.addToDo}> Add Task ToDo</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered table-dark">

                            <thead>
                                <tr>
                                    <th> Task Title</th>
                                    <th> Task Description</th>
                                    <th> Target Date</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todos => 
                                        <tr key = {todos.todos_id}>
                                             <td> {todos.todos_title} </td>   
                                             <td> {todos.todos_description}</td>
                                             <td> {todos.target_date}</td>
                                             <td>
                                                 <button onClick={ () => this.editToDo(todos.todos_id)} className="btn btn-outline-success">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteToDo(todos.todos_id)} className="btn btn-outline-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewToDo(todos.todos_id)} className="btn btn-outline-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListToDosComponent
