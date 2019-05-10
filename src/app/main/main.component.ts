import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo } from '../store/actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //todos: Observable<Todo[]>

  // constructor(private store: Store<Todo[]>) {
  //   this.todos = store.pipe(select('todos'));
  // }

  ngOnInit() {
    //this.store.select('todos').subscribe(data => this.todos = data)
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    todo.id = 0;
    //this.store.dispatch(new AddTodo({todo: todo}));

    this.todos.push(todo);
  }

  txtAdd: string = "";

  todos: Todo[] = [];

  // todos: Todo[] = [{ id: 0, text: 'first item', completed: false }, { id: 1, text: 'second', completed: false }];
}
