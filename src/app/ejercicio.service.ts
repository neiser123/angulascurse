import { Injectable } from '@angular/core';
import {EJERCICIOS} from './collection-ejersicios';
import {Ejercicioob} from './ejercicioob';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  constructor() { }
  /*getEjercicios():Ejercicioob[]{

    return EJERCICIOS;
  }*/

  getEjercicios():Observable<Ejercicioob[]>  {

    return of(EJERCICIOS);
  }

}
