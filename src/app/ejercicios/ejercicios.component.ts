import { Component, OnInit } from '@angular/core';
import {Ejercicioob} from '../ejercicioob';
import {EJERCICIOS} from '../collection-ejersicios';
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
 
ejercicioscollecion=EJERCICIOS;
ejercicioselecionado:Ejercicioob;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectEjercicio(ejercicios:Ejercicioob):void{
    this.ejercicioselecionado= ejercicios;
    console.log("entro al onselect"+this.ejercicioselecionado.id);
  }

}
