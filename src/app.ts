// server/src/app.ts

import 'dotenv/config';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';
import flash from 'express-flash';
import morgan from 'morgan';
import {
  generalErrorHandler,
  notFoundHandler,
} from './middleware/errorMiddleware';
import routes from './routes/index';
import { checkJwt } from './middleware/authMiddleware';

const PORT = process.env.PORT || 5000;
const app = express();
const baseUrl = process.env.AUTH0_BASE_URL;

app.use(morgan('dev'));
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use('/api', routes);

app.use(notFoundHandler);
app.use(generalErrorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});

// export default app;
module.exports = app;
