const Logger = require ('../../config/logger.config')
const Notifier = require('node-notifier');
const Boom = require('boom');

exports.log = (err, str, req) =>{
    let message = `Error in ${req.method} ${req.url} ${str} \n`;
    Logger.error(message);
};

exports.notify = (err, str, req) => {
    let title = `Error in ${req.method} ${req.url}`;
    Notifier.notify({
        title : title,
        message : str
    })
};

exports.exit = (err, req, res, next) => {
    let code = typeof(err.httpStatusCode) !== 'undefined' ? err.httpStatusCode : 500;
    res.status(code);
    res.json(err);
};

exports.notFound = (req, res, next) =>{
    res.json(Boom.notFound('End point not found'));
}