const Express  = require('express'),
      AuthRoutes = require('./auth.route'),
      UserRoutes = require('./user.route'),
      ClientRoutes = require('./client.route'),
      AgentRoutes = require('./agent.route'),
      ChauffeurRoutes = require('./chauffeur.route'),
      DevisRoutes = require('./devis.route'),
      SurveyRoutes = require('./survey.route'),
      TarificationRoutes = require('./tarification.route.js'),
      VoyageRoutes = require('./voyage.route');

const router = Express.Router();

router.get('/status', (req, res) => res.send(200));

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);
router.use('/clients', ClientRoutes);
router.use('/agents', AgentRoutes);
router.use('/chauffeurs', ChauffeurRoutes);
router.use('/devis', DevisRoutes);
router.use('/surveys', SurveyRoutes);
router.use('/tarifs', TarificationRoutes);
router.use('/voyages', VoyageRoutes);

module.exports = router;