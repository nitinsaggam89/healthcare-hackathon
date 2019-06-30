import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth-guard.service';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'tilegrid', component : TileGridComponent, canActivate: [AuthGuard]},
  { path: 'home', component: SideNavComponent, canActivate: [AuthGuard], 
  children: [
    {
        path: 'dashboard',
        component: TileGridComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
      path: 'test',
      component: TestComponent
  }
  ] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
