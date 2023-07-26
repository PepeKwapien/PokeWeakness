import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
  Subscription,
  switchMap,
  Subject,
  Observable,
} from 'rxjs';
import { PokemonSearchOption } from '../interfaces/pokemonSearchOption.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnDestroy {
  private _searchFormGroup: FormGroup;
  private _subscriptions: (Subscription | undefined)[] = [];
  private _againstSubject: Subject<PokemonSearchOption[]>;

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    this._againstSubject = new Subject();
    this._searchFormGroup = formBuilder.group({ against: '' });

    this._subscriptions.push(
      this._searchFormGroup
        .get('against')
        ?.valueChanges.pipe(
          map((phrase) => phrase.trim()),
          debounceTime(300),
          distinctUntilChanged(),
          filter((phrase) => phrase.length !== 0),
          switchMap((phrase) => this.getSearchSuggestions(phrase))
        )
        .subscribe((value) => this._againstSubject.next(value))
    );
  }

  public get searchFormGroup(): FormGroup {
    return this._searchFormGroup;
  }

  public get againstSubject(): Observable<PokemonSearchOption[]> {
    return this._againstSubject;
  }

  public getSearchSuggestions(
    pokemonName: string
  ): Observable<PokemonSearchOption[]> {
    return this.http.get<PokemonSearchOption[]>(
      `https://localhost:7237/pokemon/${pokemonName}`
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
