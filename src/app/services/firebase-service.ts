import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {
  }

  getTodos = () => this.db.collection('todos').snapshotChanges();

  async addTodo(todo: Todo) {
    todo.id = this.db.createId();
    
    // this.store.dispatch(new AddTodo({todo: todo}));
    
    await this.db.collection<Todo>('todos').add({...todo})
      .catch((error) => {
        alert(error);
      });
  }

  async removeTodo(id: string, todos: Array<any>) {
    for(let i = 0; i < todos.length; i++) {
      let item = todos[i];
      if (item.payload.doc.data().id === id) {
        await this.db.collection<Todo>('todos').doc(item.payload.doc.id).delete()
          .catch((error) => { console.error(error) });
      }
    }
  }

  async removeAll(todos: Array<any>) {
    for(let i = 0; i < todos.length; i++) {
      let item = todos[i];
      await this.db.collection<Todo>('todos').doc(item.payload.doc.id).delete()
          .catch((error) => { console.error(error) });
    }
  }
}
