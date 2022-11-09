import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { LayoutModule } from '../../core/layout/layout.module';
import { AuthModule } from 'src/app/module/auth/auth.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from '../../core/interceptor/httpconfig.interceptor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    RouterModule,
    CommonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
    providers: [
      DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    ]
})
export class SharedModule { }
