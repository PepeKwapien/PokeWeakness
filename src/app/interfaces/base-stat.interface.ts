import { PokemonStats } from '../enums/pokemon-stats.enum';

export interface BaseStat {
    stat: PokemonStats;
    value: number;
}
