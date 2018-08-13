import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartModule } from './modules/angular-google-chart/google-chart.module'; // from https://github.com/dbk4002/angular-google-chart
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsDashboardComponent } from './components/charts-dashboard/charts-dashboard.component';
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
  { path: '', component: ChartsDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    BloodPressureComponent,
    ChartsDashboardComponent,
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
    GoogleChartModule,
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    ChartsModule,
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
