import { Document, ObjectId } from 'mongoose';
import IPlayer from 'src/interfaces/player';
import ITank from 'src/interfaces/tank';

// Create an interface for tank information
export default interface IGameSession extends Document {
    _id: ObjectId,
    player_id: number | ObjectId | IPlayer
    date: Date,
    session:[{
        tank_id: number | ObjectId | ITank,
        battles: number,
        damage_dealt: number,
        wins: number,
        spotted: number,
        frags: number,
        dropped_capture_points: number,
        wn8: number
    }]
}
