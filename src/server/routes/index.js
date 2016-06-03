import express from 'express';
const router = express.Router();

import config from '../config';
import log from '../util/log';

const logger = log.getLogger('router');

router.get('/', (request, response) => response.send('Hello world'));

logger.info('Init logger');
logger.info(`Backend Port ==>> ${config.backendPort}`);

export default router;
