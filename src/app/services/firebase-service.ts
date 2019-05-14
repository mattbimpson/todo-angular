import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Todo } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {
  }

  async getTodos() {
    return await this.db.collection('todos').snapshotChanges();
  }

  async addTodo(todo: Todo) {
    todo.id = this.db.createId();
    
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

  async removeAll() {
    await this.db.collection<Todo>('todos').snapshotChanges().subscribe(res => {
      res.forEach(async x => {
        await this.db.collection<Todo>('todos').doc(x.payload.doc.id).delete()
          .catch((error) => { console.error(error) });
      });
    });
  }
}
