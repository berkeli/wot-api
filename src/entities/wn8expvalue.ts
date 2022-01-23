import { Ref, prop } from '@typegoose/typegoose';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import Tank from './tank';

// Create an interface for tank information
@ObjectType()
export default class WN8ExpVal {
    @Field(() => ID)
    @prop({ ref: () => Tank, type: () => Number })
      _id: number | Ref<Tank>;

    @Field(() => Int)
    @prop()
      expDef: number;

    @Field(() => Int)
    @prop()
      expFrag: number;

    @Field(() => Int)
    @prop()
      expSpot: number;

    @Field(() => Int)
    @prop()
      expDamage: number;

    @Field(() => Int)
    @prop()
      expWinRate: number;

    @Field(() => String)
    @prop()
      date: string
}
