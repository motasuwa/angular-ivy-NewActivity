import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActivityModule } from './activity/activity.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ActivityModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
