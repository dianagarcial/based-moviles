import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listado: any;
 
  constructor(private http: HttpClient, private user:UserService) {
    
  }
  
  ngOnInit(){
    this.http.get('http://localhost/parcial/consultados.php').subscribe(snap=>{
        console.log(snap);
        this.listado=snap
    })
  }

 


  eliminar(id:string){
    this.http.get('http://localhost/parcial/eliminar.php?id='+id).subscribe(snap=>{
        console.log(snap);
        
    })
    
  }
  editar(id:string){
    this.user.setId(id)

   
  }
}