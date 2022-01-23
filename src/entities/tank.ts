import { Field, ID, Int, ObjectType } from 'type-graphql';
import { prop } from '@typegoose/typegoose';

// Create an interface for tank information
@ObjectType()
class TankImages {
  @Field(() => String, { nullable: true })
    small_icon: string;

  @Field(() => String, { nullable: true })
    contour_icon: string;

  @Field(() => String, { nullable: true })
    big_icon: string
}

@ObjectType()
export default class Tank {
  @Field(() => Int)
  @prop()
    _id: number;

  @Field(() => String, { nullable: true })
  @prop()
    tag: string;

  @Field(() => String, { nullable: true })
    name: string;

  @Field(() => String, { nullable: true })
    short_name: string;

  @Field(() => String, { nullable: true })
    nation: string;

  @Field(() => Boolean, { nullable: true })
    is_premium: boolean;

  @Field(() => Int, { nullable: true })
    tier: number;

  @Field(() => TankImages, { nullable: true })
    images: TankImages;

  @Field(() => String, { nullable: true })
    type: string;
}
