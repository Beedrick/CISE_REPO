import * as dotenv from 'dotenv';
import { Db } from 'mongodb';

dotenv.config();

export const DB_URI = process.env.DB_URI as string;
