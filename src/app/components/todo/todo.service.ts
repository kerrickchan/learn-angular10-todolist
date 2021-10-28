import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

const httpHeader: HttpHeaders = new HttpHeaders({
  'Content-Type': 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  todos: Todo[];

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl + this.todosLimit}`);
  }

  handleAdd(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.post<Todo>(url, todo, {headers: httpHeader});
  }

  handleToggle(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, {headers: httpHeader});
  }

  handleDelete(todo: Todo): Observable<void> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<void>(url, {headers: httpHeader});
  }
}
