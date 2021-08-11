import { Component, OnInit } from '@angular/core';
import {Ejercicioob} from '../ejercicioob';
//import {EJERCICIOS} from '../collection-ejersicios';
import { EjercicioService } from '../ejercicio.service';
@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
ejercio = 'flexiones ';
//creqcion de objetos
/*ejercicio:Ejercicioob ={

  id:1,
  name:"flexiones"
};*/
 
//ejercicioscollecion=EJERCICIOS;
ejercicioscollecion :Ejercicioob[];
ejercicioselecionado:Ejercicioob;

  constructor(private ejercicioService:EjercicioService) {

   }

getEjercicios():void{
 this.ejercicioService.getEjercicios().subscribe(ejercicioscollecion => this.ejercicioscollecion=ejercicioscollecion)
}
/*
getEjercicios_old():void{
  this.ejercicioscollecion = this.ejercicioService.getEjercicios();
}*/
  ngOnInit(): void {
  this.getEjercicios();
   // this.ejercicioscollecion = this.ejercicioService.getEjercicios();
  }
  

  onSelectEjercicio(ejercicios:Ejercicioob):void{
    this.ejercicioselecionado= ejercicios;
    console.log("entro al onselect"+this.ejercicioselecionado.id);
  }

}
