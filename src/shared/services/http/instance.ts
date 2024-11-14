import axios from 'axios';

import constants from '@/shared/constants/constants';
import { setupInterceptorsTo } from './interceptors';

const http = setupInterceptorsTo(axios.create({ baseURL: constants.API.BASE_URL }));

export { http };
