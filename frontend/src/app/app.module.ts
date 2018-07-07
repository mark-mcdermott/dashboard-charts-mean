import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BloodPressureComponent } from './components/blood-pressure/blood-pressure.component';

import { BloodPressureService } from './services/blood-pressure/blood-pressure.service';
import { ChartsComponent } from './components/charts/charts.component';
import { DrinksComponent } from './components/drinks/drinks.component';

const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    BloodPressureComponent,
    ChartsComponent,
    DrinksComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BloodPressureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
