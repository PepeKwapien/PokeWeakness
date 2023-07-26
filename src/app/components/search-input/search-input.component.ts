import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonSearchOption } from 'src/app/interfaces/pokemonSearchOption.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() label: string = 'Pokemon';
  @Input() inputControl: FormControl = new FormControl('');
  @Input() searchOptions: PokemonSearchOption[] | null = [];
}
