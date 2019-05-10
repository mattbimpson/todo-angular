import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
// import { Store, select } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { AddTodo } from '../store/actions';
// import { TodoState } from '../store/initialState';

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
    todo.id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0;
    //this.store.dispatch(new AddTodo({todo: todo}));

    this.todos.push(todo);
    this.txtAdd = "";
  }

  confirmEventReceived() {
    this.todos = [];
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(x => x.id !== id);
  }

  todoId(index: number, todo: Todo) {
    return todo.id;
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.addTodo();
    }
  }

  txtAdd: string = "";
}
