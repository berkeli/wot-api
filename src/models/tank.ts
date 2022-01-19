import mongoose, { Schema } from 'mongoose';
import ITank from 'src/interfaces/tank';

const TankSchema: Schema = new Schema({
  _id: { type: Number, dropDups: true },
  name: { type: String },
  short_name: { type: String },
  nation: { type: String },
  is_premium: { type: Boolean },
  tier: { type: Number },
  images: {
    small_icon: { type: String },
    contour_icon: { type: String },
    big_icon: { type: String },
  },
  type: { type: String },
  tag: { type: String },
})

export default mongoose.model<ITank>('Tank', TankSchema)
