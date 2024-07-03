const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createUser, updateUser, deleteUser, getUser, getAllUser } = require('../controllers/userController');

router.get('/', auth, getAllUser);
router.post('/', auth, createUser);
router.put('/:id', auth, updateUser);
router.delete('/:id', auth, deleteUser);
router.get('/:id', auth, getUser);

module.exports = router;
