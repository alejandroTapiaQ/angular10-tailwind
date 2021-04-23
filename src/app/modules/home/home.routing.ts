import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCatComponent } from './detail-cat/detail-cat.component';

// Components
import { HomeComponent } from './home.component';
import { SearchCatComponent } from './search-cat/search-cat.component';
import { TopCatsComponent } from './top-cats/top-cats.component';

const routes: Routes = [
    { path: '', redirectTo: 'search-cats', component: HomeComponent },
    { path: 'top-cats', component: TopCatsComponent },
    { path: 'search-cats', component: SearchCatComponent },
    { path: 'top-cats/:id', component: DetailCatComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
