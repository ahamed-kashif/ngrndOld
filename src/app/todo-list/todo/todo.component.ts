import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interfaces/todos';

@Component({
  selector: 'ngrnd-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!:Todo;
  @Output() removeTodo = new EventEmitter<Todo>();

  dispactRemoveTodo(){
    this.removeTodo.emit(this.todo);
  }
}
