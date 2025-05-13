import express from 'express';
import UserController from '../controllers/UserController.mjs';

const router = express.Router();

// @route: POST /api/user/register
// @desc:  register user route
// @access: Public
router.post("/register", UserController.register);

// @route: POST /api/user/login
// @desc:  login user route
// @access: Public
router.post("/login", UserController.login);

export default router;