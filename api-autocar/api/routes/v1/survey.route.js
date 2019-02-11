const Express = require('express');
const SurveyController = require(`${process.cwd()}/api/controllers/survey.controller`);
const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), SurveyController.findAll)
        .post(SurveyController.add)


module.exports = router;