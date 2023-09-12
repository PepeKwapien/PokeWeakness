import { Component, Input, OnInit } from '@angular/core';
import { statTableFields } from 'src/app/constants/table-fields/stat-table-fields.const';
import { PokemonStats } from 'src/app/enums/pokemon-stats.enum';
import { DisplayColumnNameType } from 'src/app/helpers/display-column-names-type.helper';
import { BaseStat } from 'src/app/interfaces/base-stat.interface';
import { PokemonGeneralInformation } from 'src/app/interfaces/pokemonGeneralInformation.interface';

@Component({
    selector: 'app-stats-table',
    templateUrl: './stats-table.component.html',
    styleUrls: ['./stats-table.component.scss']
})
export class StatsTableComponent implements OnInit {
    @Input() pokemonGeneralInformation: PokemonGeneralInformation = {
        name: '',
        image: '',
        number: 0,
        hp: 0,
        attack: 0,
        specialAttack: 0,
        defense: 0,
        specialDefense: 0,
        speed: 0,
        abilities: [],
        defensiveRelations: {
            no: [],
            quarter: [],
            half: [],
            neutral: [],
            double: [],
            quadruple: []
        },
        primaryType: {
            name: '',
            color: '',
            NoTo: [],
            NoFrom: [],
            HalfTo: [],
            HalfFrom: [],
            DoubleTo: [],
            DoubleFrom: []
        },
        secondaryType: undefined
    };

    public dataSource: BaseStat[] = [];
    public displayColumns: string[] = statTableFields;
    public displayColumnNames: DisplayColumnNameType<typeof this.displayColumns>;

    constructor() {
        this.displayColumnNames = { stat: 'Stat', value: 'Value' };
    }

    ngOnInit(): void {
        this.prepareDataSouce();
    }

    private prepareDataSouce(): void {
        this.dataSource.push({ stat: PokemonStats.hp, value: this.pokemonGeneralInformation.hp });
        this.dataSource.push({ stat: PokemonStats.attack, value: this.pokemonGeneralInformation.attack });
        this.dataSource.push({ stat: PokemonStats.defense, value: this.pokemonGeneralInformation.defense });
        this.dataSource.push({ stat: PokemonStats.specialAttack, value: this.pokemonGeneralInformation.specialAttack });
        this.dataSource.push({ stat: PokemonStats.specialDefense, value: this.pokemonGeneralInformation.specialDefense });
        this.dataSource.push({ stat: PokemonStats.speed, value: this.pokemonGeneralInformation.speed });
    }
}

