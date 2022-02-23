import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card';
import { NgSelectModule } from '@ng-select/ng-select';
import {ToastModule} from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({

  imports: [

  ],
  exports:[
    ReactiveFormsModule,
    NgSelectModule,
    CardModule,
    FormsModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule
  ]
})
export class SharedModule { }
