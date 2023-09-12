const router = require('express'). Router();

const {
getUsers,
getSingleUser,
createUser,
deleteUser,
updateUser,

} = '../../controllers/userController.js'

// get all users
router.route('/').get(getUsers);

// create user
router.route('/').get(getUsers).post(createUser);

// get single user by id
router.route('/:userId').get(getSingleUser);

// update user by id
router.route('/:userId').get(getSingleUser).put(updateUser);

// delete user by id
router.route('/:userId').get(getSingleUser).delete(deleteUser);

module.exports = router;