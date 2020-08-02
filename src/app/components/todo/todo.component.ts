import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  handleAddTodoItem(todo: Todo): void {
    this.todoService.handleAdd(todo).subscribe(serverToDo => this.todos.push(serverToDo));
  }

  handleTodoItemDelete(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
