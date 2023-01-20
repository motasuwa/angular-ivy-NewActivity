import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardModule } from '../info-card/info-card.module';
import { ActivityDatasourceService } from './activity.datasource.service';
import { ActivityComponent } from './activity.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, InfoCardModule],
  providers: [ActivityDatasourceService],
  declarations: [ActivityComponent],
  exports: [ActivityComponent],
})
export class ActivityModule {}
