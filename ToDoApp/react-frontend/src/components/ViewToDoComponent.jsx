import React, { Component } from 'react'
import ToDoService from '../services/ToDoService'

class ViewToDoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos_id: this.props.match.params.todos_id,
            todo: {}
        }
    }

    componentDidMount(){
        ToDoService.getToDoById(this.state.todos_id).then( res => {
            this.setState({todo: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card text-white bg-secondary col-md-6 offset-md-3">
                    <h3 className = "text-center card-header"> View To Do Task Details</h3>
                    <hr  style={{color: '#02051f',backgroundColor: '#02051f', height: 1 ,borderColor : '#02051f'}}/>
                    <div className = "card-body text-dark">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item text-center"><span>Task Title  :<br/> <b>{ this.state.todo.todos_title } </b> </span></li>
                            <li class="list-group-item text-center">Task Description   :<br/> <span><b> { this.state.todo.todos_description }</b></span></li>
                            <li class="list-group-item text-center">Target Date    : <br/>  <span><b>{ this.state.todo.target_date }</b></span></li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewToDoComponent
