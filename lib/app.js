import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import userController from './controllers/users.js';
import settingController from './controllers/settings.js';



const app = express();

app.use(express.json());

app.use(userController);
app.use(settingController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
