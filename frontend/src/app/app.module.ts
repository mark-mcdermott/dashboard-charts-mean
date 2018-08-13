import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
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
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
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
