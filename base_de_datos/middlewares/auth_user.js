module.exports = function(req,res,next){
    //Si no incluye la palabra task entonces dejalos pasar
    if(!req.originalUrl.includes("tasks")) return next();
    
    if(req.session.userId) return next()
    
    res.redirect('/sessions');
}