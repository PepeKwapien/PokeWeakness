import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
    public notFounPokemonName: string = '';

    constructor(searchService: SearchService) {
        this.notFounPokemonName = searchService.pokemonFormControlValue;
    }
}

