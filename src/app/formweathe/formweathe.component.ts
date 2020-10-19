import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formweathe',
  templateUrl: './formweathe.component.html',
  styleUrls: ['./formweathe.component.css']
})
export class FormweatheComponent implements OnInit {
 namePayes:string
 payesForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  @Output() nomPayesoutput = new EventEmitter<string>();

  ngOnInit(): void {
    this.payesForm = this.formBuilder.group({
      payes: ['', Validators.required],
    
    });
  }

  getPayes(){

    if(this.formControls.payes.valid ){

      
      this.nomPayesoutput.emit(this.formControls.payes.value)
    }
  }
  get formControls() {

    return this.payesForm.controls;
  }
}
