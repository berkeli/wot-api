import { Query, Resolver } from 'type-graphql';
import { PlayerUnion } from '../entities/unions';

@Resolver()
export default class PlayerResolver {
  @Query(() => PlayerUnion)
  player() {
    return {
      _id: 23123123,
      nickname: 'Berkeli',
    }
  }
}
