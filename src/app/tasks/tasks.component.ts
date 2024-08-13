import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {

  @Input() task: any; 
  buttonInvisible: boolean = true;


  onClick(){
    this.task.Done = true;
    console.log(this.task);    
    this.buttonInvisible = false;
    
  }





  constructor() { }
}
