import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { LoginComponent } from './feature/login/login.component'
const routes: Routes = [
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'register',
        loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
      },
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
