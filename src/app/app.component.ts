import { Component } from '@angular/core';
import { Todo } from './ToDo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';

  todos: Todo[] = [];
  newTodo: string;
  theme: boolean = false;
  btn: any;

  // Adding a todo into the todo list array
  saveTodo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true;
      this.todos.push(todo);
      this.newTodo = "";
    }else{
      alert("Please Enter a ToDo");
    }
  }

  // Complete-Restart a todo
  Completetodo(id:number){
    this.markTask(id).then((IDnum) => this.todos[IDnum].isCompleted = !this.todos[IDnum].isCompleted);
  }
  async markTask(id:number){
    let result = id;
    console.log(result);
    return result; // returns a PROMISE, when fulfilled gives the "id" of the todo.
  }

  // Deleting a todo
  Deletetodo(id:number){
    this.dltTask(id).then((IDnum) => this.todos = this.todos.filter((v,i)=>i !== IDnum));
  }
  async dltTask(id:number){
    let result = await id;  // using "await" converts the result into a value, or else an "async" function always returns a promoise.
    console.log(result);
    return result; 
  }
  

  changeTheme(){
    this.theme = !this.theme;
    this.btn = document.getElementById("themeButton");
    this.btn.addEventListener("click", () => {
      const newTheme = (!this.theme)? "light" : "dark";
      const newCta = newTheme === "dark" ? "dark" : "light";
      this.btn.innerText = newCta;
    });
  }
}
