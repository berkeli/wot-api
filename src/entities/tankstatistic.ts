import mongoose from 'mongoose';
import { Field, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import {
  RUPlayer, ASIAPlayer, EUPlayer, NAPlayer,
} from './player';
import Tank from './tank';

// Create an interface for tank information
@ObjectType()
class TankAchievements {
    @Field(() => Int)
      shootToKill: number;

    @Field(() => Int)
      aimer: number;

    @Field(() => Int)
      fighter: number;

    @Field(() => Int)
      medalLavrinenko: number;

    @Field(() => Int)
      armorPiercer: number;

    @Field(() => Int)
      medalPoppel: number;

    @Field(() => Int)
      kamikaze: number;

    @Field(() => Int)
      supporter: number;

    @Field(() => Int)
      medalKay: number;

    @Field(() => Int)
      medalAbrams: number;

    @Field(() => Int)
      medalCarius: number;

    @Field(() => Int)
      duelist: number;

    @Field(() => Int)
      markOfMastery: number;

    @Field(() => Int)
      handOfDeath: number;

    @Field(() => Int)
      mainGun: number;

    @Field(() => Int)
      titleSniper: number;

    @Field(() => Int)
      charmed: number;

    @Field(() => Int)
      medalKnispel: number;

    @Field(() => Int)
      bonecrusher: number;

    @Field(() => Int)
      defender: number
}

@ObjectType()
class SingleTankStat {
    @Field(() => Tank)
    @prop({ ref: () => Tank })
      tank_id: Ref<Tank>;

    @Field(() => Int)
      mark_of_mastery: number;

    @Field(() => Int)
      max_frags: number;

    @Field(() => Int)
      max_xp: number;

    @Field(() => Int)
      spotted: number;

    @Field(() => Int)
      hits: number;

    @Field(() => Int)
      losses: number;

    @Field(() => Int)
      draws: number;

    @Field(() => Int)
      wins: number;

    @Field(() => Int)
      avg_damage_blocked: number;

    @Field(() => Int)
      hits_percents: number;

    @Field(() => Int)
      battles: number;

    @Field(() => Int)
      damage_dealt: number;

    @Field(() => Int)
      capture_points: number;

    @Field(() => Int)
      damage_received: number;

    @Field(() => Int)
      shots: number;

    @Field(() => Int)
      frags: number;

    @Field(() => Int)
      xp: number;

    @Field(() => Int)
      survived_battles: number;

    @Field(() => Int)
      dropped_capture_points: number;

    @Field(() => Int)
      wn8: number;

    @Field(() => TankAchievements)
      achievements: TankAchievements;
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
