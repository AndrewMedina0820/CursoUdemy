import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroes/heroe.component";
const app_routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
    // { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
