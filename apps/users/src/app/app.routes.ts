import { Route } from '@angular/router';
import { authGuard } from '@auth/data-access';


// TODO то как это будет выглядеть при добавлении слоя /admin
// export const appRoutes: Route[] = [
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full',
//   },
//   {
//     path: 'admin',
//     canActivateChild: [authGuard, adminGuard],
//     children: [
//       {
//         path: 'home',
//         loadComponent: () => import('@users/home').then(c => c.HomeComponent)
//       },
//       {
//         path: 'users/:id',
//         loadComponent: () => import('@users/feature-users-detail').then(c => c.UsersDetailComponent),
//       },
//     ],
//   },
//   {
//     path: 'login',
//     loadComponent: () => import('@auth/feature-login').then(c => c.LoginContainerComponent)
//   },
//   {
//     path: 'signup',
//     loadComponent: () => import('@auth/feature-register').then(c => c.RegisterContainerComponent)
//   }
// ];


export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@users/home').then(c => c.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'users/:id',
    loadComponent: () => import('@users/feature-users-detail').then(c => c.UsersDetailComponent),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('@auth/feature-login').then(c => c.LoginContainerComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('@auth/feature-register').then(c => c.RegisterContainerComponent)
  }
];
