import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilityTableComponent } from 'src/app/components/ability-table/ability-table.component';
import { ExpansionPanelComponent } from 'src/app/components/expansion-panel/expansion-panel.component';
import { PokemonPageComponent } from 'src/app/components/pokemon-page/pokemon-page.component';
import { ProgressBarComponent } from 'src/app/components/progress-bar/progress-bar.component';
import { StatsTableComponent } from 'src/app/components/stats-table/stats-table.component';
import { TypeBoxComponent } from 'src/app/components/type-box/type-box.component';
import { TypeEffectivenessTableComponent } from 'src/app/components/type-effectiveness-table/type-effectiveness-table.component';
import { TypeHighlightDirective } from 'src/app/directives/type-highlight.directive';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        PokemonPageComponent,
        TypeBoxComponent,
        ExpansionPanelComponent,
        TypeEffectivenessTableComponent,
        AbilityTableComponent,
        TypeHighlightDirective,
        ProgressBarComponent,
        StatsTableComponent
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatTableModule,
        SharedModule,
        RouterModule.forChild([{ path: '', component: PokemonPageComponent, pathMatch: 'full' }])
    ]
})
export class PokemonPageModule {}

