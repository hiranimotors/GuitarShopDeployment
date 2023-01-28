const isLoggedIn = (req,res,next) => {
    if(!req.session.currentUser) {
        res.redirect('/login')
    }
    next()
}

const isLoggedOut = (req,res,next) => {
    if(req.session.currentUser) {
        res.redirect('/profile')
    }
    next()
}

const isAdmin = (req, res, next) => {
    const userType = req.session.currentUser.userType
    console.log(req.session.currentUser.userType)
    if(userType !== "admin"){
        res.redirect('/profile')
    } 
    
    next()
}

module.exports = {isLoggedIn,isLoggedOut,isAdmin}