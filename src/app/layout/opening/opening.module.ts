import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { OpeningRoutingModule } from './opening-routing.module';
import { OpeningComponent } from './opening.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, Ng2Charts, OpeningRoutingModule, PageHeaderModule],
    declarations: [OpeningComponent]
})
export class OpeningModule {}
