import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmBtnComponent } from './confirm-btn.component';

describe('ConfirmBtnComponent', () => {
  let component: ConfirmBtnComponent;
  let fixture: ComponentFixture<ConfirmBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show yes/no buttons when btnMain clicked', () => {
    const btnMain = fixture.nativeElement.querySelector('#btnMain');
    btnMain.click();
    fixture.detectChanges();
    const confirmYes = fixture.nativeElement.querySelector('.confirm-yes');
    expect(confirmYes).not.toBeNull();
    const confirmNo = fixture.nativeElement.querySelector('.confirm-no');
    expect(confirmNo).not.toBeNull();
  })
});
