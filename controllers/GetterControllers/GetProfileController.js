const { User } = require('../../models')

const { responseMessage, verifyToken } = require('../../helpers')

async function GetCounselorDetails(req, res) {
  const userId = req.user._id;

  try {
    const user = await User.findById({ _id: userId })
    const data = {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      isProfileCreated: user.isProfileCreated,
    }
    return responseMessage(res, 200, 'Details of counselor', user)
  } catch (error) {
    return responseMessage(res, 500, 'Unable to get details of counselor')
  }
}

module.exports = {
  GetCounselorDetails
}