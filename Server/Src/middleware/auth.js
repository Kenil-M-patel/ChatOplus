const jwt = require('jsonwebtoken');
const userSchema = require("../db/model/user");
const { sendErrorResponse } = require('../utils/response');

const allowedUrls = [
    '/v1/auth/register',
    '/v1/auth/login',
];

const authorized = async (req, res, next) => {
    const allowed = allowedUrls.some(url => {
        const regexString = url.replace(':id', '([a-f\\d]{24})');
        const regex = new RegExp(`^${regexString}$`);
        return regex.test(req.path);
    });


    if (allowed) return next();

    const authorizationHeader = req.get('Authorization') || req.headers["authorization"];

    if (!authorizationHeader) return sendErrorResponse(res, "Authorization header missing!", null, 401);


    token = authorizationHeader?.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userSchema.findById(decoded?.id);
        req.user = user;

        next();
    } catch (error) {
        return sendErrorResponse(res, "Unauthorized or invalid token!", null, 401);
    }
}

module.exports = authorized;