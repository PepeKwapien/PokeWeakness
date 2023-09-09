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
    shareReplay,
    BehaviorSubject
} from 'rxjs';
import { PokemonSearchOption } from '../../interfaces/pokemonSearchOption.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root'
})
export class SearchService implements OnDestroy {
    private _searchFormGroup: FormGroup;
    private _subscriptions: Subscription = new Subscription();
    private _againstSubject: Subject<PokemonSearchOption[]>;
    private _searchRequestProcessing: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private http: HttpClient, formBuilder: FormBuilder) {
        this._againstSubject = new Subject();
        this._searchFormGroup = formBuilder.group({ pokemon: '' });

        this._subscriptions.add(
            this._searchFormGroup
                .get('pokemon')
                ?.valueChanges.pipe(
                    map((phrase) => phrase.trim()),
                    debounceTime(300),
                    distinctUntilChanged(),
                    filter((phrase) => phrase.length !== 0),
                    switchMap((phrase) => {
                        this._searchRequestProcessing.next(true);
                        return this.getSearchSuggestions(phrase);
                    })
                )
                .subscribe((value) => {
                    this._searchRequestProcessing.next(false);
                    this._againstSubject.next(value);
                })
        );
    }

    public get pokemonFormControl(): FormControl {
        return this._searchFormGroup.get('pokemon')! as FormControl;
    }

    public get againstSubject(): Observable<PokemonSearchOption[]> {
        return this._againstSubject;
    }

    public get searchRequestProcessing(): Observable<boolean> {
        return this._searchRequestProcessing;
    }

    public getSearchSuggestions(pokemonName: string): Observable<PokemonSearchOption[]> {
        return this.http.get<PokemonSearchOption[]>(`${environment.pokemonApiUrl}/pokemon/search/${pokemonName}`);
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }
}
