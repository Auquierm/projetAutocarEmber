const Express = require('express');
const ChauffeurController = require(`${process.cwd()}/api/controllers/chauffeur.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(ChauffeurController.findAll)
        .post(ChauffeurController.add)


module.exports = router;