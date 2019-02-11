const Express = require('express');
const AgentController = require(`${process.cwd()}/api/controllers/agent.controller`);

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), AgentController.findAll)
        .post(/*authorize(ADMIN),*/AgentController.add);

router
    .route('/:agentId')
        .get(authorize(ADMIN), AgentController.findOne)
        .patch(authorize(ADMIN), AgentController.update)
        .delete(authorize(ADMIN), AgentController.remove);


module.exports = router;