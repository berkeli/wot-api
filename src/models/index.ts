import { getModelForClass } from '@typegoose/typegoose';
import { EUGameSession, NAGameSession, RUGameSession, ASIAGameSession } from '../entities/gamesession';
import { EUTankStatistic, NATankStatistic, ASIATankStatistic, RUTankStatistic } from '../entities/tankstatistic';
import { ASIAClan, EUClan, NAClan, RUClan } from '../entities/clan';
import { EUPlayer, NAPlayer, RUPlayer, ASIAPlayer } from '../entities/player';
import Tank from '../entities/tank';
import wnepxval from '../entities/wn8expvalue';

export const Player = { eu: getModelForClass<typeof EUPlayer>(EUPlayer),
  na: getModelForClass<typeof NAPlayer>(NAPlayer),
  ru: getModelForClass<typeof RUPlayer>(RUPlayer),
  asia: getModelForClass<typeof ASIAPlayer>(ASIAPlayer) }

export const Clan = { eu: getModelForClass<typeof EUClan>(EUClan),
  na: getModelForClass<typeof RUClan>(RUClan),
  ru: getModelForClass<typeof NAClan>(NAClan),
  asia: getModelForClass<typeof ASIAClan>(ASIAClan) }

export const TankData = getModelForClass<typeof Tank>(Tank);
export const WN8ExpValue = getModelForClass<typeof wnepxval>(wnepxval);

export const TankStatistic = { eu: getModelForClass<typeof EUTankStatistic>(EUTankStatistic),
  na: getModelForClass<typeof RUTankStatistic>(RUTankStatistic),
  ru: getModelForClass<typeof NATankStatistic>(NATankStatistic),
  asia: getModelForClass<typeof ASIATankStatistic>(ASIATankStatistic) }

export const GameSession = { eu: getModelForClass<typeof EUGameSession>(EUGameSession),
  na: getModelForClass<typeof NAGameSession>(NAGameSession),
  ru: getModelForClass<typeof RUGameSession>(RUGameSession),
  asia: getModelForClass<typeof ASIAGameSession>(ASIAGameSession) }
