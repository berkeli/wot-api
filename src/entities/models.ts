import { EUGameSession, NAGameSession, RUGameSession, ASIAGameSession } from './gamesession';
import { getModelForClass } from '@typegoose/typegoose';
import { EUTankStatistic, NATankStatistic, ASIATankStatistic, RUTankStatistic } from './tankstatistic';
import { ASIAClan, EUClan, NAClan, RUClan } from './clan';
import { EUPlayer, NAPlayer, RUPlayer, ASIAPlayer } from 'src/entities/player';
import Tank from 'src/entities/tank';

export const Player = {
    eu: getModelForClass<typeof EUPlayer>(EUPlayer),
    na: getModelForClass<typeof NAPlayer>(NAPlayer),
    ru: getModelForClass<typeof RUPlayer>(RUPlayer),
    asia: getModelForClass<typeof ASIAPlayer>(ASIAPlayer),
}

export const Clan = {
    eu: getModelForClass<typeof EUClan>(EUClan),
    na: getModelForClass<typeof RUClan>(RUClan),
    ru: getModelForClass<typeof NAClan>(NAClan),
    asia: getModelForClass<typeof ASIAClan>(ASIAClan),
}

export const TankData = getModelForClass<typeof Tank>(Tank);

export const TankStatistic = {
    eu: getModelForClass<typeof EUTankStatistic>(EUTankStatistic),
    na: getModelForClass<typeof RUTankStatistic>(RUTankStatistic),
    ru: getModelForClass<typeof NATankStatistic>(NATankStatistic),
    asia: getModelForClass<typeof ASIATankStatistic>(ASIATankStatistic),
}

export const GameSession = {
    eu: getModelForClass <typeof EUGameSession>(EUGameSession),
    na: getModelForClass <typeof NAGameSession>(NAGameSession),
    ru: getModelForClass <typeof RUGameSession>(RUGameSession),
    asia: getModelForClass <typeof ASIAGameSession>(ASIAGameSession),
}