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
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnDestroy {
  private _searchFormGroup: FormGroup;
  private _subscriptions: (Subscription | undefined)[] = [];

  constructor(private http: HttpClient, formBuilder: FormBuilder) {
    this._searchFormGroup = formBuilder.group({ against: '' });

    this._subscriptions.push(
      this._searchFormGroup
        .get('against')
        ?.valueChanges.pipe(
          map((phrase) => phrase.trim()),
          debounceTime(500),
          distinctUntilChanged(),
          filter((phrase) => phrase.length !== 0),
          switchMap((phrase) => this.getSearchSuggestions(phrase))
        )
        .subscribe((value) => console.log(value))
    );
  }

  public get searchFormGroup(): FormGroup {
    return this._searchFormGroup;
  }

  public getSearchSuggestions(pokemonName: string) {
    return this.http.get(`https://localhost:7237/pokemon/${pokemonName}`);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
