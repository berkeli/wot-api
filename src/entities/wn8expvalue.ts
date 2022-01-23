import { Ref, prop } from '@typegoose/typegoose';
import { Field, ID, Int, ObjectType } from 'type-graphql';
import Tank from './tank';

// Create an interface for tank information
@ObjectType()
export default class wnepxval {
    @Field(() => ID)
    @prop({ ref: () => Tank })
      _id: number | Ref<Tank>;

    @Field(() => Int)
      expDef: number;

    @Field(() => Int)
      expFrag: number;

    @Field(() => Int)
      expSpot: number;

    @Field(() => Int)
      expDamage: number;

    @Field(() => Int)
      expWinRate: number;

    @Field(() => Date)
      date: Date
}
