import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Lesson2Component} from './lesson2/lesson2/lesson2.component';
import {Lesson3Component} from './lesson3/lesson3/lesson3.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'lesson/2',
    component: Lesson2Component
  },
  {
    path: 'lesson/3',
    component: Lesson3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
