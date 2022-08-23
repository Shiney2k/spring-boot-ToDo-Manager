package net.shaininibm.springboot.Models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "to_dos")
public class ToDos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long todos_id;
	
	@Column(name = "todos_title")
	private String todos_title;

	@Column(name = "todos_description")
	private String todos_description;
	
	@Column(name = "target_date")
	private String target_date;

	public ToDos(long todos_id, String todos_title, String todos_description, String target_date) {
		this.todos_id = todos_id;
		this.todos_title = todos_title;
		this.todos_description = todos_description;
		this.target_date = target_date;
	}

	public ToDos() {
		
	}

	public long getTodos_id() {
		return todos_id;
	}

	public void setTodos_id(long todos_id) {
		this.todos_id = todos_id;
	}

	public String getTodos_title() {
		return todos_title;
	}

	public void setTodos_title(String todos_title) {
		this.todos_title = todos_title;
	}

	public String getTodos_description() {
		return todos_description;
	}

	public void setTodos_description(String todos_description) {
		this.todos_description = todos_description;
	}

	public String getTarget_date() {
		return target_date;
	}

	public void setTarget_date(String target_date) {
		this.target_date = target_date;
	}
	
	
}
