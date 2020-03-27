import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import {AppModule} from '../app.module';
import {HeroComponentComponent} from '../hero-component/hero-component.component';



@NgModule({
  declarations: [HomepageContainerComponent, HeroComponentComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ]
})
export class HomepageModule { }
