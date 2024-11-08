import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="https://localhost:7244/api/Aliens/"

  constructor(private http:HttpClient) { }

  getAliens(){
    return this.http.get(this.url)
  }
  
  getAlien(alien:any){
    return this.http.get(this.url+alien.id)
  }

  updateAlien(alien:any){
    return this.http.put(this.url+alien.id,alien)
  }

  deleteAlien(alien:any){
    return this.http.delete(this.url+alien.id)
  }

  postAlien(alien:any){
    return this.http.post(this.url,alien)
  }





}
