import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
    map,
    debounceTime,
    distinctUntilChanged,
    filter,
    Subscription,
    switchMap,
    Subject,
    Observable,
    BehaviorSubject
} from 'rxjs';
import { PokemonSearchOption } from '../../interfaces/pokemonSearchOption.interface';
import { environment } from 'src/environments/environment.development';
import { shouldSubscriptionBeRereated } from 'src/app/helpers/subscription-creation-validator.helper';

@Injectable({
    providedIn: 'root'
})
export class SearchService implements OnDestroy {
    private _searchFormGroup: FormGroup;
    private _searchsubscription$!: Subscription;
    private _searchedPokemonsSubject$: Subject<PokemonSearchOption[]>;
    private _searchRequestProcessing$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private http: HttpClient, formBuilder: FormBuilder) {
        this._searchedPokemonsSubject$ = new Subject();
        this._searchFormGroup = formBuilder.group({ pokemon: '' });
        this.createSearchPhraseSubscription();
    }

    public get pokemonFormControl(): FormControl {
        return this._searchFormGroup.get('pokemon')! as FormControl;
    }

    public get pokemonFormControlValue(): string {
        return this._searchFormGroup.get('pokemon')!.value;
    }

    public get searchedPokemonSubject(): Observable<PokemonSearchOption[]> {
        return this._searchedPokemonsSubject$;
    }

    public get searchRequestProcessing(): Observable<boolean> {
        return this._searchRequestProcessing$;
    }

    public getSearchSuggestions(pokemonName: string): Observable<PokemonSearchOption[]> {
        return this.http.get<PokemonSearchOption[]>(`${environment.pokemonApiUrl}/pokemon/search/${pokemonName}`);
    }

    public resetSuggestions() {
        this._searchedPokemonsSubject$.complete();
        this._searchedPokemonsSubject$ = new Subject();
    }

    ngOnDestroy(): void {
        this._searchsubscription$.unsubscribe();
    }

    public createSearchPhraseSubscription() {
        if (!shouldSubscriptionBeRereated(this._searchsubscription$)) {
            return;
        }

        this._searchsubscription$ = this.pokemonFormControl!.valueChanges.pipe(
            map((phrase) => phrase.trim()),
            debounceTime(300),
            distinctUntilChanged(),
            filter((phrase) => phrase.length !== 0),
            switchMap((phrase) => {
                this._searchRequestProcessing$.next(true);
                return this.getSearchSuggestions(phrase);
            })
        ).subscribe({
            next: (value) => {
                this._searchRequestProcessing$.next(false);
                this._searchedPokemonsSubject$.next(value);
            },
            error: () => {
                this._searchRequestProcessing$.next(false);
                this._searchedPokemonsSubject$.next([
                    { number: 0, image: 'assets/images/missingno.webp', name: 'There was an error' }
                ]);
            }
        });

        // This automatically trigerrs the pipe in case of an recreating when experiencing an error
        // Without it the subscription would fire only after typing second character after an error
        this.pokemonFormControl.patchValue(this.pokemonFormControlValue);
    }
}
