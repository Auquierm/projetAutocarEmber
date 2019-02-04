const Express  = require('express'),
      AuthRoutes = require('./auth.route'),
      UserRoutes = require('./user.route'),
      ClientRoutes = require('./client.route');

const router = Express.Router();

router.get('/status', (req, res) => res.send(200));

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);
router.use('/clients', ClientRoutes);

module.exports = router;