module.exports = app => {

    // Base URLS
    app.use('/api/community', require('./community.routes'))
    app.use('/api/event', require('./event.routes'))
    app.use('/api/profile', require('./profile.routes'))
    app.use('/api', require('./auth.routes'))
    app.use('/api/files', require('./files.routes'))
    app.use((req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    })
}