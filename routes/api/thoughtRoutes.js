const { get } = require('./thoughtRoutes');

const router = require('express'). Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    addReaction,
    deleteReaction,
} = '../../controllers/thoughtController.js';

// get all thoughts
router.route('/').get(getThoughts);

// get single thought
router.route('/:thoughtId').get(getSingleThought);

// create thought
router.route('/:thoughtId').get(getSingleThought).post(createThought);

// add reaction
router.route(':thoughtId/reactions').get(getSingleThought).post(addReaction);

// delete reaction
router.route(':thoughtId/reactions').get(getSingleThought).delete(deleteReaction);

module.exports = router;