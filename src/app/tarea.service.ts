import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private route = 'http://localhost:8000/api/v1/tareas'
  constructor(private http: HttpClient) {}

  getTasks(){
    const httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json',
      })
    };

    return this.http.get(this.route, httpOptions);
  }

  createTask(body: any){
      const httpHeaders = {
        headers: new HttpHeaders({ 
          'Content-Type': 'application/json',
        })
      };
  
      return this.http.post<any>(this.route, body, httpHeaders)
  }
}
