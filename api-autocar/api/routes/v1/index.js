const Express  = require('express'),
      AuthRoutes = require('./auth.route'),
      UserRoutes = require('./user.route'),
      ClientRoutes = require('./client.route'),
      AgentRoutes = require('./agent.route'),
      ChauffeurRoutes = require('./chauffeur.route');

const router = Express.Router();

router.get('/status', (req, res) => res.send(200));

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);
router.use('/clients', ClientRoutes);
router.use('/agents', AgentRoutes);
router.use('/chauffeurs', ChauffeurRoutes);

module.exports = router;