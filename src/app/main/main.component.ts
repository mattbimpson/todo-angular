import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { FirebaseService } from '../services/firebase-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(public firebaseService: FirebaseService) {}

  txtAdd = '';
  todos: Todo[] = [];

  async ngOnInit() {
    await this.firebaseService.getTodos().then(res => {
      res.subscribe(todos => {
        this.todos = todos.map(x => x.payload.doc.data() as Todo);
      });
    })
  }

  addTodo() {
    const todo = new Todo();
    todo.text = this.txtAdd;
    todo.completed = false;
    this.firebaseService.addTodo(todo);
    this.txtAdd = '';
  }

  confirmEventReceived() {
    this.firebaseService.removeAll();
  }

  async removeTodo(id: string) {
    await this.firebaseService.removeTodo(id, this.todos);
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
