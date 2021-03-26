import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeTemplateComponent } from './templates/home-template/home-template.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../app/modules/home/home.module').then((m) => m.HomeModule),
        data: {
          title: 'Home Component'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
