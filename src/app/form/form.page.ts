import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  datos: any={
    nombre:'',
    correo:'',
    universidad:''
  };
  
  constructor(private http: HttpClient ) {}
  
  ngOnInit() {
    //this.http.get('http://localhost/parcial/guardar.php?nombre='+this.datos.nombre+'&correo='+this.datos.correo+'&universidad='+this.datos.universidad).subscribe(snap=>{
    this.http.get("http://localhost/parcial/guardar.php?nombre=Mariana&correo=mariana@gmail.com&universidad=USB").subscribe(snap=>{
      console.log(snap);
      
      
    })
  }

  save(){
    // this.navCtrl.navigateRoot('new-page').then(() => {
    //   // Recargar la nueva página
    //   window.location.reload();
    // });
  }
}
