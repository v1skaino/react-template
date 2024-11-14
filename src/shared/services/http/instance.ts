import axios from 'axios';

import config from '@/shared/config/config';
import { setupInterceptorsTo } from './interceptors';

const http = setupInterceptorsTo(axios.create({ baseURL: config.API.BASE_URL }));

export { http };
