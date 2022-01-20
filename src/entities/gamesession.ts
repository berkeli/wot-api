import mongoose from 'mongoose';
import { prop, Ref } from 'typegoose';
import { EUPlayer, NAPlayer, ASIAPlayer, RUPlayer} from 'src/entities/player';
import Tank from 'src/entities/tank';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
class Session {
    @Field(()=> Tank)
    @prop({required:true, ref: ()=> Tank})
    tank_id: Ref<Tank>;

    @Field(()=> Number)
    battles: number;

    @Field(()=> Number)
    damage_dealt: number;

    @Field(()=> Number)
    wins: number;

    @Field(()=> Number)
    spotted: number;

    @Field(()=> Number)
    frags: number;

    @Field(()=> Number)
    dropped_capture_points: number;

    @Field(()=> Number)
    wn8: number
}

// Create a class for player's game sessions
@ObjectType()
class GameSession {
    @Field(()=> Date)
    date: Date;
    
    @Field(()=>[Session])
    session: mongoose.Types.Array<Session>;
}
@ObjectType()
export class EUGameSession extends GameSession {
    @Field(()=> EUPlayer)
    @prop({required: true, ref: ()=> EUPlayer})
    _id: Ref<EUPlayer>;
}

@ObjectType()
export class NAGameSession extends GameSession {
    @Field(()=> NAPlayer)
    @prop({required: true, ref: ()=> NAPlayer})
    _id: Ref<NAPlayer>;
}

@ObjectType()
export class RUGameSession extends GameSession {
    @Field(()=> RUPlayer)
    @prop({required: true, ref: ()=> RUPlayer})
    _id: Ref<RUPlayer>;
}

@ObjectType()
export class ASIAGameSession extends GameSession {
    @Field(()=> ASIAPlayer)
    @prop({required: true, ref: ()=> ASIAPlayer})
    _id: Ref<ASIAPlayer>;
}
