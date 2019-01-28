import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'sign-in',
        loadChildren: './pages/sign-in/sign-in.module#SignInPageModule'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
