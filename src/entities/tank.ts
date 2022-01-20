import { Field, ObjectType } from 'type-graphql';

// Create an interface for tank information
@ObjectType()
class TankImages {
  @Field(() => String)
  small_icon: string;

  @Field(() => String)
  contour_icon: string;

  @Field(() => String)
  big_icon: string
}

@ObjectType()
export default class Tank {
  @Field(() => Number)
  _id: number;

  @Field(() => String)
  tag: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  short_name: string;

  @Field(() => String)
  nation: string;

  @Field(() => Boolean)
  is_premium: boolean;

  @Field(() => Number)
  tier: number;

  @Field(() => TankImages)
  images: TankImages;

  @Field(() => String)
  type: string;
}
