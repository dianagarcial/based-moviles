import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
      id:string;
  constructor() {
    this.id = '';
   }

  setId(id:string){
    this.id=id;
  }
  getId(){
    return this.id
  }
}
