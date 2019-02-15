const Express  = require('express'),
      AuthRoutes = require('./auth.route'),
      UserRoutes = require('./user.route'),
      ClientRoutes = require('./client.route'),
      AgentRoutes = require('./agent.route'),
      DriverRoutes = require('./driver.route'),
      QuoteRoutes = require('./quote.route'),
      SurveyRoutes = require('./survey.route'),
      PricingRoutes = require('./pricing.route'),
      TripRoutes = require('./trip.route');
    //   TokenGenRoutes = require('./tokenGeneraton.route');

const router = Express.Router();

router.get('/status', (req, res) => res.send(200));

router.use('/auth', AuthRoutes);
router.use('/users', UserRoutes);
router.use('/clients', ClientRoutes);
router.use('/agents', AgentRoutes);
router.use('/drivers', DriverRoutes);
router.use('/quotes', QuoteRoutes);
router.use('/surveys', SurveyRoutes);
router.use('/pricings', PricingRoutes);
router.use('/trips', TripRoutes);
// router.use('/tokens', TokenGenRoutes);

module.exports = router;