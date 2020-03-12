import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        pathMatch: 'full',
        component:AppComponent,
        canActivate:[AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth-routing.module').then(m => m.AuthRoutingModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
