import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
  data: Observable<any[]>;
  constructor(public db: AngularFirestore) {
    db.collection('todos').valueChanges()
      .subscribe((res: Todo[]) => {
        this.todos = res;
    });
  }

  todos: Todo[] = [];
  txtAdd = '';
  // todoListState$: Observable<Todo[]>;

  // constructor(private store: Store<TodoState>) {}

  ngOnInit() {
    // this.todoListState$ = this.store.select(state => state.todos);
  }

  async addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    todo.id = this.db.createId();
    // this.store.dispatch(new AddTodo({todo: todo}));
    
    await this.db.collection<Todo>('todos').add({...todo})
      .then(() => {
          this.txtAdd = '';
      })
      .catch((error) => {
        alert(error);
      });
  }

  confirmEventReceived() {
    this.todos = [];
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter(x => x.id !== id);
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
