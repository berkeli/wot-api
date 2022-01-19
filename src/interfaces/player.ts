import { Document, ObjectId } from 'mongoose';
import IClan from 'src/interfaces/clan';
import ITank from 'src/interfaces/tank';
import ITankStatistic from './tankstatistic';

interface IHistoricalData {
  date: Date,
  global_rating: number,
  battles: number,
  wins: number,
  wn8: number,
  exp: number,
  moeOne: number,
  moeTwo: number,
  moeThree: number,
  tier: number,
}

// Create an interface for Player information
export default interface IPlayer extends Document {
  _id: ObjectId,
  max_frags_tank_id: number,
  spotted: number,
  max_xp: number,
  avg_damage_blocked: number,
  capture_points: number,
  survived_battles: number,
  dropped_capture_points: number,
  hits_percents: number,
  draws: number,
  tanking_factor: number,
  battles: number,
  avg_damage_assisted: number,
  frags: number,
  avg_damage_assisted_radio: number,
  max_xp_tank_id: number | ObjectId | ITank,
  max_damage_tank_id: number | ObjectId | ITank,
  max_damage: number,
  battle_avg_xp: number,
  wins: number,
  losses: number,
  damage_dealt: number,
  max_frags: number,
  avg_damage_assisted_track: number,
  trees_cut: number,
  last_battle_time: Date,
  created_at: Date,
  global_rating: number,
  clan_id: number | ObjectId | IClan,
  nickname: string,
  tier: number,
  date_updated: Date,
  date_updated_tdata: Date,
  tank_data_needs_update: boolean,
  moeOne: number,
  moeTwo: number,
  moeThree: number,
  wn8: number,
  visits: number
  isDeleted: boolean,
  tank_stats: number | ObjectId | ITankStatistic,
  historical_data: IHistoricalData[],
}
