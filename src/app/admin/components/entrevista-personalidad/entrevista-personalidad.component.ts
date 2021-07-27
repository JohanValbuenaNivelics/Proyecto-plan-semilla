import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-entrevista-personalidad',
  templateUrl: './entrevista-personalidad.component.html',
  styleUrls: ['./entrevista-personalidad.component.scss']
})
export class EntrevistaPersonalidadComponent implements OnInit {
  
  firstFormGroup: FormGroup  = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
   
  }

  private buildForm(){
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
