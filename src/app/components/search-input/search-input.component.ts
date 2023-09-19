import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonSearchOption } from 'src/app/interfaces/pokemonSearchOption.interface';

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
    animations: [
        trigger('visibleHidden', [
            transition(':leave', [style({ opacity: 1 }), animate('400ms 0ms ease-in', style({ opacity: 0 }))]),
            transition(':enter', [style({ opacity: 0 }), animate('400ms 0ms ease-in', style({ opacity: 1 }))])
        ])
    ]
})
export class SearchInputComponent {
    @Input() label: string = 'Search Pokemon';
    @Input() inputControl: FormControl = new FormControl('');
    @Input() searchOptions: PokemonSearchOption[] | null = null;
    @Input() formLoading: boolean = false;
    @Output() pokemonName: EventEmitter<string> = new EventEmitter();
}
