const jwt = require('jsonwebtoken');
const Customer = require("../../../db/model/user");

const { sendErrorResponse, sendSuccessResponse } = require("../../../utils/response");

const registerCustomer = async (req, res) => {
    try {
        console.log(req)
        const {
            firstname,
            lastname,
            email,
            password,
        } = req.body;

        const customer = {
            firstname,
            lastname,
            email,
            password,
            fullname: `${firstname} ${lastname}`
        }

        const isEmailAlreadExist = await Customer.findOne({ email });

        if (isEmailAlreadExist) {
            return sendErrorResponse(res, `Email already exist!`, null, 200);
        }

        const isCreated = await Customer.create(customer);

        return !isCreated || isCreated.length === 0 ?
            sendErrorResponse(res, "Something went wrong!") :
            sendSuccessResponse(res, "User register successfully!");

    } catch (error) {
        return sendErrorResponse(res, error.message);
    }
};

const loginCustomer = async (req, res) => {
    try {
        console.log("hello")
        const { email, password } = req.body;

        const customer = await Customer.findOne({ email }).select("+password -createdAt -updatedAt -__v");

        if (!customer) return sendErrorResponse(res, "Email or password invalid!")

        const isPasswordMatch = await customer.comparePassword(password);

        if (!isPasswordMatch) return sendErrorResponse(res, "Email or password invalid!");

        if (!customer?.isActive) return sendErrorResponse(res, "Your account is inactive!");
        
        const token = jwt.sign({
            id: customer._id,
            email: customer.email,
            firstname: customer.firstname,
            lastname: customer.lastname,
            fullname: customer.fullname,
            phone: customer.phone,
        }, process.env.JWT_SECRET, { expiresIn: "2d" });

        return sendSuccessResponse(res, "User login successfully!", { ...customer?._doc, password: undefined, token });
    } catch (error) {
        return sendErrorResponse(res, error.message);
    }
};

const customerProfile = async (req, res) => {
    try {
        const customerId = req.user._id;

        const customer = await Customer.findOne({ _id: customerId }).select('-__v -updatedAt -createdAt -isActive');

        if (!customer) return sendErrorResponse(res, "Customer not found!");

        return sendSuccessResponse(res, "Customer profile retrieved successfully!", customer);

    } catch (error) {
        return sendErrorResponse(res, error.message);
    }
}

module.exports = {
    registerCustomer,
    loginCustomer,
    customerProfile
}