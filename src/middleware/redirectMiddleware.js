const redirectMiddleware = (req, res, next) =>{
    if(!req.session || !req.session.user || !req.session.token){ // jika tidak ada session atau user atau token maka di balikin ke menu login
        res.redirect('/login');
    
    } 
    next();
}

module.exports = redirectMiddleware;