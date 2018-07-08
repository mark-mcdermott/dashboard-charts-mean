import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsComponent } from './components/charts/charts.component';
import { BloodPressureComponent } from './components/blood-pressure/blood-pressure.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { SleepComponent } from './components/sleep/sleep.component';
import { WeightComponent } from './components/weight/weight.component';

import { BloodPressureService } from './services/blood-pressure/blood-pressure.service';
import { DrinksService } from './services/drinks/drinks.service';
import { HeartRateService } from './services/heart-rate/heart-rate.service';
import { MeditationService } from './services/meditation/meditation.service';
import { SleepService } from './services/sleep/sleep.service';
import { WeightService } from './services/weight/weight.service';


const routes: Routes = [
  { path: '', component: ChartsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    BloodPressureComponent,
    ChartsComponent,
    DrinksComponent,
    HeartRateComponent,
    MeditationComponent,
    SleepComponent,
    WeightComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BloodPressureService,
    DrinksService,
    HeartRateService,
    MeditationService,
    SleepService,
    WeightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
