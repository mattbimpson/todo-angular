import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from '../todo/todo.component';
import { ConfirmBtnComponent } from '../confirm-btn/confirm-btn.component';
import { By } from '@angular/platform-browser';
import { FirebaseService } from '../services/firebase-service';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

const FirestoreStub = {
  collection: (name: string) => ({
    doc: (_id: string) => ({
      valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
      set: (_d: any) => new Promise((resolve, _reject) => resolve()),
    }),
  }),
  createId: () => "test_id"
};

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  const addTodo = () => {
    const textBox = fixture.debugElement.query(By.css('input[type=text]'));
    textBox.nativeElement.value = 'test';
    const btnAdd = fixture.nativeElement.querySelector('#btnAdd');
    btnAdd.disabled = false;
    btnAdd.click();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ MainComponent, TodoComponent, ConfirmBtnComponent ],
      providers: [
        FirebaseService, 
        AngularFirestore,
        { provide: AngularFirestore, useValue: FirestoreStub },
      ]
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

  // it('should be able to add a todo item', () => {
  //   addTodo();
  //   expect(component.todos.length).toEqual(1);
  // })

  // it('should clear all todos when clear all button clicked', () => {
  //   addTodo();
  //   fixture.detectChanges();
  //   const btnConfirm = fixture.nativeElement.querySelector('#btnMain');
  //   btnConfirm.click();
  //   fixture.detectChanges();
  //   const btnClearAll = fixture.nativeElement.querySelector('.confirm-yes');
  //   btnClearAll.click();
  //   expect(component.todos.length).toEqual(0);
  // })
});
