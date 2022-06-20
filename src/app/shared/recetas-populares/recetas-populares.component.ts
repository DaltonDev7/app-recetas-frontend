import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas-populares',
  templateUrl: './recetas-populares.component.html',
  styleUrls: ['./recetas-populares.component.scss']
})
export class RecetasPopularesComponent implements OnInit {

  val1: number;

  val2: number = 3;

  constructor() { }

  ngOnInit(): void {
  }


}
