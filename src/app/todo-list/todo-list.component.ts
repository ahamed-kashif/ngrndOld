import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todos';

@Component({
  selector: 'ngrnd-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  selectedTodo: Todo | null = null;
  todos: Todo[] = [
    {
      id:1,
      title : 'Study',
      description:'Complete CSE115 assignment',
      created_at: new Date('5-jun-2024'),
      updated_at: new Date('11-jun-2024'),
      completed_at: new Date(),
      priority: 0
    },
    {
      id:2,
      title : 'Work',
      description:'Complete brac mne project',
      created_at: new Date('10-jun-2024'),
      updated_at: new Date('15-jun-2024'),
      completed_at: null,
      priority: 1
    },
    {
      id:3,
      title : 'Water Plants',
      description:'Complete watering plants',
      created_at: new Date('11-jun-2024'),
      updated_at: new Date('19-jun-2024'),
      completed_at: null,
      priority: 2
    }
  ];
  showTodo(todo : Todo){
    this.selectedTodo = todo;
  }
  resetTodo(){
    this.selectedTodo = null;
  }
  handleRemoveTodo(todo : Todo){
    this.selectedTodo = null;
    this.todos =  this.todos.filter(function(t){
     return t.id !== todo.id; debugger
    })
  }
  ngOnInit(): void {
    
  }
}
