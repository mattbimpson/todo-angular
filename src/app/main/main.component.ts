import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoState } from '../store/initialState';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../store/actions';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private store: Store<any>) {}

  todoState$: Observable<Todo[]>;

  txtAdd = '';
  todos: Todo[] = [];

  async ngOnInit() {
    this.todoState$ = this.store.select(state => state.todos);
    this.store.dispatch(new actions.GetTodos());
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    this.store.dispatch(new actions.AddTodo({todo}));
    this.txtAdd = '';
  }

  confirmEventReceived() {
    // this.firebaseService.removeAll();
  }

  async removeTodo(id: string) {
    // await this.firebaseService.removeTodo(id, this.todos);
  }

  todoId(index: number, todo: Todo) {
    return todo.id;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}
