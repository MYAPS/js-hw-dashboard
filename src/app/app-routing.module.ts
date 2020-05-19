import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/guards';
import { AuthenticationService } from './services/authentication.service';
import { AuthService } from './auth/services/auth.service';
import { AppUserService } from './services/app-user.service';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        pathMatch: 'full',
        component: AppComponent
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
    providers: [AuthGuard,
      { provide: AuthService, useClass: AuthenticationService },
      { provide: 'myService', useClass: AuthenticationService },
      { provide: 'myService2', useExisting: 'myService'},
      { provide: 'SERVER_URL' , useValue: 'http://localhost:4200' },
      { provide: 'CONFIG' , useValue: {name:'user',key:'sdlkhfldsflkfl'}},
      { provide: 'TIME_OUT' , useValue: 30 }
      ],
})
export class AppRoutingModule {}
