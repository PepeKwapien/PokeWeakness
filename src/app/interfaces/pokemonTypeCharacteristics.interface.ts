import { PokemonType } from './pokemonType.interface';

export interface PokemonTypeCharacteristics {
  name: string;
  color: string;
  NoTo: PokemonType[];
  NoFrom: PokemonType[];
  HalfTo: PokemonType[];
  HalfFrom: PokemonType[];
  DoubleTo: PokemonType[];
  DoubleFrom: PokemonType[];
}
