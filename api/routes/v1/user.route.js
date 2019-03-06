import { Router } from 'express';
import userController from '../../controller/user.controller';

const userRoute = Router();

userRoute.post('/signup', userController.addUser);
userRoute.post('/login', userController.loginUser);

export default userRoute;
