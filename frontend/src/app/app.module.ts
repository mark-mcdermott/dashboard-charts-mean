import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { BloodpressureComponent } from './components/bloodpressure/bloodpressure.component';

import { BloodpressureService } from './services/bloodpressure/bloodpressure.service';

const routes: Routes = [
  { path: 'bloodpressure', component: BloodpressureComponent },
  { path: '', redirectTo: '/bloodpressure', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BloodpressureComponent
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
