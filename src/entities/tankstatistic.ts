import { RUPlayer, ASIAPlayer, EUPlayer, NAPlayer } from 'src/entities/player';
import mongoose from 'mongoose';
import Tank from 'src/entities/tank';
import { Field, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';

// Create an interface for tank information
@ObjectType()
class Tank_Achievements {
    @Field(() => Number)
    shootToKill: number;

    @Field(() => Number)
    aimer: number;

    @Field(() => Number)
    fighter: number;

    @Field(() => Number)
    medalLavrinenko: number;

    @Field(() => Number)
    armorPiercer: number;

    @Field(() => Number)
    medalPoppel: number;

    @Field(() => Number)
    kamikaze: number;

    @Field(() => Number)
    supporter: number;

    @Field(() => Number)
    medalKay: number;

    @Field(() => Number)
    medalAbrams: number;

    @Field(() => Number)
    medalCarius: number;

    @Field(() => Number)
    duelist: number;

    @Field(() => Number)
    markOfMastery: number;

    @Field(() => Number)
    handOfDeath: number;

    @Field(() => Number)
    mainGun: number;

    @Field(() => Number)
    titleSniper: number;

    @Field(() => Number)
    charmed: number;

    @Field(() => Number)
    medalKnispel: number;

    @Field(() => Number)
    bonecrusher: number;

    @Field(() => Number)
    defender: number
}

@ObjectType()
class SingleTankStat {
    @Field(() => Tank)
    @prop({ ref: () => Tank })
    tank_id: Ref<Tank>;

    @Field(() => Number)
    mark_of_mastery: number;

    @Field(() => Number)
    max_frags: number;

    @Field(() => Number)
    max_xp: number;

    @Field(() => Number)
    spotted: number;

    @Field(() => Number)
    hits: number;

    @Field(() => Number)
    losses: number;

    @Field(() => Number)
    draws: number;

    @Field(() => Number)
    wins: number;

    @Field(() => Number)
    avg_damage_blocked: number;

    @Field(() => Number)
    hits_percents: number;

    @Field(() => Number)
    battles: number;

    @Field(() => Number)
    damage_dealt: number;

    @Field(() => Number)
    capture_points: number;

    @Field(() => Number)
    damage_received: number;

    @Field(() => Number)
    shots: number;

    @Field(() => Number)
    frags: number;

    @Field(() => Number)
    xp: number;

    @Field(() => Number)
    survived_battles: number;

    @Field(() => Number)
    dropped_capture_points: number;

    @Field(() => Number)
    wn8: number;

    @Field(() => Tank_Achievements)
    achievements: Tank_Achievements;
}

@ObjectType()
export class EUTankStatistic {
    @Field(() => EUPlayer)
    @prop({ ref: () => EUPlayer })
    _id: Ref<EUPlayer>;

    @Field(() => [SingleTankStat])
    tank_stats: mongoose.Types.Array<SingleTankStat>
}

@ObjectType()
export class NATankStatistic {
    @Field(() => NAPlayer)
    @prop({ ref: () => NAPlayer })
    _id: Ref<NAPlayer>;

    @Field(() => [SingleTankStat])
    tank_stats: mongoose.Types.Array<SingleTankStat>
}

@ObjectType()
export class RUTankStatistic {
    @Field(() => RUPlayer)
    @prop({ ref: () => RUPlayer })
    _id: Ref<RUPlayer>;

    @Field(() => [SingleTankStat])
    tank_stats: mongoose.Types.Array<SingleTankStat>
}

@ObjectType()
export class ASIATankStatistic {
    @Field(() => ASIAPlayer)
    @prop({ ref: () => ASIAPlayer })
    _id: Ref<ASIAPlayer>;

    @Field(() => [SingleTankStat])
    tank_stats: mongoose.Types.Array<SingleTankStat>
}
