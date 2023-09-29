import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import {
    BehaviorSubject,
    EMPTY,
    Observable,
    Subscription,
    catchError,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
    tap
} from 'rxjs';
import { PokemonGeneralInformation } from 'src/app/interfaces/pokemonGeneralInformation.interface';
import { environment } from 'src/environments/environment.development';
import { RoutingService } from '../routing/routing.service';

@Injectable({
    providedIn: 'root'
})
export class PokemonService implements OnDestroy {
    private _pokemonNameSubject$: BehaviorSubject<string>;
    private _pokemonGeneralInformationSubject$: BehaviorSubject<PokemonGeneralInformation | undefined>;
    private _pokemonGeneralInformationSubscription$!: Subscription;

    constructor(private http: HttpClient, private routingService: RoutingService) {
        this._pokemonNameSubject$ = new BehaviorSubject('');
        this._pokemonGeneralInformationSubject$ = new BehaviorSubject<PokemonGeneralInformation | undefined>(undefined);
        this.createPokemonGeneralSubscription();
    }

    ngOnDestroy(): void {
        this._pokemonGeneralInformationSubscription$.unsubscribe();
    }

    public get pokemonNameSubject$(): BehaviorSubject<string> {
        return this._pokemonNameSubject$;
    }

    public get pokemonGeneralInformationSubject$(): BehaviorSubject<PokemonGeneralInformation | undefined> {
        return this._pokemonGeneralInformationSubject$;
    }

    public createPokemonGeneralSubscription(): void {
        if (this._pokemonGeneralInformationSubscription$ !== undefined && !this._pokemonGeneralInformationSubscription$.closed) {
            return;
        }
        if (this._pokemonGeneralInformationSubscription$ !== undefined) {
            this._pokemonGeneralInformationSubscription$.unsubscribe();
        }

        this._pokemonGeneralInformationSubscription$ = this._pokemonNameSubject$
            .pipe(
                map((name) => name.trim()),
                distinctUntilChanged(),
                filter((name) => name.length !== 0),
                switchMap((name) => {
                    this._pokemonGeneralInformationSubject$.next(undefined);
                    this.routingService.navigateToPokemonPage(name);
                    return this.getPokemonGeneralInformation(name);
                })
            )
            .subscribe({
                next: (pokemon) => this._pokemonGeneralInformationSubject$.next(pokemon),
                error: () => this.routingService.navigateToNotFound()
            });
    }

    private getPokemonGeneralInformation(name: string): Observable<PokemonGeneralInformation> {
        return this.http.get<PokemonGeneralInformation>(`${environment.pokemonApiUrl}/pokemon/general/${name}`);
    }
}
