import { APP_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActivityModule } from './activity/activity.module';
import { CurrencyModule } from './currency-api/currency-api.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, ActivityModule, CurrencyModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
