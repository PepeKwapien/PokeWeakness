import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
    selector: 'app-pokemon-page',
    templateUrl: './pokemon-page.component.html',
    styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnDestroy {
    public effectivenessTitle = 'Effectiveness';
    public effectivenessDescription = 'Effects types have against it';
    public abilityTitle = 'Abilities';
    public abilityDescription = 'They can have side effects on your attacks!';
    public statTitle = 'Stats';
    public statDescription = 'Base stats of the Pokemon';

    private sub: Subscription;

    constructor(public pokemonService: PokemonService, private activatedRoute: ActivatedRoute, searchService: SearchService) {
        this.sub = this.activatedRoute.params.subscribe((params) => {
            const pokemonName: string = params['pokemon'];
            pokemonService.pokemonNameSubject$.next(pokemonName);
            searchService.pokemonFormControl.patchValue(pokemonName);
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
