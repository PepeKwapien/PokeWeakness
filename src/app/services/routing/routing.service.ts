import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { Subscription, distinctUntilChanged, filter, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoutingService {
    constructor(private router: Router) {}

    public navigateToPokemonPage(pokemonName: string) {
        this.router.navigate([`/${pokemonName}`]);
    }

    public navigateToNotFound() {
        this.router.navigate(['/missingno']);
    }
}
