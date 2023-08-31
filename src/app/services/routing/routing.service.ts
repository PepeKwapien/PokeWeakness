import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon/pokemon.service';
import { Subscription, distinctUntilChanged, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutingService implements OnDestroy {
  private _pokemonNameSubscription$: Subscription;

  constructor(pokemonService: PokemonService, router: Router) {
    this._pokemonNameSubscription$ = pokemonService.pokemonNameSubject$
      .pipe(
        map((name) => name.trim()),
        distinctUntilChanged(),
        filter((name) => name.length !== 0)
      )
      .subscribe((name) => router.navigate([`/${name}`]));
  }
  ngOnDestroy(): void {
    this._pokemonNameSubscription$.unsubscribe();
  }
}
