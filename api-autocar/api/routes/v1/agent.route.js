const Express = require('express');
const AgentController = require(`${process.cwd()}/api/controllers/agent.controller`);
const Validate = require('express-validator')

const {authorize, ADMIN} = require('./../../middlewares/auth.middleware');

const { listAgents, createAgent, getAgent, updateAgent, removeAgent } = require('./../../validations/agent.validation');

const router = Express.Router();

router
    .route('/')
        .get(authorize(ADMIN), Validate(listAgents), AgentController.findAll)
        .post(/*authorize(ADMIN),*/ Validate(createAgent), AgentController.add);

router
    .route('/:agentId')
        .get(authorize(ADMIN), Validate(getAgent), AgentController.findOne)
        .patch(authorize(ADMIN), Validate(updateAgent), AgentController.update)
        .delete(authorize(ADMIN), Validate(removeAgent), AgentController.remove);


module.exports = router;