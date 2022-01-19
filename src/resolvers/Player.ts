import { Query, Resolver } from 'type-graphql';

@Resolver()
export default class PlayerResover {
  @Query(() => String)
  player() {
    return 'Hello'
  }
}
