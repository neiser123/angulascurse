import { Component, Input, OnInit } from '@angular/core';
import { Ejercicioob } from '../ejercicioob';

@Component({
  selector: 'app-ejercicio-detalle',
  templateUrl: './ejercicio-detalle.component.html',
  styleUrls: ['./ejercicio-detalle.component.css']
})
export class EjercicioDetalleComponent implements OnInit {

  @Input() ejercicioselecionado1:Ejercicioob;
  constructor() { }

  ngOnInit(): void {
  }

}
