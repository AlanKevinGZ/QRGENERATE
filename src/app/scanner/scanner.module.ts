import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateqrComponent } from './generateqr/generateqr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { NavComponent } from './navbar/nav.component';
import { QrdategenerateComponent } from './qrdategenerate/qrdategenerate.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GenerateqrComponent,
    NavComponent,
    QrdategenerateComponent,
    HomePageComponent,
  ],
  exports:[
    GenerateqrComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxQRCodeModule,
    FormsModule,
  ]
})
export class ScannerModule { }
