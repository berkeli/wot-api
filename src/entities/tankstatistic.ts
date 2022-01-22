import mongoose from 'mongoose';
import { Field, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import { RUPlayer, ASIAPlayer, EUPlayer, NAPlayer } from './player';
import Tank from './tank';

// Create an interface for tank information
@ObjectType()
class TankAchievements {
    @Field(() => Int, { nullable: true })
      shootToKill: number;

    @Field(() => Int, { nullable: true })
      aimer: number;

    @Field(() => Int, { nullable: true })
      fighter: number;

    @Field(() => Int, { nullable: true })
      medalLavrinenko: number;

    @Field(() => Int, { nullable: true })
      armorPiercer: number;

    @Field(() => Int, { nullable: true })
      medalPoppel: number;

    @Field(() => Int, { nullable: true })
      kamikaze: number;

    @Field(() => Int, { nullable: true })
      supporter: number;

    @Field(() => Int, { nullable: true })
      medalKay: number;

    @Field(() => Int, { nullable: true })
      medalAbrams: number;

    @Field(() => Int, { nullable: true })
      medalCarius: number;

    @Field(() => Int, { nullable: true })
      duelist: number;

    @Field(() => Int, { nullable: true })
      markOfMastery: number;

    @Field(() => Int, { nullable: true })
      handOfDeath: number;

    @Field(() => Int, { nullable: true })
      mainGun: number;

    @Field(() => Int, { nullable: true })
      titleSniper: number;

    @Field(() => Int, { nullable: true })
      charmed: number;

    @Field(() => Int, { nullable: true })
      medalKnispel: number;

    @Field(() => Int, { nullable: true })
      bonecrusher: number;

    @Field(() => Int, { nullable: true })
      defender: number
}

@ObjectType()
class SingleTankStat {
    @Field(() => Tank)
    @prop({ ref: () => Tank })
      tank_id: Ref<Tank>;

    @Field(() => Int, { nullable: true })
      mark_of_mastery: number;

    @Field(() => Int, { nullable: true })
      max_frags: number;

    @Field(() => Int, { nullable: true })
      max_xp: number;

    @Field(() => Int, { nullable: true })
      spotted: number;

    @Field(() => Int, { nullable: true })
      hits: number;

    @Field(() => Int, { nullable: true })
      losses: number;

    @Field(() => Int, { nullable: true })
      draws: number;

    @Field(() => Int, { nullable: true })
      wins: number;

    @Field(() => Int, { nullable: true })
      avg_damage_blocked: number;

    @Field(() => Int, { nullable: true })
      hits_percents: number;

    @Field(() => Int, { nullable: true })
      battles: number;

    @Field(() => Int, { nullable: true })
      damage_dealt: number;

    @Field(() => Int, { nullable: true })
      capture_points: number;

    @Field(() => Int, { nullable: true })
      damage_received: number;

    @Field(() => Int, { nullable: true })
      shots: number;

    @Field(() => Int, { nullable: true })
      frags: number;

    @Field(() => Int, { nullable: true })
      xp: number;

    @Field(() => Int, { nullable: true })
      survived_battles: number;

    @Field(() => Int, { nullable: true })
      dropped_capture_points: number;

    @Field(() => Int, { nullable: true })
      wn8: number;

    @Field(() => TankAchievements, { nullable: true })
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
