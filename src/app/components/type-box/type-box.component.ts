import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PokemonType } from 'src/app/interfaces/pokemonType.interface';

@Component({
    selector: 'app-type-box',
    templateUrl: './type-box.component.html',
    styleUrls: ['./type-box.component.scss']
})
export class TypeBoxComponent {
    @Input() primaryType: PokemonType = { name: 'Death', color: 'black' };
    @Input() secondaryType?: PokemonType;
}
