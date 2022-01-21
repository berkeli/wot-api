import mongoose from 'mongoose';
import { Field, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import {
  EUPlayer, NAPlayer, ASIAPlayer, RUPlayer,
} from './player';
import Tank from './tank';

@ObjectType()
class Session {
    @Field(() => Tank)
    @prop({ required: true, ref: () => Tank })
      tank_id: Ref<Tank>;

    @Field(() => Int)
      battles: number;

    @Field(() => Int)
      damage_dealt: number;

    @Field(() => Int)
      wins: number;

    @Field(() => Int)
      spotted: number;

    @Field(() => Int)
      frags: number;

    @Field(() => Int)
      dropped_capture_points: number;

    @Field(() => Int)
      wn8: number
}

// Create a class for player's game sessions
@ObjectType()
class GameSession {
    @Field(() => String)
      date: Date;

    @Field(() => [Session])
      session: mongoose.Types.Array<Session>;
}
@ObjectType()
export class EUGameSession extends GameSession {
    @Field(() => EUPlayer)
    @prop({ required: true, ref: () => EUPlayer })
      _id: Ref<EUPlayer>;
}

@ObjectType()
export class NAGameSession extends GameSession {
    @Field(() => NAPlayer)
    @prop({ required: true, ref: () => NAPlayer })
      _id: Ref<NAPlayer>;
}

@ObjectType()
export class RUGameSession extends GameSession {
    @Field(() => RUPlayer)
    @prop({ required: true, ref: () => RUPlayer })
      _id: Ref<RUPlayer>;
}

@ObjectType()
export class ASIAGameSession extends GameSession {
    @Field(() => ASIAPlayer)
    @prop({ required: true, ref: () => ASIAPlayer })
      _id: Ref<ASIAPlayer>;
}
