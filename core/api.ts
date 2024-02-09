import { config } from './config';
import axios from 'axios';

export const api = axios.create({ baseURL: `${config.apiHost}/data/2.5` });
