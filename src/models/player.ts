import mongoose, { Schema } from 'mongoose';
import IPlayer from 'src/interfaces/player';

const PlayerSchema: Schema = new Schema({
  _id: { type: Number, unique: true, required: true },
  // Player Personal data
  // STATISTICS
  // -> ALL:
  max_frags_tank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tank' },
  spotted: { type: Number },
  max_xp: { type: Number },
  avg_damage_blocked: { type: Number },
  capture_points: { type: Number },
  survived_battles: { type: Number },
  dropped_capture_points: { type: Number },
  hits_percents: { type: Number },
  draws: { type: Number },
  tanking_factor: { type: Number },
  battles: { type: Number },
  avg_damage_assisted: { type: Number },
  frags: { type: Number },
  avg_damage_assisted_radio: { type: Number },
  max_xp_tank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tank' },
  max_damage_tank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tank' },
  max_damage: { type: Number },
  battle_avg_xp: { type: Number },
  wins: { type: Number },
  losses: { type: Number },
  damage_dealt: { type: Number },
  max_frags: { type: Number },
  avg_damage_assisted_track: { type: Number },
  // <- ALL
  trees_cut: { type: Number },
  last_battle_time: { type: Date },
  created_at: { type: Date },
  global_rating: { type: Number },
  nickname: { type: String },
  tier: { type: Number },
  date_updated: { type: Date, required: true, default: Date.now },
  date_updated_tdata: { type: Date },
  tank_data_needs_update: { type: Boolean, default: true },
  moeOne: { type: Number },
  moeTwo: { type: Number },
  moeThree: { type: Number },
  wn8: { type: Number },
  visits: { type: Number, default: 0 },
  isDeleted: { type: Boolean, default: false },
});

export default {
  eu: mongoose.model<IPlayer>('EUPlayer', PlayerSchema.clone().add({ clan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EUClans' } })),
  na: mongoose.model<IPlayer>('NAPlayer', PlayerSchema.clone().add({ clan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NAClans' } })),
  ru: mongoose.model<IPlayer>('RUPlayer', PlayerSchema.clone().add({ clan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RUClans' } })),
  asia: mongoose.model<IPlayer>('ASIAPlayer', PlayerSchema.clone().add({ clan_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ASIAClans' } })),
};
