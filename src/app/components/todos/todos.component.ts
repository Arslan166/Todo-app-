import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  title="Todos App";
  todos: Todo[]
  localItem: string | null;
  constructor() { 
    this.localItem=localStorage.getItem("todos");
    if(this.localItem ==null){
      this.todos=[];
    }
    else{
      this.todos=JSON.parse(this.localItem);
    }
    this.todos = []
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
