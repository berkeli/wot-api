import mongoose from 'mongoose';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import { EUClan, NAClan, ASIAClan, RUClan } from './clan';
import Tank from './tank';
import { EUTankStatistic, RUTankStatistic, NATankStatistic, ASIATankStatistic } from './tankstatistic';

@ObjectType()
class HistoricalData {
  @Field(() => String, { nullable: true })
    date: Date;

  @Field(() => Int, { nullable: true })
    global_rating: number;

  @Field(() => Int, { nullable: true })
    battles: number;

  @Field(() => Int, { nullable: true })
    wins: number;

  @Field(() => Int, { nullable: true })
    wn8: number;

  @Field(() => Int, { nullable: true })
    exp: number;

  @Field(() => Int, { nullable: true })
    moeOne: number;

  @Field(() => Int, { nullable: true })
    moeTwo: number;

  @Field(() => Int, { nullable: true })
    moeThree: number;

  @Field(() => Int, { nullable: true })
    tier: number;
}

// Create a class for Player information
@ObjectType()
class Player {
  @Field(() => ID)
  @prop({ required: true })
    _id: number;

  @Field(() => Int, { nullable: true })
  @prop({ ref: () => Tank })
    max_frags_tank_id: Ref<Tank>;

  @Field(() => Int, { nullable: true })
    spotted: number;

  @Field(() => Int, { nullable: true })
    max_xp: number;

  @Field(() => Int, { nullable: true })
    avg_damage_blocked: number;

  @Field(() => Int, { nullable: true })
    capture_points: number;

  @Field(() => Int, { nullable: true })
    survived_battles: number;

  @Field(() => Int, { nullable: true })
    dropped_capture_points: number;

  @Field(() => Int, { nullable: true })
    hits_percents: number;

  @Field(() => Int, { nullable: true })
    draws: number;

  @Field(() => Int, { nullable: true })
    tanking_factor: number;

  @Field(() => Int, { nullable: true })
    battles: number;

  @Field(() => Int, { nullable: true })
    avg_damage_assisted: number;

  @Field(() => Int, { nullable: true })
    frags: number;

  @Field(() => Int, { nullable: true })
    avg_damage_assisted_radio: number;

  @Field(() => Tank)
  @prop({ ref: () => Tank })
    max_xp_tank_id: Ref<Tank>;

  @Field(() => Tank)
  @prop({ ref: () => Tank })
    max_damage_tank_id: Ref<Tank>;

  @Field(() => Int, { nullable: true })
    max_damage: number;

  @Field(() => Int, { nullable: true })
    battle_avg_xp: number;

  @Field(() => Int, { nullable: true })
    wins: number;

  @Field(() => Int, { nullable: true })
    losses: number;

  @Field(() => Int, { nullable: true })
    damage_dealt: number;

  @Field(() => Int, { nullable: true })
    max_frags: number;

  @Field(() => Int, { nullable: true })
    avg_damage_assisted_track: number;

  @Field(() => Int, { nullable: true })
    trees_cut: number;

  @Field(() => String, { nullable: true })
    last_battle_time: Date;

  @Field(() => String, { nullable: true })
    created_at: Date;

  @Field(() => Int, { nullable: true })
    global_rating: number;

  @Field(() => String)
    nickname: string;

  @Field(() => Int, { nullable: true })
    tier: number;

  @Field(() => String, { nullable: true })
    date_updated: Date;

  @Field(() => String, { nullable: true })
    date_updated_tdata: Date;

  @Field(() => Boolean, { nullable: true })
    tank_data_needs_update: boolean;

  @Field(() => Int, { nullable: true })
    moeOne: number;

  @Field(() => Int, { nullable: true })
    moeTwo: number;

  @Field(() => Int, { nullable: true })
    moeThree: number;

  @Field(() => Int, { nullable: true })
    wn8: number;

  @Field(() => Int, { nullable: true })
    visits: number;

  @Field(() => Boolean, { nullable: true })
    isDeleted: boolean;

  @Field(() => [HistoricalData], { nullable: true })
    historical_data: mongoose.Types.Array<HistoricalData>;
}

@ObjectType()
export class EUPlayer extends Player {
  @Field(() => EUClan, { nullable: true })
  @prop({ ref: () => EUClan })
    clan_id: Ref<EUClan>;

  @Field(() => EUTankStatistic, { nullable: true })
  @prop({ ref: () => EUTankStatistic })
    tank_stats: Ref<EUTankStatistic>;
}

@ObjectType()
export class RUPlayer extends Player {
  @Field(() => RUClan, { nullable: true })
  @prop({ ref: () => RUClan })
    clan_id: Ref<RUClan>;

  @Field(() => RUTankStatistic, { nullable: true })
  @prop({ ref: () => RUTankStatistic })
    tank_stats: Ref<RUTankStatistic>;
}

@ObjectType()
export class NAPlayer extends Player {
  @Field(() => NAClan, { nullable: true })
  @prop({ ref: () => NAClan })
    clan_id: Ref<NAClan>;

  @Field(() => NATankStatistic, { nullable: true })
  @prop({ ref: () => NATankStatistic })
    tank_stats: Ref<NATankStatistic>;
}

@ObjectType()
export class ASIAPlayer extends Player {
  @Field(() => ASIAClan, { nullable: true })
  @prop({ ref: () => ASIAClan })
    clan_id: Ref<ASIAClan>;

  @Field(() => ASIATankStatistic, { nullable: true })
  @prop({ ref: () => ASIATankStatistic })
    tank_stats: Ref<ASIATankStatistic>;
}
