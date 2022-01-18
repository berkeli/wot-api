import mongoose, { Schema } from 'mongoose';
import IClan from 'src/interfaces/clan';

const ClanSchema:Schema = new Schema({
  _id: { type: Number, dropDups: true, required: true },
  color: { type: String },
  created_at: { type: Date },
  members_count: { type: Number },
  name: { type: String },
  tag: { type: String },
  emblem: { type: String },
  description_html: { type: String },
  motto: { type: String },
  members: [{
    role_i18n: { type: String },
    joined_at: { type: Date },
    account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tank' },
  }],
  date_updated: { type: Date },
})

export default {
  eu: mongoose.model<IClan>('EUclan', ClanSchema.clone().add(new Schema({
    members: [{
      role_i18n: { type: String },
      joined_at: { type: Date },
      account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'EUPlayer' },
    }],
  }))),
  na: mongoose.model<IClan>('NAClan', ClanSchema.clone().add(new Schema({
    members: [{
      role_i18n: { type: String },
      joined_at: { type: Date },
      account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'NAPlayer' },
    }],
  }))),
  ru: mongoose.model<IClan>('RUclan', ClanSchema.clone().add(new Schema({
    members: [{
      role_i18n: { type: String },
      joined_at: { type: Date },
      account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'RUPlayer' },
    }],
  }))),
  asia: mongoose.model<IClan>('ASIAclan', ClanSchema.clone().add(new Schema({
    members: [{
      role_i18n: { type: String },
      joined_at: { type: Date },
      account_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ASIAPlayer' },
    }],
  }))),
};
