import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnDestroy {
    private _subscription: Subscription;

    constructor(public searchService: SearchService, public pokemonService: PokemonService) {
        this._subscription = searchService.pokemonFormControl.valueChanges.subscribe(() =>
            this.searchService.createSearchPhraseSubscription()
        );
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    public get againstFormControl(): FormControl {
        return this.searchService.pokemonFormControl;
    }

    public notifyWithPokemonName(name: string) {
        this.pokemonService.pokemonNameSubject$.next(name);
        this.pokemonService.createPokemonGeneralSubscription();
    }
}
