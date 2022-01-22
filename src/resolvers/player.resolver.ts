import { Arg, Query, Resolver } from 'type-graphql';
import { EUPlayer, NAPlayer, RUPlayer, ASIAPlayer } from '../entities/player';
import { PlayerUnion } from '../entities/unions';

const samplePlayer = new EUPlayer();

@Resolver()
export default class PlayerResolver {
  @Query(() => PlayerUnion)
  player(
    @Arg('id') id: number,
  ): EUPlayer | NAPlayer | RUPlayer | ASIAPlayer {
    samplePlayer._id = id;
    samplePlayer.nickname = 'Berkeli';
    return samplePlayer
  }
}
