import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'missingno',
                loadChildren: () => import('./modules/not-found/not-found.module').then((m) => m.NotFoundModule)
            },
            {
                path: ':pokemon',
                loadChildren: () => import('./modules/pokemon-page/pokemon-page.module').then((m) => m.PokemonPageModule)
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
