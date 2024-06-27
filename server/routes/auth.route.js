// server/routes/auth.route.js

import express from 'express';
import { signin, signup } from '../controllers/auth.controller.js'; // Ensure the path is correct and includes .js

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
