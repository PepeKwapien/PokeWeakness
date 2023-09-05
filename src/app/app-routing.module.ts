import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';

const routes: Routes = [
    {
        path: '',
        children: [{ path: ':pokemon', component: PokemonPageComponent, pathMatch: 'full' }]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
