import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import config from './config/config';
import logging from './config/logging';
import PlayerResolver from './resolvers/Player';

const NAMESPACE = 'SERVER';

const main = async () => {
  /* Connect to MongoDB */
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
      logging.info(NAMESPACE, 'Connected to MongoDB!');
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);
    });

  /* Start Express and Apollo */
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PlayerResolver],
      validate: false,
    }),
  });

  apolloServer.start().then((res) => {
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log('server started on http://localhost:4000/');
    })
  });
}

main();
