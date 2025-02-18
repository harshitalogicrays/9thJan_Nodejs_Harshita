import express from 'express';
const router = express.Router();

/* http://localhost:1000/users */
router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});

export default router
