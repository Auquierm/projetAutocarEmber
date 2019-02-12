const Express = require('express');
const SurveyController = require(`${process.cwd()}/api/controllers/survey.controller`);
const Validate = require('express-validator');

const { listSurveys, createSurvey } = require('./../../validations/survey.validation');
const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), Validate(listSurveys), SurveyController.findAll)
        .post(Validate(createSurvey), SurveyController.add)


module.exports = router;