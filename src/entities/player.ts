import mongoose from 'mongoose';
import {
  Field, ID, Int, ObjectType,
} from 'type-graphql';
import { prop, Ref } from 'typegoose';
import {
  EUClan, NAClan, ASIAClan, RUClan,
} from './clan';
import Tank from './tank';
import {
  EUTankStatistic, RUTankStatistic, NATankStatistic, ASIATankStatistic,
} from './tankstatistic';

@ObjectType()
class HistoricalData {
  @Field(() => String)
    date: Date;

  @Field(() => Int)
    global_rating: number;

  @Field(() => Int)
    battles: number;

  @Field(() => Int)
    wins: number;

  @Field(() => Int)
    wn8: number;

  @Field(() => Int)
    exp: number;

  @Field(() => Int)
    moeOne: number;

  @Field(() => Int)
    moeTwo: number;

  @Field(() => Int)
    moeThree: number;

  @Field(() => Int)
    tier: number;
}

// Create a class for Player information
@ObjectType()
class Player {
  @Field(() => ID)
  @prop({ required: true })
    _id: number;

  @Field(() => Int)
  @prop({ ref: () => Tank })
    max_frags_tank_id: Ref<Tank>;

  @Field(() => Int)
    spotted: number;

  @Field(() => Int)
    max_xp: number;

  @Field(() => Int)
    avg_damage_blocked: number;

  @Field(() => Int)
    capture_points: number;

  @Field(() => Int)
    survived_battles: number;

  @Field(() => Int)
    dropped_capture_points: number;

  @Field(() => Int)
    hits_percents: number;

  @Field(() => Int)
    draws: number;

  @Field(() => Int)
    tanking_factor: number;

  @Field(() => Int)
    battles: number;

  @Field(() => Int)
    avg_damage_assisted: number;

  @Field(() => Int)
    frags: number;

  @Field(() => Int)
    avg_damage_assisted_radio: number;

  @Field(() => Tank)
  @prop({ ref: () => Tank })
    max_xp_tank_id: Ref<Tank>;

  @Field(() => Tank)
  @prop({ ref: () => Tank })
    max_damage_tank_id: Ref<Tank>;

  @Field(() => Int)
    max_damage: number;

  @Field(() => Int)
    battle_avg_xp: number;

  @Field(() => Int)
    wins: number;

  @Field(() => Int)
    losses: number;

  @Field(() => Int)
    damage_dealt: number;

  @Field(() => Int)
    max_frags: number;

  @Field(() => Int)
    avg_damage_assisted_track: number;

  @Field(() => Int)
    trees_cut: number;

  @Field(() => String)
    last_battle_time: Date;

  @Field(() => String)
    created_at: Date;

  @Field(() => Int)
    global_rating: number;

  @Field(() => String)
    nickname: string;

  @Field(() => Int)
    tier: number;

  @Field(() => String)
    date_updated: Date;

  @Field(() => String)
    date_updated_tdata: Date;

  @Field(() => Boolean)
    tank_data_needs_update: boolean;

  @Field(() => Int)
    moeOne: number;

  @Field(() => Int)
    moeTwo: number;

  @Field(() => Int)
    moeThree: number;

  @Field(() => Int)
    wn8: number;

  @Field(() => Int)
    visits: number;

  @Field(() => Boolean)
    isDeleted: boolean;

  @Field(() => [HistoricalData])
    historical_data: mongoose.Types.Array<HistoricalData>;
}

@ObjectType()
export class EUPlayer extends Player {
  @Field(() => EUClan)
  @prop({ ref: () => EUClan })
    clan_id: Ref<EUClan>;

  @Field(() => EUTankStatistic)
  @prop({ ref: () => EUTankStatistic })
    tank_stats: Ref<EUTankStatistic>;
}

@ObjectType()
export class RUPlayer extends Player {
  @Field(() => RUClan)
  @prop({ ref: () => RUClan })
    clan_id: Ref<RUClan>;

  @Field(() => RUTankStatistic)
  @prop({ ref: () => RUTankStatistic })
    tank_stats: Ref<RUTankStatistic>;
}

@ObjectType()
export class NAPlayer extends Player {
  @Field(() => NAClan)
  @prop({ ref: () => NAClan })
    clan_id: Ref<NAClan>;

  @Field(() => NATankStatistic)
  @prop({ ref: () => NATankStatistic })
    tank_stats: Ref<NATankStatistic>;
}

@ObjectType()
export class ASIAPlayer extends Player {
  @Field(() => ASIAClan)
  @prop({ ref: () => ASIAClan })
    clan_id: Ref<ASIAClan>;

  @Field(() => ASIATankStatistic)
  @prop({ ref: () => ASIATankStatistic })
    tank_stats: Ref<ASIATankStatistic>;
}
