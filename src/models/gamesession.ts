import mongoose, { Schema } from 'mongoose';
import IGameSession from 'src/interfaces/gamesession';

const GameSessionSchema: Schema = new Schema({
  date: Date,
  session: [{
    tank_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tank' },
    battles: { type: Number },
    damage_dealt: { type: Number },
    wins: { type: Number },
    spotted: { type: Number },
    frags: { type: Number },
    dropped_capture_points: { type: Number },
    wn8: { type: Number },
  }],
});

export default {
  eu: mongoose.model<IGameSession>('EUGameSession', GameSessionSchema.clone().add({ player_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EUPlayer' } })),
  na: mongoose.model<IGameSession>('NAGameSession', GameSessionSchema.clone().add({ player_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NAPlayer' } })),
  ru: mongoose.model<IGameSession>('RUGameSession', GameSessionSchema.clone().add({ player_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RUPlayer' } })),
  asia: mongoose.model<IGameSession>('ASIAGameSession', GameSessionSchema.clone().add({ player_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ASIAPlayer' } })),
}
