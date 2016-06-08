import express from 'express';
const router = express.Router();

import config from '../config';
import log from '../util/log';

const logger = log.getLogger('router');

router.get('/config', (request, response) => response.json(config));

logger.info('Init logger');
logger.info(`Backend Port ==>> ${config.backendPort}`);

export default router;
