import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { TopCatsComponent } from './top-cats/top-cats.component';
import { CardViewComponent } from './card-view/card-view.component';
import { HomeService } from './home.service';


@NgModule({
  declarations: [HomeComponent, TopCatsComponent, CardViewComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbAlertModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
