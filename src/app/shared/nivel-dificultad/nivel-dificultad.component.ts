import { Component, Input, OnInit } from '@angular/core';
import { NivelDificultad } from 'src/app/core/models/nivel-dificultad.model';

@Component({
  selector: 'nivel-dificultad',
  templateUrl: './nivel-dificultad.component.html',
  styleUrls: ['./nivel-dificultad.component.scss']
})
export class NivelDificultadComponent implements OnInit {

  @Input() nivelDificultad: NivelDificultad

  constructor() { }

  ngOnInit(): void {
    console.log(this.nivelDificultad);
    console.log('hola');

  }

}
