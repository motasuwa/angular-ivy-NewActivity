import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardModule } from '../info-card/info-card.module';
import { PublicApiDatasourceService } from './public-api.datasource.service';
import { PublicApiComponent } from './public-api.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, InfoCardModule],
  providers: [PublicApiDatasourceService],
  declarations: [PublicApiComponent],
  exports: [PublicApiComponent],
})
export class ActivityModule {}
