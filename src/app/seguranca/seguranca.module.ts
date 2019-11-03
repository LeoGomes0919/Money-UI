import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    PanelModule,
    ButtonModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
