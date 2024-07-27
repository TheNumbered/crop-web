import express from "express";
import ForumRouter from "./forums/index.js";
import getRootRouter from "./get-root.js";

const MainRouter = express.Router();
MainRouter.use(getRootRouter);
MainRouter.use("/forums", ForumRouter);

export default MainRouter;
