import { Ability } from './ability.interface';
import { PokemonDefensiveCharacteristics } from './pokemonDefensiveCharacteristics.interface';
import { PokemonTypeCharacteristics } from './pokemonTypeCharacteristics.interface';

export interface PokemonGeneralInformation {
    name: string;
    image: string;
    number?: number;
    hp: number;
    attack: number;
    specialAttack: number;
    defense: number;
    specialDefense: number;
    speed: number;
    abilities: Ability[];
    defensiveRelations: PokemonDefensiveCharacteristics;
    primaryType: PokemonTypeCharacteristics;
    secondaryType?: PokemonTypeCharacteristics;
}
