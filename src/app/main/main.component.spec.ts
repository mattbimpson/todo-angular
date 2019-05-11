import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';
import { ConfirmBtnComponent } from '../confirm-btn/confirm-btn.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MainComponent, TodoComponent, ConfirmBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add a todo item', () => {
    const textBox = fixture.debugElement.query(By.css('input[type=text]'));
    textBox.nativeElement.value = 'test';
    const btnAdd = fixture.nativeElement.querySelector('#btnAdd');
    btnAdd.disabled = false;
    btnAdd.click();
    expect(component.todos.length).toEqual(1);
  })
});
