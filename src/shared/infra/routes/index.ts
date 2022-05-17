import { Router } from "express";
import { transactionsRouter } from "./transaction.routes";

const router = Router();

router.use(transactionsRouter)


export {router}

