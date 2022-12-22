import http from 'http'

export default (err, _ ,res, __) => {
    if(process.env.NODE_ENV == 'devolopment') {
        return res.status(err.status).json({
            message : err.message
        })
    }

    if(process.env.NODE_ENV == 'production' ) {
        return res.status(err.status).json({
            message : http.STATUS_CODES[err.status] || 500
        })
    }
}