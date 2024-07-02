const isTokenIncluded =(req) => {
   
    return (
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    )

}

const getAccessTokenFromHeader = (req) => {

    const authorization = req.headers.authorization

    const access_token = authorization.split(" ")[1]

    return access_token
}

const sendToken = (user,statusCode ,res)=>{
    console.log('w3r1')
    const token = user.generateJwtFromUser()
console.log('w3r')
    return res.status(statusCode).json({
        success: true ,
        token
    })

}

module.exports ={
    sendToken,
    isTokenIncluded,
    getAccessTokenFromHeader
}
