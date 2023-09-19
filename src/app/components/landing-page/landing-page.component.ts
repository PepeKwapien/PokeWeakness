import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
    animations: [
        trigger('openClosed', [transition(':leave', [animate('500ms 0ms ease-in-out', style({ height: 0 }))])]),
        trigger('visibleHidden', [transition(':enter', [style({ opacity: 0 }), animate('700ms', style({ opacity: 1 }))])])
    ]
})
export class LandingPageComponent {
    constructor(
        public routingService: RoutingService,
        private pokemonService: PokemonService,
        private searchService: SearchService
    ) {}

    public navigateToLandingPage() {
        this.searchService.pokemonFormControl.patchValue('');
        this.searchService.resetSuggestions();
        this.pokemonService.pokemonNameSubject$.next('');
        this.pokemonService.pokemonGeneralInformationSubject$.next(undefined);
        this.routingService.navigateToLandingPage();
    }
}
