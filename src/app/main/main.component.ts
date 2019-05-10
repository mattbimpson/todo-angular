import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo } from '../store/actions';
import { TodoState } from '../store/initialState';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todos: Todo[] = [];
  //todoListState$: Observable<Todo[]>;

  //constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    //this.todoListState$ = this.store.select(state => state.todos);
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    todo.id = 0;
    //this.store.dispatch(new AddTodo({todo: todo}));

    this.todos.push(todo);
  }

  confirmEventReceived() {
    window.alert('confirm event');
  }

  txtAdd: string = "";
}
