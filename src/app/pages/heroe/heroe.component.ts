import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: HeroeModel;

  constructor() {
    this.heroe = new HeroeModel();
  }

  ngOnInit() {
  }

  guardar( form: NgForm ) {

    if(form.invalid) {
      return;
    }

    console.log(form);
    console.log(this.heroe);


  }

}
