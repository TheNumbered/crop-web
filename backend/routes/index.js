import express from "express";
import getCoursesRouter from "./courses/index.js";
import ForumRouter from "./forums/index.js";
import getRootRouter from "./get-root.js";
import marketRouter from "./market/index.js";

const MainRouter = express.Router();
MainRouter.use(getRootRouter);
MainRouter.use("/forums", ForumRouter);
MainRouter.use("/courses", getCoursesRouter);
MainRouter.use("/market", marketRouter);

export default MainRouter;
