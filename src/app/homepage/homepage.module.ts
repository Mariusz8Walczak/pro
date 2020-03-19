import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [HomepageContainerComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
