import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { TopCatsComponent } from './top-cats/top-cats.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'top-cats', component: TopCatsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
