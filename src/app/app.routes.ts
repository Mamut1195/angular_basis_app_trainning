import { Routes } from '@angular/router';
import { layoutRoutes } from './basis_training/layouts/basis-training-layout/services/basis_training.routes'

export const appRoutes: Routes = [
    ...layoutRoutes,
    {
      path: '**',
      redirectTo: '', 
    }
  ];
