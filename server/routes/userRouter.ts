import express, { Request, Response } from 'express';

import userController from '../controllers/userController.js';

import verifyToken from '../utils/verify.js';

const userRouter = express.Router();

userRouter.post(
	'/add_ProblemToBoard',
	verifyToken,
	userController.add_ProblemToBoard,
	(req: Request, res: Response) => {
		res.status(200).send(res.locals.problems);
	}
);

userRouter.post(
	'/update_ProblemCompletedStatus_IncrementByOne',
	verifyToken,
	userController.update_ProblemCompletedStatus_IncrementByOne,
	(_req: Request, res: Response) => {
		res.status(200).send(res.locals.problems);
	}
);

export default userRouter;
