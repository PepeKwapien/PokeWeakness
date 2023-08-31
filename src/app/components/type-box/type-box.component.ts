import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PokemonType } from 'src/app/interfaces/pokemonType.interface';

@Component({
  selector: 'app-type-box',
  templateUrl: './type-box.component.html',
  styleUrls: ['./type-box.component.scss'],
})
export class TypeBoxComponent {
  @Input() primaryType: PokemonType = { name: 'Grass', color: '#7AC74C' };
  @Input() secondaryType?: PokemonType;
}
