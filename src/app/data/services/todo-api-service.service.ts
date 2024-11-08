import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../interfaces/todoApiService";

@Injectable({
  providedIn: 'root'
})
export class TodoApiServiceService {

   http = inject(HttpClient)
  apiUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor() { }

  getApiTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}todos`)
  }
}
