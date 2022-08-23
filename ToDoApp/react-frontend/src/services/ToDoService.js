import axios from 'axios';

const TODO_API_BASE_URL = "http://localhost:8080/restApi/todos";

class ToDoService {

    getToDos(){
        return axios.get(TODO_API_BASE_URL);
    }

    createToDo(todos){
        return axios.post(TODO_API_BASE_URL, todos);
    }

    getToDoById(todos_id){
        return axios.get(TODO_API_BASE_URL + '/' + todos_id);
    }

    updateToDo(todos, todos_id){
        return axios.put(TODO_API_BASE_URL + '/' +todos_id, todos);
    }

    deleteToDo(todos_id){
        return axios.delete(TODO_API_BASE_URL + '/' + todos_id);
    }
}

export default new ToDoService()