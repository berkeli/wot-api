import mongoose from 'mongoose';
import {EUClan, NAClan, ASIAClan, RUClan} from 'src/entities/clan';
import Tank from 'src/entities/tank';
import { Field, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import { EUTankStatistic, RUTankStatistic, NATankStatistic, ASIATankStatistic } from './tankstatistic';

@ObjectType()
class HistoricalData {
  @Field(()=> Date)
  date: Date;

  @Field(()=> Number)
  global_rating: number;

  @Field(()=> Number)
  battles: number;

  @Field(()=> Number)
  wins: number;

  @Field(()=> Number)
  wn8: number;

  @Field(()=> Number)
  exp: number;

  @Field(()=> Number)
  moeOne: number;

  @Field(()=> Number)
  moeTwo: number;

  @Field(()=> Number)
  moeThree: number;

  @Field(()=> Number)
  tier: number;
}

// Create a class for Player information
@ObjectType()
class Player {
  @Field(()=> Number)
  @prop()
  _id: number;

  @Field(()=> Number)
  @prop({ref: ()=> Tank})
  max_frags_tank_id: Ref<Tank>;

  @Field(()=> Number)
  spotted: number;

  @Field(()=> Number)
  max_xp: number;

  @Field(()=> Number)
  avg_damage_blocked: number;

  @Field(()=> Number)
  capture_points: number;

  @Field(()=> Number)
  survived_battles: number;

  @Field(()=> Number)
  dropped_capture_points: number;

  @Field(()=> Number)
  hits_percents: number;

  @Field(()=> Number)
  draws: number;

  @Field(()=> Number)
  tanking_factor: number;

  @Field(()=> Number)
  battles: number;

  @Field(()=> Number)
  avg_damage_assisted: number;

  @Field(()=> Number)
  frags: number;

  @Field(()=> Number)
  avg_damage_assisted_radio: number;

  @Field(()=> Tank)
  @prop({ ref:()=>Tank })
  max_xp_tank_id: Ref<Tank>;

  @Field(()=> Tank)
  @prop({ ref:()=>Tank })
  max_damage_tank_id: Ref<Tank>;

  @Field(()=> Number)
  max_damage: number;

  @Field(()=> Number)
  battle_avg_xp: number;

  @Field(()=> Number)
  wins: number;

  @Field(()=> Number)
  losses: number;

  @Field(()=> Number)
  damage_dealt: number;

  @Field(()=> Number)
  max_frags: number;

  @Field(()=> Number)
  avg_damage_assisted_track: number;

  @Field(()=> Number)
  trees_cut: number;

  @Field(()=> Date)
  last_battle_time: Date;

  @Field(()=> Date)
  created_at: Date;

  @Field(()=> Number)
  global_rating: number;

  @Field(()=> String)
  nickname: string;

  @Field(()=> Number)
  tier: number;

  @Field(()=> Date)
  date_updated: Date;

  @Field(()=> Date)
  date_updated_tdata: Date;

  @Field(()=> Boolean)
  tank_data_needs_update: boolean;

  @Field(()=> Number)
  moeOne: number;

  @Field(()=> Number)
  moeTwo: number;

  @Field(()=> Number)
  moeThree: number;

  @Field(()=> Number)
  wn8: number;

  @Field(()=> Number)
  visits: number;

  @Field(()=> Boolean)
  isDeleted: boolean;

  @Field(()=> [HistoricalData])
  historical_data: mongoose.Types.Array<HistoricalData>;
}


@ObjectType()
export class EUPlayer extends Player{ 
  @Field(()=> EUClan)
  @prop({ref: ()=> EUClan})
  clan_id: Ref<EUClan>;

  @Field(()=> EUTankStatistic)
  @prop({ref: ()=> EUTankStatistic})
  tank_stats: Ref<EUTankStatistic>;
}

@ObjectType()
export class RUPlayer extends Player{ 
  @Field(()=> RUClan)
  @prop({ref: ()=> RUClan})
  clan_id: Ref<RUClan>;

  @Field(()=> RUTankStatistic)
  @prop({ref: ()=> RUTankStatistic})
  tank_stats: Ref<RUTankStatistic>;
}

@ObjectType()
export class NAPlayer extends Player{ 
  @Field(()=> NAClan)
  @prop({ref: ()=> NAClan})
  clan_id: Ref<NAClan>;

  @Field(()=> NATankStatistic)
  @prop({ref: ()=> NATankStatistic})
  tank_stats: Ref<NATankStatistic>;
}

@ObjectType()
export class ASIAPlayer extends Player{ 
  @Field(()=> ASIAClan)
  @prop({ref: ()=> ASIAClan})
  clan_id: Ref<ASIAClan>;

  @Field(()=> ASIATankStatistic)
  @prop({ref: ()=> ASIATankStatistic})
  tank_stats: Ref<ASIATankStatistic>;
}