const router = require('express'). Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
} = '../../controllers/thoughtController.js';

// get all thoughts
router.route('/').get(getThoughts);

// get single thought
router.route('/:thoughtId').get(getSingleThought);

// create thought
router.route('/:thoughtId').get(getSingleThought).post(createThought);

module.exports = router;