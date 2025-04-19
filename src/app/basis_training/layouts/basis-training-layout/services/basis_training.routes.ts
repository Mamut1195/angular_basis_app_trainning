import { Routes } from '@angular/router';
import BasisTrainingLayoutComponent from '../basis-training-layout.component';
import { HomePageComponent } from '../../../pages/home-page/home-page.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: BasisTrainingLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'atletas',
        loadComponent: () =>
          import('../../../pages/profiles-page/profiles-page.component'),
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../../../components/athletes-list/athletes-list.component')
          },
          {
            path: ':id/dashboard',
            loadComponent: () =>
              import('../../../pages/athletas/athletes-dashboard/athlete-dashboard/athlete-dashboard.component')
          },
          // Si habilitas calendario:
          // {
          //   path: ':id/calendar',
          //   loadComponent: () =>
          //     import('../../../pages/athletas/athlete-calendar/athlete-calendar.component').then(m => m.default),
          // },
        ],
      },
    ],
  },
];
