import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
import config from './config/config';
import logging from './config/logging';
import { resolvers } from './resolvers';
import { TankData } from './models/index';
import wn8refresher from './datacollector/wn8refresher';

const NAMESPACE = 'SERVER';

const main = async () => {
  /* Connect to MongoDB */
  mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
      logging.info(NAMESPACE, 'Connected to MongoDB!');
    })
    .catch((error) => {
      logging.error(NAMESPACE, error.message, error);
    });

  /* Start Express and Apollo */
  const app = express();

  const apolloServer = new ApolloServer({ schema: await buildSchema({ resolvers,
    validate: false }) });

  apolloServer.start().then(() => {
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log('server started on http://localhost:4000/');
    })
  });

  // wn8refresher();
  const test = await TankData.find({_id: 1});
  console.log(test)
}

main();
