import { Component, OnInit } from '@angular/core';
import {Ejercicioob} from '../ejercicioob';
@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
ejercio = 'flexiones ';
//creqcion de objetos
ejercicio:Ejercicioob ={

  id:1,
  name:"flexiones"
};
  constructor() { }

  ngOnInit(): void {
  }

}
