const router = require('express'). Router();

const {
getUsers,
getSingleUser,
createUser,
deleteUser,
updateUser,
addFriend,
deleteFriend,

} = '../../controllers/userController.js';

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

// add a friend
router.route(':userId/friends/:friendId').get(getSingleUser).post(addFriend);

// delete a friend
router.route(':userId/friends/:friendId').get(getSingleUser).delete(deleteFriend);

module.exports = router;