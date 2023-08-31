import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  constructor(
    public searchService: SearchService,
    public pokemonService: PokemonService
  ) {}

  public get againstFormControl(): FormControl {
    return this.searchService.pokemonFormControl;
  }

  public notifyWithPokemonName(name: string) {
    this.pokemonService.pokemonNameSubject$.next(name);
  }
}
