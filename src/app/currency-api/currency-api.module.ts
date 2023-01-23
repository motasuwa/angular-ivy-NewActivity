import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardModule } from '../info-card/info-card.module';
import { CurrencyApiDatasourceService } from './currency-api.datasource.service';
import { CurrencyApiComponent } from './currency-api.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, InfoCardModule],
  providers: [CurrencyApiDatasourceService],
  declarations: [CurrencyApiComponent],
  exports: [CurrencyApiComponent],
})
export class CurrencyModule {}
