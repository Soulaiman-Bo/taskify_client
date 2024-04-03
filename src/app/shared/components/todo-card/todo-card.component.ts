import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../../core/models/todo.model';

export type ITodoType = 'to-do' | 'in-progress' | 'done';
export const ITodoStatus = ['to-do', 'in-progress', 'done'];

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss',
})
export class TodoCardComponent {

  @Input() type: ITodoType = 'to-do';
  @Input() todo!: ITodo;

  @Output() loadTodoForm = new EventEmitter<ITodo>();
  @Output() setTaskDone = new EventEmitter<ITodo>();


  onIconClick() {
    this.loadTodoForm.emit(this.todo);
  }

  setDone() {
    this.setTaskDone.emit(this.todo);
  }

}


