import { environment } from '../environments/environment';
import { AppProviders } from './app-providers';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [AppProviders.forPorts(environment)],

  bootstrap: [AppComponent],
})
export class AppModule {}
