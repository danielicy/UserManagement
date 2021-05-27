import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppErrorComponent } from './error/handling/app-error/app-error.component';
import { NoAccessComponent } from './components/no-access/no-access.component';



@NgModule({
  declarations: [AppErrorComponent, NoAccessComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
