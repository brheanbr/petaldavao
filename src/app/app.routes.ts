import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path : '', loadChildren: () => import('./modules/home/home.module').then(x => x.HomeModule)},



    { path: '**', redirectTo: ''}

];
