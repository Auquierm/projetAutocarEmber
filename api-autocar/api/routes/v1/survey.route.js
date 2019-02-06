const Express = require('express');
const SurveyController = require(`${process.cwd()}/api/controllers/survey.controller`);


const router = Express.Router();

router
    .route('/')
        .get(SurveyController.findAll)
        .post(SurveyController.add)


module.exports = router;