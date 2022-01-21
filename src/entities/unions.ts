import { createUnionType } from 'type-graphql';
import {
  EUGameSession, NAGameSession, RUGameSession, ASIAGameSession,
} from './gamesession';
import {
  EUTankStatistic, NATankStatistic, RUTankStatistic, ASIATankStatistic,
} from './tankstatistic';
import {
  EUClan, NAClan, RUClan, ASIAClan,
} from './clan';
import {
  EUPlayer, NAPlayer, RUPlayer, ASIAPlayer,
} from './player';

export const PlayerUnion = createUnionType({
  name: 'PlayerUnion',
  types: () => [EUPlayer, NAPlayer, RUPlayer, ASIAPlayer] as const,
});

export const ClanUnion = createUnionType({
  name: 'ClanUnion',
  types: () => [EUClan, NAClan, RUClan, ASIAClan] as const,
});

export const TankStatisticUnion = createUnionType({
  name: 'TankStatisticUnion',
  types: () => [EUTankStatistic, NATankStatistic, RUTankStatistic, ASIATankStatistic] as const,
});

export const GameSessionUnion = createUnionType({
  name: 'GameSessionUnion',
  types: () => [EUGameSession, NAGameSession, RUGameSession, ASIAGameSession] as const,
});
