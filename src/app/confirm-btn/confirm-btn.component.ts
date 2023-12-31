import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirm-btn',
  templateUrl: './confirm-btn.component.html',
  styleUrls: ['./confirm-btn.component.css']
})
export class ConfirmBtnComponent implements OnInit {

  @Input() buttonText: string;
  @Output() confirmOut: EventEmitter<any> = new EventEmitter();
  confirming = false;

  constructor() { }

  ngOnInit() {
  }

  toggleConfirm() {
    this.confirming = !this.confirming;
  }
  confirmYes() {
      this.confirmOut.emit(null);
      this.toggleConfirm();
  }
  confirmNo() {
      this.toggleConfirm();
  }
}
