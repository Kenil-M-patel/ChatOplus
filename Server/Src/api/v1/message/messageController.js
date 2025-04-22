const message =  require('../../../db/model/message')

const { sendErrorResponse, sendSuccessResponse } = require("../../../utils/response");
const { request } = require('express');

const getmessages = async (req, res) => {

  
    try {
        const senderId = req.user.id;
    
        const { receiverId, limit = 100, page = 1 } = req.query;
    
        if (!receiverId) {
          return sendErrorResponse(res, "receiverId is required.", null, 400);
        }
    
        const pageLimit = parseInt(limit, 10);
        const skip = (parseInt(page, 10) - 1) * pageLimit;
    

        const messages = await message.find({
          $or: [
            { sender: senderId, receiver: receiverId },
            { sender: receiverId, receiver: senderId }
          ]
        })
          .sort({ timestamp: -1 }) // Sort by createdAt descending
          .skip(skip) // Pagination
          .limit(pageLimit); // Limit to 100 (or any limit)
    
        // 5. Return success response
        return sendSuccessResponse(res, "Messages retrieved successfully.", messages, 200);
        
      } catch (err) {
        console.error("Error fetching messages:", err);
        return sendErrorResponse(res, "Internal server error.", null, 500);
      }
};


module.exports = {
    getmessages,
}