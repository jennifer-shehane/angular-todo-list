import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
  <input class='todo-input'
        [value]="title"
        (keyup.enter)="changeTitle($event.target.value)"
        #inputElement>
  <button class='btn' (click)="changeTitle(inputElement.value)">
    Save
  </button>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = 'I love Angular'

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle)
  }

  @Output() submit: EventEmitter<string> = new EventEmitter()
}
