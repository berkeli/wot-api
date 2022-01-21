import { Field, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import {
  EUPlayer, RUPlayer, ASIAPlayer, NAPlayer,
} from './player';

@ObjectType()
class EUClanMember {
    @Field(() => String)
      role_i18n: string;

    @Field(() => String)
      joined_at: Date;

    @Field(() => Int)
    @prop({ required: true, ref: () => EUPlayer })
      account_id: Ref<EUPlayer>;
}
@ObjectType()
class NAClanMember {
    @Field(() => String)
      role_i18n: string;

    @Field(() => Date)
      joined_at: Date;

    @Field(() => Int)
    @prop({ required: true, ref: () => NAPlayer })
      account_id: Ref<NAPlayer>;
}
@ObjectType()
class RUClanMember {
    @Field(() => String)
      role_i18n: string;

    @Field(() => String)
      joined_at: Date;

    @Field(() => Int)
    @prop({ required: true, ref: () => RUPlayer })
      account_id: Ref<RUPlayer>;
}
@ObjectType()
class ASIAClanMember {
    @Field(() => String)
      role_i18n: string;

    @Field(() => String)
      joined_at: Date;

    @Field(() => Int)
    @prop({ required: true, ref: () => ASIAPlayer })
      account_id: Ref<ASIAPlayer>;
}

// Create an interface for Clan information
@ObjectType()
class Clan {
    @Field(() => Int)
      _id: number;

    @Field(() => String)
      color: string;

    @Field(() => String)
      created_at: Date;

    @Field(() => Int)
      members_count: number;

    @Field(() => String)
      name: string;

    @Field(() => String)
      tag: string;

    @Field(() => String)
      emblem: string;

    @Field(() => String)
      description_html: string;

    @Field(() => String)
      motto: string;

    @Field(() => Date)
      date_updated: Date
}

@ObjectType()
export class EUClan extends Clan {
    @Field(() => [EUClanMember])
      members: EUClanMember[];
}
@ObjectType()
export class NAClan extends Clan {
    @Field(() => [NAClanMember])
      members: NAClanMember[];
}
@ObjectType()
export class RUClan extends Clan {
    @Field(() => [RUClanMember])
      members: RUClanMember[];
}
@ObjectType()
export class ASIAClan extends Clan {
    @Field(() => [ASIAClanMember])
      members: ASIAClanMember[];
}
