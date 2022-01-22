import { Field, Int, ObjectType } from 'type-graphql';
import { prop, Ref } from 'typegoose';
import {
  EUPlayer, RUPlayer, ASIAPlayer, NAPlayer,
} from './player';

@ObjectType()
class ClanMember {
    @Field(() => String, { nullable: true })
      role_i18n: string;

    @Field(() => String, { nullable: true })
      joined_at: Date;
}

@ObjectType()
class EUClanMember extends ClanMember {
    @Field(() => Int)
    @prop({ required: true, ref: () => EUPlayer })
      account_id: Ref<EUPlayer>;
}

@ObjectType()
class NAClanMember extends ClanMember {
    @Field(() => Int)
    @prop({ required: true, ref: () => NAPlayer })
      account_id: Ref<NAPlayer>;
}

@ObjectType()
class RUClanMember extends ClanMember {
    @Field(() => Int)
    @prop({ required: true, ref: () => RUPlayer })
      account_id: Ref<RUPlayer>;
}

@ObjectType()
class ASIAClanMember extends ClanMember {
    @Field(() => Int)
    @prop({ required: true, ref: () => ASIAPlayer })
      account_id: Ref<ASIAPlayer>;
}

// Create an interface for Clan information
@ObjectType()
class Clan {
    @Field(() => Int)
      _id: number;

    @Field(() => String, { nullable: true })
      color: string;

    @Field(() => String, { nullable: true })
      created_at: Date;

    @Field(() => Int, { nullable: true })
      members_count: number;

    @Field(() => String, { nullable: true })
      name: string;

    @Field(() => String, { nullable: true })
      tag: string;

    @Field(() => String, { nullable: true })
      emblem: string;

    @Field(() => String, { nullable: true })
      description_html: string;

    @Field(() => String, { nullable: true })
      motto: string;

    @Field(() => Date, { nullable: true })
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
