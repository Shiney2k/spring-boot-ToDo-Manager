package net.shaininibm.springboot.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.shaininibm.springboot.Exceptions.ResourceNotFoundException;
import net.shaininibm.springboot.Models.ToDos;
import net.shaininibm.springboot.Repositories.ToDoRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/restApi/")
public class ToDoController {
	
	@Autowired
	private ToDoRepository toDoRepository;
	
	@GetMapping("/todos")
	public List<ToDos>getAllToDos(){
		return toDoRepository.findAll();
	}
	
	@PostMapping("/todos")
	public ToDos createToDos(@RequestBody ToDos toDos) {
		return toDoRepository.save(toDos);
	}
	
	@PutMapping("/todos/{todos_id}")
	public ResponseEntity<ToDos> updateToDo(@PathVariable Long todos_id, @RequestBody ToDos to_dos){
		ToDos toDos = toDoRepository.findById(todos_id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + todos_id));
		
		toDos.setTodos_title(to_dos.getTodos_title());
		toDos.setTodos_description(to_dos.getTodos_description());
		toDos.setTarget_date(to_dos.getTarget_date());
		
		ToDos updatedToDos = toDoRepository.save(toDos);
		return ResponseEntity.ok(updatedToDos);
	}
	
	@DeleteMapping("/todos/{todos_id}")
	public ResponseEntity<Map<String, Boolean>> deleteToDo(@PathVariable Long todos_id){
		ToDos toDos = toDoRepository.findById(todos_id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + todos_id));
		
		toDoRepository.delete(toDos);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/todos/{todos_id}")
	public ResponseEntity<ToDos> getToDoById(@PathVariable Long todos_id) {
		ToDos toDos = toDoRepository.findById(todos_id)
				.orElseThrow(() -> new ResourceNotFoundException("Task not exist with id :" + todos_id));
		return ResponseEntity.ok(toDos);
	}
	
}
