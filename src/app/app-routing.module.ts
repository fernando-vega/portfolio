import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        data: {title: 'Fernando | Home'}
      },
      {
        path: 'home',
        data: {title: 'Fernando | Home'},
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        data: {title: 'Fernando | About'},
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume',
        data: {title: 'Fernando | Resume'},
        loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
      },
      {
        data: {title: 'Fernando | Portfolio'},
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
