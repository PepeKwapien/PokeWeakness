import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonSearchOption } from 'src/app/interfaces/pokemonSearchOption.interface';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
    @Input() label: string = 'Search Pokemon';
    @Input() inputControl: FormControl = new FormControl('');
    @Input() searchOptions: PokemonSearchOption[] | null = null;
    @Output() pokemonName: EventEmitter<string> = new EventEmitter();
}
