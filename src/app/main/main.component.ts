import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
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
  constructor(public db: AngularFirestore) {
    db.collection('todos').snapshotChanges().subscribe(res => {
      this.items = res;
    })
  }

  todos: Todo[] = [];
  txtAdd = '';
  items: Array<any>;
  
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
      .then((res) => {
          this.txtAdd = '';
      })
      .catch((error) => {
        alert(error);
      });
  }

  confirmEventReceived() {
    this.todos = [];
  }

  async removeTodo(id: string) {
    for(let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.payload.doc.data().id === id) {
        await this.db.collection<Todo>('todos').doc(item.payload.doc.id).delete()
          .catch((error) => { console.error(error) });
      }
    }
  }

  todoId(index: number, todo: DocumentChangeAction<Todo>) {
    return todo.payload.doc.data().id;
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      this.addTodo();
    }
  }
}
