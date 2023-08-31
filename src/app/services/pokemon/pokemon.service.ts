import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subscription,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs';
import { PokemonGeneralInformation } from 'src/app/interfaces/pokemonGeneralInformation.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _pokemonNameSubject$: BehaviorSubject<string>;
  private _pokemonGeneralInformation$: Observable<PokemonGeneralInformation>;

  constructor(private http: HttpClient) {
    this._pokemonNameSubject$ = new BehaviorSubject('');

    this._pokemonGeneralInformation$ = this._pokemonNameSubject$.pipe(
      map((name) => name.trim()),
      distinctUntilChanged(),
      filter((name) => name.length !== 0),
      switchMap((name) => this.getPokemonGeneralInformation(name))
    );
  }

  public get pokemonNameSubject$(): BehaviorSubject<string> {
    return this._pokemonNameSubject$;
  }

  public get pokemonGeneralInformation$(): Observable<PokemonGeneralInformation> {
    return this._pokemonGeneralInformation$;
  }

  private getPokemonGeneralInformation(
    name: string
  ): Observable<PokemonGeneralInformation> {
    return this.http.get<PokemonGeneralInformation>(
      `${environment.pokemonApiUrl}/pokemon/general/${name}`
    );
  }
}
