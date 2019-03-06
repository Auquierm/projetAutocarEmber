const Express = require('express');
const SurveyController = require(`${process.cwd()}/api/controllers/survey.controller`);
const Validate = require('express-validator');

const { listSurveys, createSurvey } = require('./../../validations/survey.validation');
const {authorize, ADMIN, CLIENT} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(Validate(listSurveys), SurveyController.findAll)
        .post(Validate(createSurvey), SurveyController.add)


module.exports = router;