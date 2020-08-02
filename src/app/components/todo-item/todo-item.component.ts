import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../todo/todo.model';
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  ngClasses(): object {
    const classes = {
      todo: true,
      completed: this.todo.completed
    };

    return classes;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.handleToggle(todo).subscribe(res => console.log(res));
  }

  onDelete(todo: Todo): void {
    this.delete.emit(todo);
    this.todoService.handleDelete(todo).subscribe();
  }
}
