const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// /api/Users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// /api/Users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/Users/:id/friends
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
router
    .route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = router;