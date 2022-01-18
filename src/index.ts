import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import logging from './config/logging';

const NAMESPACE = 'SERVER';
const app = express();

/* Connect to MongoDB */
mongoose
  .connect(config.mongo.url, config.mongo.options)
  .then((result) => {
    logging.info(NAMESPACE, 'Connected to MongoDB!');
  })
  .catch((error) => {
    logging.error(NAMESPACE, error.message, error);
  });
