import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { first } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
    selector: 'app-pokemon-page',
    templateUrl: './pokemon-page.component.html',
    styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent {
    public effectivenessTitle = 'Effectiveness';
    public effectivenessDescription = 'Effects types have against it';
    public abilityTitle = 'Abilities';
    public abilityDescription = 'They can have side effects on your attacks!';
    public statTitle = 'Stats';
    public statDescription = 'Base stats of the Pokemon';

    constructor(public pokemonService: PokemonService, private activatedRoute: ActivatedRoute, searchService: SearchService) {
        this.activatedRoute.params.pipe(first()).subscribe((params) => {
            const pokemonName: string = params['pokemon'];
            pokemonService.pokemonNameSubject$.next(pokemonName);
            searchService.pokemonFormControl.patchValue(pokemonName);
        });
    }
}
