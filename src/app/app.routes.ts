import { Routes } from '@angular/router';
import { CriptosComponent } from './components/criptos/criptos.component';
import { HomeComponent } from './components/home/home.component';

export const ROUTES: Routes = [
    {path:'home',    component: HomeComponent},
    {path:'criptos', component: CriptosComponent},
    {path:'',        component: HomeComponent},
    {path:'**',      component: HomeComponent}
]