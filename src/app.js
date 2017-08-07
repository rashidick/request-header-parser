import express from 'express';
import { Parser } from './parser';

export const app = express();

app.get('/', (req, res) => {
  res.status(200).send(Parser.parseRequest(req));
});
