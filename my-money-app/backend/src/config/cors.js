module.exports = (req, res, next) => {
    res.header('ACCESS-CONTROL-ALLOW-ORIGIN', '*')
    res.header('ACCESS-CONTROL-ALLOW-METHODS', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('ACCESS-CONTROL-ALLOW-HEADERS', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
}