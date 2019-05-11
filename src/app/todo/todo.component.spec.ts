import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';
import { Todo } from '../todo';

fdescribe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    const todo = new Todo();
    todo.id = 0;
    todo.text = 'new todo';
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply completed css when todo completed is true', () => {
    component.todo.completed = true;
    fixture.detectChanges();
    const completedItem = fixture.nativeElement.querySelector('.completed');
    expect(completedItem).not.toBeNull();
  })
});
