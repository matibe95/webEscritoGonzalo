import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private taskSS: TareaService){}
  taskList: any = []

  ngOnInit(){
    console.log('matibe')
    this.taskSS.getTasks().subscribe((res)=>{
      this.taskList = res
    })
  }
  crearTarea(){
    // console.log('matibe')
    this.taskSS.createTask('data').subscribe((res)=>{

    })
  }
}
