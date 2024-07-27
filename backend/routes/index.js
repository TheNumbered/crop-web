import express from 'express';
import getRootRouter from './get-root.js';

const MainRouter = express.Router();
MainRouter.use(getRootRouter)

export default MainRouter;