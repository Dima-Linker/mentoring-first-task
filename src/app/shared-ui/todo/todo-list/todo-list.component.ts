import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../../data/interfaces/todoApiService";
import {MatTable} from "@angular/material/table";
import {JsonPipe} from "@angular/common";
import {MatFormField} from "@angular/material/form-field";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatTable,
    JsonPipe,
    MatFormField,
    MatDivider
  ],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Output() deleteTodo = new EventEmitter<Todo>();
  @Input() todo!: Todo;

  onDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(this.todo)
  }
}
