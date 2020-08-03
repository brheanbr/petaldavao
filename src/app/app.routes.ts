import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path : 'home', loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule)},



    { path: '**', redirectTo: 'home'}

];
