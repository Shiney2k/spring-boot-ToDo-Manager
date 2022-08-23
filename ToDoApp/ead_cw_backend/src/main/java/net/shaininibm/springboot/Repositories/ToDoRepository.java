package net.shaininibm.springboot.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.shaininibm.springboot.Models.ToDos;

@Repository
public interface ToDoRepository extends JpaRepository<ToDos, Long> {
	
}
