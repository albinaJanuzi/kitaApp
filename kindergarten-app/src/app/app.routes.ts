import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login';
import { NewsComponent } from './news/news';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent, canActivate: [authGuard] }
];
