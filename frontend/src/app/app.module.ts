import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';

import { ChartService } from './services/chart/chart.service';

import { AppComponent } from './app.component';
import { BloodPressureComponent } from './components/blood-pressure/blood-pressure.component';
import { DrinkComponent } from './components/drink/drink.component';
import { MeditationComponent } from './components/meditation/meditation.component';
import { SleepComponent } from './components/sleep/sleep.component';
import { WeightComponent } from './components/weight/weight.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    BloodPressureComponent,
    DrinkComponent,
    MeditationComponent,
    SleepComponent,
    WeightComponent,
    HeartRateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
