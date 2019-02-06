const Express = require('express');
const AgentController = require(`${process.cwd()}/api/controllers/agent.controller`);

// const {authorize, LOGGED_USER} = require('../../middlewares/authmiddleware');

const router = Express.Router();

router
    .route('/')
        .get(/*authorize(LOGGED_USER),*/AgentController.findAll)
        .post(AgentController.add)


module.exports = router;