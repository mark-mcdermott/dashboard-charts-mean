import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BloodpressureComponent } from './components/bloodpressure/bloodpressure.component';

import { BloodpressureService } from './services/bloodpressure/bloodpressure.service';
import { ChartsComponent } from './components/charts/charts.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    BloodpressureComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BloodpressureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
