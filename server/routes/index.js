module.exports = app => {

    // Base URLS
    app.use('/api/community', require('./community.routes'))
    app.use('/api/event', require('./event.routes'))
    app.use('/api', require('./auth.routes'))
}