
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllpostagens(){
    return this.http.get('http://31.220.57.14:8000/postagens')
  }

}
