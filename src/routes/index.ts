// server/src/routes/index.ts

import { Router } from 'express';
import asyncHandler from 'express-async-handler';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    console.log(JSON.stringify(req.header));
    res.status(200).send('Server Running...');
  })
);

router.get(
  '/private-route',
  asyncHandler(async (req, res, next) => {
    console.log(JSON.stringify(req.header));
    const incomingHeaders = req.headers;

    res.status(200).json({
      message: 'Featured products retrieved successfully',
      incomingHeaders: incomingHeaders,
    });
  })
);

export default router;
