import { Routes } from '@angular/router';
import BasisTrainingLayoutComponent  from '../basis-training-layout.component';
import { HomePageComponent } from '../../../pages/home-page/home-page.component';

export const layoutRoutes: Routes = [
    {
        path: '',
        component: BasisTrainingLayoutComponent,
        children: [
            {
                path:'',
                component: HomePageComponent,
            },

            {
                path: 'atletas',
                loadComponent: () =>
                    import('../../../pages/profiles-page/profiles-page.component'),
            },

        ]
    },
];
