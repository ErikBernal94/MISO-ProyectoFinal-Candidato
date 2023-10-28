const jwt = require('jsonwebtoken')

TOKEN_SECRET = 'secret_key';
// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const bearer = token.split(' ')[1]; 
        const verified = jwt.verify(bearer, TOKEN_SECRET)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(401).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;