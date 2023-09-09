import { Component, Input, OnInit } from '@angular/core';
import { PokemonDefensiveCharacteristics } from 'src/app/interfaces/pokemonDefensiveCharacteristics.interface';
import { TypesEffects } from 'src/app/interfaces/typesEffects.interface';

@Component({
    selector: 'app-type-effectiveness-table',
    templateUrl: './type-effectiveness-table.component.html',
    styleUrls: ['./type-effectiveness-table.component.scss']
})
export class TypeEffectivenessTableComponent implements OnInit {
    @Input() pokemonDefensiveCharacteristics: PokemonDefensiveCharacteristics = {
        no: [],
        quarter: [],
        half: [],
        neutral: [],
        double: [],
        quadruple: []
    };

    public dataSource: TypesEffects[] = [];
    public displayColumns: string[] = ['multiplier', 'types'];
    public displayColumnNames: any;

    constructor() {
        this.displayColumnNames = { multiplier: 'Multiplier', types: 'Types' };
    }

    ngOnInit(): void {
        this.prepareDataSouce();
    }

    private prepareDataSouce(): void {
        this.dataSource.push({ multiplier: 4, types: this.pokemonDefensiveCharacteristics.quadruple });
        this.dataSource.push({ multiplier: 2, types: this.pokemonDefensiveCharacteristics.double });
        this.dataSource.push({ multiplier: 1, types: this.pokemonDefensiveCharacteristics.neutral });
        this.dataSource.push({ multiplier: 0.5, types: this.pokemonDefensiveCharacteristics.half });
        this.dataSource.push({ multiplier: 0.25, types: this.pokemonDefensiveCharacteristics.quarter });
        this.dataSource.push({ multiplier: 0, types: this.pokemonDefensiveCharacteristics.no });
    }
}

