import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
	 { path: 'home', component: HomeComponent,  data : {title: 'Home'}},
   { path: 'user', component: UserComponent, data : {title: 'User'}},
	 // { path: 'page-not-found', component: PageNotFoundComponent, data : {title: 'Page Not Found'} },
	 { path: '', redirectTo:"home"  , pathMatch: 'full'}, // redirect to home page on load
	 { path: '**', redirectTo:"home" } // redirect to error page on load
];
export const route: ModuleWithProviders = RouterModule.forRoot(appRoutes);
