
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';




@Component({
  selector: 'app-root',
  imports: [MatFormFieldModule, MatStepperModule,MatSelectModule,MatInputModule,ReactiveFormsModule,MatCardModule,MatCheckboxModule,MatIconModule,MatButtonModule,MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLinear = true;
  step1FormGroup: FormGroup;
  step2FormGroup: FormGroup;
  step3FormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.step1FormGroup = this._formBuilder.group({
      mifid: ['', Validators.required],
      suitability: ['', Validators.required]
    });
    this.step2FormGroup = this._formBuilder.group({
      kyc: ['', Validators.required],
      test: ['', Validators.required]
    });
    this.step3FormGroup = this._formBuilder.group({
      documentation: ['', Validators.required]
    });
  }
}