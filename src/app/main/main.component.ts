import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { FirebaseService } from '../services/firebase-service';
//import { Observable } from 'rxjs';
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
  constructor(public firebaseService: FirebaseService) {
    this.firebaseService.getTodos().subscribe(res => {
      this.todos = res;
    })
  }

  txtAdd = '';
  todos: Array<any>;
  
  // todoListState$: Observable<Todo[]>;

  // constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    // this.todoListState$ = this.store.select(state => state.todos);
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    this.firebaseService.addTodo(todo);
    this.txtAdd = '';
  }

  confirmEventReceived() {
    this.firebaseService.removeAll(this.todos);
  }

  async removeTodo(id: string) {
    await this.firebaseService.removeTodo(id, this.todos);
  }

  todoId(index: number, todo: DocumentChangeAction<Todo>) {
    return todo.payload.doc.data().id;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }

  async removeAll() {
    await this.firebaseService.removeAll(this.todos);
  }
}
